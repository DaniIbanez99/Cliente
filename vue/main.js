//V-MODEL
var app = new Vue({
    el: '#Model',
    data:{
        nombre : ''
    }
})

//IF-MODEL
var app = new Vue({
    el: '#AplicacionIF',
    data:{
        numero : 1
    }
})

//FOR-MODEL

var app = new Vue({
    el: '#AplicacionFOR',
    data:{ 
        companeros: ['Sebas', 'Bea', 'Carol', 'Fernando', 'Ramirez', 'Ariel']
    }
})

//MOUSE-MODEL
var app = new Vue({
    el : '#AplicacionClick',
    data: {
        mensaje: ''
    },
    methods:{
        showMessage: function (){
            this.mensaje = 'Le diste al botón y no pasó nada LOSER';
        },
        hideMessage: function (){
            this.mensaje = '';
        }
    }
})

//MOUSE-MODEL

var app = new Vue({
    el: '#AplicacionMouse',
    data: {
        mensaje1 : ''
    },
    methods:{
        showMessage: function (){
            this.mensaje1 = 'El ratón pasó sobre el párrafo';
        },
        hideMessage: function (){
            this.mensaje1 = '';
        }
    }
})

//BIND-MODEL
var app = new Vue({
    el: '#AplicacionBind',
    data:{
        backgroundColor: 'red',
        width: '40%'
    }
})