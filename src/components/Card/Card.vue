<template>
  <div class="card" :id="'card-' + value.id.value" ref="card">
    <span @click="removeCard()" class="card__delete">
      <img src="@/assets/icons/icon-delete.svg" alt="" />
    </span>
    <div class="card-head">
      <img
        :src="value.image.value"
        class="card__image"
        :alt="value.title.value"
      />
    </div>
    <div class="card-body">
      <h3 class="card__title">{{ value.title.value }}</h3>
      <p v-if="value.description.value" class="card__description">
        {{ value.description.value }}
      </p>
      <span class="card__price">{{ value.price.value }} руб.</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["value"],
  methods: {
    ...mapActions({
      deleteProduct: "product/deleteProduct",
    }),
    removeCard() {
      this.$refs.card.classList.add("card--remove");
      setTimeout(() => {
        this.deleteProduct(this.value.id.value);
      }, 600);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.card.classList.add("card--add");
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
.card {
  transform: scale(0);
  transition: 0.3s ease-out 0.3s;

  $this: &;

  position: relative;
  box-shadow: 0 20px 30px 0 rgba($color: #000000, $alpha: 0.04),
    0 6px 10px 0 rgba($color: #000000, $alpha: 0.02);
  background-color: #fffefb;

  &-head {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    height: 200px;
    overflow: hidden;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    transition: 0.3s ease-out;
  }
  &-body {
    padding: 1rem;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  &__description {
    margin-bottom: 1rem;
  }
  &__price {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  &__delete {
    z-index: 10;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: #ff8484;
    border-radius: 10px;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: scale(0);
    transition: 0.3s ease-out 1s;
  }
  &:hover {
    #{$this}__delete {
      transform: scale(1);
      transition: 0.3s ease-out 0s;
    }
    #{$this}__image {
      transform: scale(1.05);
    }
  }
  &--add {
    transform: scale(1);
  }
  &--remove {
    opacity: 0;
    transform: translateY(-50%);
  }
}
</style>