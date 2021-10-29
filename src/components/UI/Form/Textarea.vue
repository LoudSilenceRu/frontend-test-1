<template>
  <div>
    <textarea
      :class="calcStatus"
      :id="id"
      :name="name"
      rows="6"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      ref="textarea"
    ></textarea>
    <span v-if="status === false">Поле является обязательным</span>
  </div>
</template>

<script>
export default {
  name: "ui-form-textarea",
  props: {
    name: String,
    id: String,
    value: String,
    placeholder: String,
    status: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    calcStatus() {
      if (this.status === true) {
        return "is-valid";
      } else if (this.status === false) {
        return "is-invalid";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  display: block;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: 0.1);
  border: 1px solid transparent;
  padding: 10px 16px 11px;
  outline: none;
  color: #3f3f3f;
  border-radius: 4px;
  resize: none;

  //   &.is-valid {
  //     border: 1px solid green;
  //   }
  &.is-invalid {
    border: 1px solid #ff8484;
  }

  &::placeholder {
    color: #b4b4b4;
    font-size: 0.75rem;
  }
}
span {
  font-size: 0.5rem;
  color: #ff8484;
}
</style>