
new Vue({
	el:'#app',
	mounted: function(){
		console.log(this.$refs.hello)// これはp要素のdom( => <p>Hello</p> )
	}
})