<template>
    <div>
        <CardComponent />
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue'
    export default {
        name:'CardList.vue',
        components:{
            CardComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>