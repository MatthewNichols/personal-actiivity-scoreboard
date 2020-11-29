<template>
  <div class="home">
    <current-day/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurrentDay from "../components/current-day.vue";

export default defineComponent({
  name: 'Home',
  components: {
    CurrentDay
  },
});
</script>
