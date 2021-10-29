<template>
  <label :class="isRequred" :for="labelFor"><slot></slot></label>
</template>

<script>
export default {
  name: "ui-form-label",
  props: {
    labelFor: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isRequred() {
      return this.required ? "is-required" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  font-size: 0.75rem;
  color: #49485e;
  margin-bottom: 4px;

  &.is-required {
    position: relative;

    &::after {
      content: "";
      width: 4px;
      height: 4px;
      top: 0;
      right: -4px;
    //   transform: translateX(100%);
      background-color: #ff8484;
      position: absolute;
      border-radius: 100%;
    }
  }
}
</style>