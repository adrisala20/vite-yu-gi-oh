<template>
    <main>
        <div class="container">
            <select class="py-1 my-3" name="select" @change="$emit('searchArchetype')" v-model="store.archetypeFilter" >
                <option value="all">filtra ricerca</option> 
                <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList">
                {{ archetype.archetype_name }}</option>
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