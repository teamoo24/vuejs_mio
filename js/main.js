
var app = new Vue({
	el:'#app',
	data:{
		message : "Hello<strong>Vue.js!</strong>",
	},
	methods:{
		handleClick: function(){
			alert('クリックしたよ')
		}
	}
})