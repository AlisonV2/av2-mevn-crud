<template>
  <!-- eslint-disable -->
  <Navbar />
  <main id="content-wrapper">
    <router-view />
  </main>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#content-wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
}

@include bp-up(lg) {
  #content-wrapper {
    min-height: 70vh;
  }
}
</style>
