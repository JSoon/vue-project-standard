<template>
  <div class="home">
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
