<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
   
</template>

<script>
  import {store} from './store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  export default {
    name:'App',
    components:{
      HeaderComponent,
      MainComponent,
      FooterComponent
    }, 
    data(){
      return{
        store
      }
    },
    methods:{
     getCharacters(){
      axios.get(this.store.apiUrl).then((res)=>{
        this.store.characters = res.data.data;
      })
     }
    },
    mounted(){
      console.log(store)
    }
    
  }
</script>

<style lang="scss" scoped>

</style>