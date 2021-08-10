<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <router-link :to="'/'" class="navbar-brand">
        <BrandDesktop />
        <BrandMobile />
      </router-link>
      <div class="spacer"></div>
      <div role="button" class="navbar-toggle">
        <AppButton @click="$router.push('')">Create New </AppButton>
      </div>
    </div>
  </nav>
</template>

<script>
import BrandDesktop from '@/components/navbar/brand/BrandDesktop';
import BrandMobile from '@/components/navbar/brand/BrandMobile';

export default {
  name: "Navbar",
  components: {
      BrandDesktop,
      BrandMobile
  }
};
</script>

<style lang="scss">
.navbar-container {
  padding-top: 3rem;
}

.brand-desktop,
.brand-mobile {
  height: 50px;
  width: auto;
}

.brand-desktop {
  display: none;
}

@media screen and (min-width: 768px) {
  .brand-desktop {
    display: inline-block;
  }
  .brand-mobile {
    display: none;
  }
}
</style>
