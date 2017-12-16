<template>
	<div ref="line" class="line"></div>
</template>

<script>
	import echarts from 'echarts'
	import theme from './line_chart_theme'

    export default {
    	props: {
            xData: {
				default: []
			}, 
			yData: {
				default: []
			}, 
        },
		data () {
			return {
				lineEchart: null,
			}
		},
		computed: {
			option () {
				return {
					title: {
						text: '堆叠区域图'
					},
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : this.xData
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							type:'line',
							areaStyle: {normal: {}},
							data: this.yData
						},
					]
				}
			}
		},
		methods: {
			handleResize () {
				this.lineEchart.resize()
			},
		},
		watch: {
			option () {
				this.lineEchart.setOption(this.option)
			},
		},
  		beforeDestroy () {
    		window.removeEventListener('resize', this.handleResize)
  		},
		mounted() {
	      	this.$nextTick(function() {
		        this.lineEchart = echarts.init(this.$refs.line, theme)
    			this.lineEchart.setOption(this.option)
    			window.addEventListener('resize', this.handleResize)
			})
	    }	
	}
</script>

<style scoped>
	.line {
		width: 100%;
		min-height: 600px;
		margin-bottom: 10px;
	}
</style>