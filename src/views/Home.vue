<template>
  <b-container>
    <b-row>
      <b-col sm=12 lg=4>
    <Card :nombre="nombre" :valor="700"/>
      </b-col>
      <b-col sm=12 lg=4>
        <Card :nombre="nombre" :valor="850"/>
      </b-col>
      <b-col sm=12 lg=4>
        <Card :nombre="nombre" :valor="25000000"/>
      </b-col>
      
    </b-row>
  </b-container>
</template>

<script>
import Card from "@/components/Card.vue"
export default {
  name: "Home",
  data(){
    return{
      nombre:"Indicador Económico"
    }
  },
  components:{
    Card
  },
  methods: {
    getIndicadores: async function () {
      console.log("Estoy en el metodo");
      fetch("https://mindicador.cl/api")
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getIndicadores();
  },
};
</script>
