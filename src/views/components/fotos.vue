<template>
  <div class="box-fotos">
    <img
      :src="`https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2${item}`"
      alt
      class="box-foto"
      v-for="(item, index) in items"
      :key="index"
    >
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style lang="scss" scoped>
.box-fotos {
  width: 450px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 10px;
  .box-foto {
    height: 200px;
    margin: 5px;
  }
}
</style>
