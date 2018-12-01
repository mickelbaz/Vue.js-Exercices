new Vue({
    el: '#exercise',
    data: {
        name: 'Michael',
        age: 21,
        image: 'https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png'
    },
    methods: {
        multipliedAge(){
            return this.age*3
        },
        randomNumber(){
            return Math.random()
        }
    }
})