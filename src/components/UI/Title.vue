<template>
  <h1><slot></slot></h1>
</template>

<script>
export default {
  name: "ui-title",
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}
</style>