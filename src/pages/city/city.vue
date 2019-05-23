<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
      <city-alphabet :cities="cities" @change="handclick"></city-alphabet>
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
        hotCities:[],
        letter:""

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
      },
      handclick(letter){
        this.letter=letter
        console.log(letter+"--city")
      }
    },
    mounted (){
      this.getCity()
    }

}

</script>

<style>

</style>