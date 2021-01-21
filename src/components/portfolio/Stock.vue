<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }}
          <small>
            (Preço: {{ stock.price | currency }} | Quantidade:
            {{ stock.quantity }})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          :error="insufficientQuantity || !Number.isInteger(quantity)"
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        ></v-text-field>
        <v-btn
          class="blue darken-3 white--text"
          :disabled="
            quantity <= 0 ||
            quantity > stock.quantity ||
            !Number.isInteger(quantity)
          "
          @click="sellStock"
          >{{ insufficientQuantity ? "Insuficiente" : "Vender" }}</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    sellStock() {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity,
      };
      // eslint-disable-next-line to ignore the next line.
      /* eslint-disable */
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>