<template>
    <main>
        <div class="container">
            <select class="py-1 my-3" name="select" id="selectid">
                <option value="first">scegli </option>
            </select>
           <CardList />
        </div>
    </main>
</template>

<script>
    import CardList from './CardList.vue';
    export default {
        name:'MainComponent'
    }
</script>

<style lang="scss" scoped>
main{
    background-color: orange;
}

</style>