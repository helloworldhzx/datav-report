<template>
  <CommonCard title="累积用户数" value="32,039,165">
    <template>
      <div id='total-user-chart' :style="{ width: '100%', height: '100%' }" />
    </template>
    <template v-slot:total >
      <span>日同比</span>
      <span class="emphasis">8.73</span>
      <div class="increase" />
      <span class='month'>月同比</span>
      <span class="emphasis">32,039,165</span>
      <div class="decrease" />
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
   mounted () {
      const chartDom = document.getElementById('total-user-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series: [{
          type: 'bar',
          stack: '总数',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总数',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总数',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // icon图形
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover' // 填充满
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }]
      })
   }
}
</script>

<style>
  .month{
    margin-left: 10px;
  }
</style>
