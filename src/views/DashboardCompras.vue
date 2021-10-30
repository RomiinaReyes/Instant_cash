<template>
  <b-container>
    <b-row>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Suma Total en Pesos" :valor="sumaTotalPesos" />
      </b-col>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Cantidad Compra Euros" :valor="cantidadCompraEuros" />
      </b-col>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Cantidad Compra Bitcoin" :valor="cantidadComprarBitcoins"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Cantidad Compra Dolares" :valor="cantidadCompraDolares" />
      </b-col>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Menor Compra" :valor="menorCompra"/>
      </b-col>
      <b-col sm=12 lg=4>
        <CardDashBoard nombre="Mayor Compra" :valor="mayorCompra"/>

      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CardDashBoard from "@/components/CardDashBoard.vue";

export default {
  name: "DashboardCompras",
  components: {
    CardDashBoard
  },
  data() {
    return {
      sumaTotalPesos: 1200,
      cantidadCompraEuros: 1200,
      cantidadCompraDolares: 1200,
      cantidadComprarBitcoins: 1200,
      menorCompra: 200,
      mayorCompra: 2200,
    };
  },
};
</script>