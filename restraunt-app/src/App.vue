<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
.upper-subcontainer {
  margin: 5rem auto 0;
  /* margin-top: 5rem; */
  /* border: solid; */
  width: 50%;
  text-align: center;
}

.logo {
  width: 20%;
}

.form-container {
  margin-top: 5rem;
}

.bottom-subcontainer {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  justify-content: space-around;
  width: 40.5rem;
  text-align: center;
  /* align-items: flex-start; */
}

.bottom-subcontainer button {
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}

.form-container div {
  margin: auto;
}

.content {
  margin-bottom: 5rem;
}
</style>
