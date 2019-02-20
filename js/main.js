
var app = new Vue({
	el:'#app',
	data:{
		message : "Hello<strong>Vue.js!</strong>",
		count:0
	},
	methods:{
		handleClick: function(){
			alert('クリックしたよ')
		},
		handleScroll : function(){
			alert('スクロールしたよ')
		},
		handleWheel : function(){
			alert('マウスフィールを使ったよ')
		},
		view_click : function(){
			alert(this.count)
		}
	}
})