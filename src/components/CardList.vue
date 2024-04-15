<template>

    <div class="container card-list">
    <h4 class="text-light bg-black p-3">Found {{ store.card.length }} cards</h4>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="card in store.card" :key="card.id" > 
            <CardComponent :id="card.id" :title="card.name" :image="card.card_images[0].image_url" :type="card.archetype"/>
        </div>
    </div> 
</div>
</template>

<script>
    import { store } from '../store.js';
    import CardComponent from './CardComponent.vue'
    export default {
        name:'CardList',
        components:{
            CardComponent,
        },
            data(){
                return{
                    store
                }
            }
        }

</script>

<style lang="scss" scoped>
    .card-list{
        background-color: white;
        padding: 30px;
        h4{
            margin-bottom: 0px;
        }
    }
</style>