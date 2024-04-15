<template>
    <div class="card mia-card">
  <img :src="image" class="card-img-top" :alt="title">
  <div class="card-body card">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
       {{ type }}
    </p>
  </div>
</div>
</template>

<script>
    export default {
        name:'CardComponent',
        props:['id','title','type','image']
    }
</script>

<style lang="scss" scoped>
.mia-card{
  margin-top: 0px;
  min-height: 500px;
  .card{
  background-color: orange;
  margin-bottom: 10px;
  h5{
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
    p{
      text-align: center;
    }
  

}
}
</style>