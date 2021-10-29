<template>
  <form @submit.prevent="submit" @input="checkBtn">
    <ui-form-group>
      <ui-form-label label-for="form-title" :required="form.title.required"
        >Наименование товара</ui-form-label
      >
      <ui-form-input
        :status="form.title.status"
        id="form-title"
        v-model="form.title.value"
        placeholder="Введите наименование товара"
      ></ui-form-input>
    </ui-form-group>

    <ui-form-group>
      <ui-form-label
        label-for="form-description"
        :required="form.description.required"
        >Описание товара</ui-form-label
      >
      <ui-form-textarea
        :status="form.description.status"
        id="form-description"
        v-model="form.description.value"
        placeholder="Введите описание товара"
      ></ui-form-textarea>
    </ui-form-group>

    <ui-form-group>
      <ui-form-label label-for="form-image" :required="form.image.required"
        >Ссылка на изображение товара</ui-form-label
      >
      <ui-form-input
        :status="form.image.status"
        id="form-image"
        v-model="form.image.value"
        placeholder="Введите ссылку"
      ></ui-form-input>
    </ui-form-group>

    <ui-form-group>
      <ui-form-label label-for="form-price" :required="form.price.required"
        >Цена товара</ui-form-label
      >
      <ui-form-input
        :status="form.price.status"
        id="form-price"
        v-model="form.price.value"
        placeholder="Введите цену"
      ></ui-form-input>
    </ui-form-group>

    <ui-form-group>
      <ui-button type="submit" :disabled="btn">Добавить товар</ui-button>
    </ui-form-group>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    btn: true,
    form: {
      id: {
        value: null,
      },
      title: {
        value: null,
        status: null,
        required: true,
      },
      description: {
        value: null,
        status: null,
        required: false,
      },
      image: {
        value: null,
        status: null,
        required: true,
      },
      price: {
        value: null,
        status: null,
        required: true,
      },
    },
  }),
  mounted() {
    // this.fillForm();
  },
  methods: {
    ...mapActions({
      addProduct: "product/addProduct",
    }),
    submit() {
      if (!this.validate()) return false;

      this.form.id.value = Date.now();
      this.addProduct(this.form).then(() => {
        this.clearForm();
      });
    },
    clearForm() {
      for (let field in this.form) {
        this.form[field].value = null;
      }
      this.btn = true;
    },
    fillForm() {
      let data = [
        {
          id: { value: 1 },
          title: { value: "Какой-нибудь заголовок" },
          description: { value: "Ну очень длинное описание (нет)" },
          image: {
            value:
              "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
          },
          price: { value: "10 000" },
        },
        {
          id: { value: 2 },
          title: { value: "Какой-нибудь заголовок" },
          description: { value: "Ну очень длинное описание (нет)" },
          image: {
            value:
              "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
          },
          price: { value: "10 000" },
        },
        {
          id: { value: 3 },
          title: { value: "Какой-нибудь заголовок" },
          description: { value: "Ну очень длинное описание (нет)" },
          image: {
            value:
              "https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80",
          },
          price: { value: "10 000" },
        },
        {
          id: { value: 4 },
          title: { value: "Какой-нибудь заголовок" },
          description: { value: "Ну очень длинное описание (нет)" },
          image: {
            value:
              "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          },
          price: { value: "10 000" },
        },
      ];

      data.forEach((item) => {
        this.addProduct(item);
      });
    },
    validate() {
      for (let field in this.form) {
        if (field == "image") {
          var expression =
            /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
          var regex = new RegExp(expression);
          var t = this.form[field].value;

          if (!t.match(regex)) {
            this.form[field].status = false;
            return false;
          }
        }
        if (this.form[field].required) {
          if (!this.form[field].value?.length) {
            this.form[field].status = false;
            this.btn = true;
            return false;
          } else {
            this.form[field].status = true;
            this.btn = false;
          }
        }
      }
      return true;
    },
    checkBtn() {
      for (let field in this.form) {
        if (this.form[field].required) {
          if (!this.form[field].value?.length) {
            this.btn = true;
            return false;
          } else {
            this.form[field].status = true;
            this.btn = false;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>