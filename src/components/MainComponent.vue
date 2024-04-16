<template>
    <main>
        <div class="container">
            <select class="py-1 my-3" name="select" >
                <option value="first">scegli </option>
                <option value="second">2</option>
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