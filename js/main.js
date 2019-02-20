
var app = new Vue({
	el:'#app',
	data:{
		val:50
	},
	methods: {
		handleChange: function(event) {
			var file = event.target.files[0]
			if(file && file.type.match(/^image\/(png|jpeg)$/)){
				this.preview = window.URL.createObjectURL(file)
			}
		}
	}
})