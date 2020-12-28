<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template slot="header">
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class='chart-wrapper'>
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">1234444</div>
                <v-chart :options="searchOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">1234444</div>
                <v-chart :options="searchOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                background
                :total="100"
                :page-size="25"
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template slot="header">
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size='small'>
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
           <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioSelect: '品类',
      tableData: [{ id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' }],
      searchOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
          areaStyle: { // 显示面积图
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      categoryOptions: {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          top: 20,
          left: 20
        }, {
          text: '累积订单量',
          subtext: 3590,
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          textAlign: 'center',
          left: '34.5%',
          top: '42.5%'
        }],
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str = params.seriesName + '<br />' +
              params.marker + params.data.legendname + '<br />' +
              '数量：' + params.data.value + '<br />' +
              '占比：' + params.data.percent + '%'
            return str
          }
        },
        series: [{
          type: 'pie',
          center: ['35%', '50%'], // 圆心的位置
          radius: ['45%', '60%'], // 两个圆的半径，实现空心
          labelLine: { // 标签的视觉引导线样式
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockwise: false, // 饼图的扇区是否是顺时针排布
          itemStyle: { // 设置宽度实现间距效果
            borderWidth: 4,
            borderColor: '#fff'
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }]
      }
    }
  },
  methods: {
    onPageChange(page) {
      console.log(page)
    }
  }
}
</script>

<style lang='scss' scoped>
.bottom-view{
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
