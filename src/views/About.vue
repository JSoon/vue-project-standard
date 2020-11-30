<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="single-truncate">单排文字截断</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.single-truncate {
  .truncate(4em);
}
</style>
