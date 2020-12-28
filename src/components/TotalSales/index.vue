<template>
  <CommonCard title="累积销售额" value="￥ 32,039,165">
    <template>
      <div class='compare-wrapper'>
        <div class='compare'>
          <span>日同比</span>
          <span class="emphasis">7.25%</span>
          <div class="increase" />
        </div>
        <div class='compare'>
          <span>月同比</span>
          <span class="emphasis">7.25%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:total >
      <span>昨日销售额</span>
      <span class="emphasis">￥ 32,039,165</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin]
}
</script>

<style lang='scss' scoped>
  .compare-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare{
      margin-top: 3px;
      font-size: 12px;
      color: #666;
    }
  }
</style>
