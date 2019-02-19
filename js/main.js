import axios from 'axios'
var customData = require('js/list.json')

new Vue({
	el:'#app',
	data: {
		list:[]
	},
	created: function() {
		axios
		.get('js/list.json')
		.then(function(response){
			this.list = response.data
		}.bind(this)).catch(function(e){
			console.error(e)
		})
	}
})