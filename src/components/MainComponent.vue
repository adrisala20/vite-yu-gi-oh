<template>
    <main>
        <div class="container">
            <select class="py-1 my-3" name="select" >
                <option value="">filtra ricerca</option>
                <option value="archetype">Archetype</option>
            </select>
           <CardList />
        </div>
    </main>
</template>

<script>
import {store} from '../store.js';
    import CardList from './CardList.vue';
    export default {
        name:'MainComponent',
        components:{
            CardList
        }
    }
</script>

<style lang="scss" scoped>
main{
    background-color: orange;
};
select{
    width: 200px;
}

</style>