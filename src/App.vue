<template>
  <HeaderComponent />
  <MainComponent @searchArchetype="setParams"/>
  
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
      setParams(){
        if(this.store.archetypeFilter){
          this.store.option.params.archetype = this.store.archetypeFilter
        }else{
          delete this.store.option.params.archetype
        }
        this.getCards();
      },

     getCards(){
      this.store.loading = true;
      this.store.error.message = null;
      axios.get(this.store.apiUrl + this.store.endPoints.cards, this.store.option).then((res)=>{
        this.store.cards = res.data.data;
        console.log(this.store.cards);
      }).catch((error)=>{
        this.store.error.message = error.message;
      }).finally(()=>{
        this.store.loading = false;
      });
     },
     getArchetype(){
      axios.get(this.store.apiUrl + this.store.endPoints.archetype).then((res)=>{
        this.store.archetypeList = res.data.slice(0,20);
      }).catch((error)=>{
        this.store.error.message = error.message;
      }).finally(()=>{
        this.store.loading = false;
      });
     }
    },
    created(){
      this.getCards();
      this.getArchetype();
    },
    mounted(){
      // console.log(this.store)
    },
    
  }
</script>

<style lang="scss" scoped>

</style>