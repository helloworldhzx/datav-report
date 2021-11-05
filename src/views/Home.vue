<template>
  <div class="home">
    <test-view></test-view>
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from "../components/topView";
import SalesView from "../components/salesView";
import BottomView from "../components/bottomView";
import MapView from "../components/mapView";
import testView from "./testView";
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
    testView,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eeeeee;
  box-sizing: border-box;
}
</style>
