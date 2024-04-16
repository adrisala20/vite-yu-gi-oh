<template>
  <HeaderComponent />
  <MainComponent />
  
</template>

<script>
  
  import {store} from './store.js';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';

  export default {
    name:'App',
    components:{
      HeaderComponent,
      MainComponent,
     
    }, 
    data(){
      return{
        store
      }
    },
    methods:{
     getCards(){
      axios.get(this.store.apiUrl + this.store.endPoints.cards, this.store.options).then((res)=>{
        this.store.card = res.data.data;
      
        // console.log(this.store.card[0]);
      }).catch((error)=>{
        this.store.error.message = error.message;
      }).finally(()=>{
        this.store.loading = false;
      });
     }
    },
    created(){
      this.getCards();
    },
    mounted(){
      // console.log(this.store)
    },
    
  }
</script>

<style lang="scss" scoped>

</style>