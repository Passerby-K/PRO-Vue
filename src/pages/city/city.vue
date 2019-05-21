<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "./component/header"
import CitySearch from "./component/search"
export default {
    name:"City",
    components:{
      CityHeader,
      CitySearch
    }
}

</script>

<style>

</style>