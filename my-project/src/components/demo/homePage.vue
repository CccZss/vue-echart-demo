<template>
	<section>
		<line-chart class="line-chart"
			:xData = "chartData.xData" 
			:yData = "chartData.yData">
		</line-chart>
		<line-chart class="line-chart" 
			:xData = "chartData.xData" 
			:yData = "chartData.yData">
		</line-chart>
	</section>
</template>

<script>
	import lineChart from './lineChart'
	import {mapState, mapActions} from 'vuex';

	// 这个 visual 是弄 命名空间 用的
	import visual from  '../../store/types/visual'	

	export default {
		data () {
			return {
				chartData:  {
					xData: [],  // 横坐标
					yData: [],  // 绘图数据
				},
			}
		},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState({
				// 这里用到的是 es6 的函数写法
                'visual': state => {
                    return state.visual
				},
			}),
		},
		components: {
			// 什么要用到的其他组件
			'line-chart': lineChart
		},
		methods: {

			// 从这里引入 vueX 的 action 中的函数到组件中用
			...mapActions(visual.actions),

			init() {
				this.getLineChartData({
					// 传到后台的参数
					name: 'lineChart'
				}).then((data)=>{
					if(data.state) {
						this.chartData = this.visual.chartDatas
					}else {
						alert(data.info)
					}
				}).catch(err => {
					console.log(err)
				})
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>
	section .line-chart {
		float: left;
		width: 50%;
		height: 700px;
	}
</style>

