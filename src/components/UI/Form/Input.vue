<template>
  <div>
    <input
      :setMask="setMask"
      :class="calcStatus"
      :type="type"
      :id="id"
      :value="value"
      :name="name"
      trim
      @input="$emit('input', createMask($event.target.value))"
      :placeholder="placeholder"
      @blur="$emit('qweqweqwe')"
      ref="input"
      autocomplete="off"
    />
    <span v-if="status === false">Поле является обязательным</span>
  </div>
</template>

<script>
export default {
  name: "ui-form-input",
  props: {
    setMask: {
      default: false,
      type: Boolean,
    },
    name: String,
    id: String,
    type: {
      type: String,
      default: "text",
    },
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
  methods: {
    createMask(string) {
      if (this.setMask)
        return string.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      else return string;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: block;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: 0.1);
  border: 1px solid transparent;
  padding: 10px 16px 11px;
  outline: none;
  color: #3f3f3f;
  border-radius: 4px;

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