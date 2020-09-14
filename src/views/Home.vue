<template>
  <div class="home">
    <span>呵呵</span>
    <div class="form-group-title">
      卖家承诺书<span class="form-group-sub-title">对承诺书内容的意见请联系平台工作人员</span>
    </div>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    {{ location }}
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :heheda="{b: 0}"
      :location="{
        a     : 1,
        b     : 2,
        foo   : 33,
        hahaha: 'hahaha',
        hehe  : () => {
          let hahaha = 1
        },
      }"
    />
    <div
      data-a="ab"
      data-b="c"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      location: {
        a: 1,
        b: 2,
        foo: 33,
        hahaha: 'hahaha',
        hehe: () => {
          // const hahaha = 1;
        },
      },
    };
  },
};
</script>
