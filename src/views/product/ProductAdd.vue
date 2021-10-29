<template>
  <div class="container">
    <ui-title>Добавление товара</ui-title>
    <div class="content">
      <div class="col-left">
        <card-add-form></card-add-form>
      </div>
      <div class="col-right">
        <card
          v-for="product in products"
          :key="product.id.value"
          :value="product"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card/Card";
import CardAddForm from "@/components/Card/CardAddForm";

export default {
  components: {
    Card,
    CardAddForm,
  },
  computed: {
    ...mapGetters({
      products: "product/getProducts",
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
}
.content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.col {
  &-left {
  }
  &-right {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>