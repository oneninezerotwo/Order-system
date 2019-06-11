<template>
  <div id="app">
    <Leftnav/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Leftnav from './components/mini/Leftnav.vue'
export default {
  name: "app",
  components: {
    Leftnav
  }
};
</script>

<style>
.main{
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden
}
</style>
