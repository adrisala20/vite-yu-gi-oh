<template>

    <div class="container card-list">
        <div class="alert alert-danger " v-if="store.error.message">{{ store.error.message }}</div>

        <!-- <h4 class="text-light bg-black p-3">Found {{ store.card.length }} cards</h4> -->
        <div class="row" v-if="!store.loading">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in store.card" :key="card.id" > 
                <CardComponent :id="card.id" :title="card.name" :image="card.card_images[0].image_url" :type="card.archetype"/>
             </div>
        </div>
        <ApiLoader v-else />
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CardComponent from './CardComponent.vue';
    import ApiLoader from './ApiLoader.vue';
    export default {
        name:'CardList',
        components:{
            CardComponent,
            ApiLoader,
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