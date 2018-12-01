new Vue({
	el: '#app',
    data: {
  	    title: 'Hello World',
        message: '',
        link: 'http:/google.com',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        sayHello (){
            return this.title;
        },
        increase: function(){
            return this.counter++;
        },
        updateCoordinates : function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})