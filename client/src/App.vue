<template>
  <!-- eslint-disable -->
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss"></style>
