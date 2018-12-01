new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack : function(){
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                heal: false,
                text: 'Player hits monster for ' + damage
            });

            if(this.checkWin()){
                return;
            };

            this.monsterAttack();
        },
        specialAttack : function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                heal: false,
                text: 'Player hits monster hard for ' + damage
            });

            if(this.checkWin()){
                return;
            };

            this.monsterAttack();
        },
        heal: function(){
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                heal: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp: function(){
            this.gameStarted = false;
        },
        calculateDamage: function(min, max){
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            return damage;
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm("You won! New game?")){
                    this.startGame();
                } else{
                    this.gameStarted = false;
                }
                return true
            } else if(this.playerHealth <= 0){
                if(confirm("You lost! New game?")){
                    this.startGame();
                } else{
                    this.gameStarted = false;
                }
                return true
            }
            return false
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                heal: false,
                text: 'Monster hits player for ' + damage
            });
            this.actionNumber++;

            this.checkWin();
        }
    }
    // watch: {
    //     monsterHealth: function (){
    //         var vm = this;
    //         if(vm.monsterHealth <= 0){
    //             alert('fin');
    //             vm.gameStarted = false;
    //         }
    //     }
    // }
});