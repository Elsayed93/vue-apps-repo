<template>
  <div class="content">
    <h1>{{ page }} PAge , Welcome ...</h1>
  </div>
  <button class="btn btn-primary" @click="$emit('action-clicked')">{{ page }} Restaurant</button>
</template>

<script>
export default {
  name: "Content",

  props: ["page"],

  // methods: {
  //   test() {
  //     this.$emit("action-clicked");
  //   },
  // },
};
</script>

<style>
</style>