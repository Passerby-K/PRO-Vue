<template>
  <div id="app">
    <!-- 缓存 -->
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
