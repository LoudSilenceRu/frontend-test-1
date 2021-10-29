<template>
  <button :class="isDisabled"><slot></slot></button>
</template>

<script>
export default {
  name: "ui-button",
  props: ["disabled"],
  computed: {
    isDisabled() {
      return this.disabled ? "disabled" : "success";
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  display: inline-block;
  background-color: #eeeeee;
  border: none;
  padding: 10px 16px 11px;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 0.75rem;
  font-weight: 600;
  color: #b4b4b4;

  &.disabled {
    pointer-events: none;
    user-select: none;
  }
  &.success {
    cursor: pointer;
    background-color: #7bae73;
    color: #fff;
  }
}
</style>