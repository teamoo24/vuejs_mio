var app = new Vue({
	el:'#app',
	data: {
		name: 'キマイラ',
		list:[
			{id:1,name:'スライム',hp:100},
			{id:2,name:'ゴブリン',hp:200},
			{id:3,name:'オーク',hp:300},
			{id:4,name:'オーガ',hp:400}
		]
	},
	methods: {
		//追加ボタンをクリックした時のハンドラ
		doAdd: function(){
			//リスト内で一番大きいIDを取得
			var max = this.list.reduce(function(a,b) {
				return a > b.id ? a : b.id
			}, 0)
			// 新しいモンスターを追加
			this.list.push({
				id: max + 1,
				name: this.name,
				hp: 500
			})
		},
		doRemove: function(index){
			this.list.splice(index,1)
		}
	}
})