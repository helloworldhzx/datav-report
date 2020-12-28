<template>
  <CommonCard title="累积订单量" value="32,039,165">
    <template>
      <div id='total-order-chart' :style="{ width: '100%', height: '100%' }" />
    </template>
    <template v-slot:total >
      <span>昨日订单量</span>
      <span class="emphasis">32,039,165</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-order-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false // 两边留白
      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 200, 320, 532, 320, 834, 690, 530, 220, 620],
        areaStyle: { // 区域填充样式
          color: 'purple'
        },
         smooth: true, // 是否平滑曲线显示
         lineStyle: { // 隐藏线条
           width: 0
         },
         itemStyle: { // 隐藏圆点
           opacity: 0
         }
      }]
    })
  }
}
</script>

<style>

</style>
