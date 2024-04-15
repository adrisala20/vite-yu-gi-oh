<template>
    <div v-for="card in store.card" :key="card.id">  
        <CardComponent :id="card.id"/>
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue'
    export default {
        name:'CardList',
        components:{
            CardComponent,
            data(){
                return{
                    store
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>