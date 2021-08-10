<template>
  <button class="custom-btn" :class="btnClass" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.custom-btn {
  border: 2px solid $accent;
  background-color: transparent;
  color: $accent!important;
  font-size: 1.8rem!important;
  font-family: $default-font!important;
  font-weight: 500!important;
  width: 23.3rem;
  height: 5.5rem;
  font-weight: 700;
  transition: 0.3s;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em $accent;
    color: $primary!important;
  }
}
</style>
