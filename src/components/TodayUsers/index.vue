<template>
  <CommonCard title="今日交易用户数" value="32,039,165">
    <template>
      <div id="today-user-chart" :style="{ width: '100%', height: '100%' }" />
    </template>
    <template v-slot:total >
      <span>退货率</span>
      <span>5.82%</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted () {
      const chartDom = document.getElementById('today-user-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
          show: false
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
          type: 'bar',
          data: [620, 432, 220, 534, 790, 430, 200, 320, 532, 320, 834, 690, 530, 220],
          barWidth: '60%'
        }]
      })
    }
}
</script>

<style>

</style>
