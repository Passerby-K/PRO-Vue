<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
      <city-alphabet :cities="cities"></city-alphabet></city-alphabet>
  </div>
</template>

<script>
import axios from "axios"
import CityHeader from "./component/header"
import CitySearch from "./component/search"
import CityList from "./component/list"
import CityAlphabet from "./component/alphabet"
export default {
    name:"City",
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data (){
      return{
        cities:{},
        hotCities:[]

      }
    },
    methods:{
      getCity(){
        axios.get("./api/city.json")
        .then(this.handCity)
      },
      handCity(res){
        res=res.data
        console.log(res);
        
        if(res.ret&&res.data){
          const data=res.data
          this.cities=data.cities
          this.hotCities=data.hotCities
        }
      }
    },
    mounted (){
      this.getCity()
    }

}

</script>

<style>

</style>