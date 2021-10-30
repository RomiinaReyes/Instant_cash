<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm=12 lg=6>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Ingresa email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tu Nombre:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.nombre"
                placeholder="Ingresa Nombre"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tu Apellido Paterno:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.apPaterno"
                placeholder="Ingresa Apellido Paterno"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tu Apellido Materno:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.apMaterno"
                placeholder="Ingresa Apellido Materno"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              Región: <br />
              <b-form-select
                v-model="form.region"
                :options="regions"
                class="form-select"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tu Telefono:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.telefono"
                placeholder="Ingresa Telefono"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Tu Cantidad Pesos:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.cantidadPesos"
                placeholder="Ingresa Cantidad en Pesos"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              Tipo de Cambio <br />
              <b-form-select
                v-model="form.tipoCambio"
                :options="tipoCambios"
                class="form-select"
              ></b-form-select>
            </b-form-group>

            <b-button
              id="btnCalcular"
              type="submit"
              variant="primary"
              @click="mostrarResultado"
              >Calcular</b-button
            >
          </b-form>
        </b-col>
        <b-col sm=12 lg=6>
          <div v-if="resultado" id="divResultado">
            <h1>$120.500.-</h1>
            <button id="btnComprar" class="btn btn-primary">
              Comprar Divisas
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NuevaSimulacion",
  data() {
    return {
      resultado: false,
      form: {
        email: "",
        nombre: "",
        apPaterno: "",
        apMaterno: "",
        telefono: "",
        region: "",
        cantidadPesos: "",
        tipoCambio: "",
      },

      regions: [
        { value: "1", text: "1 Región" },
        { value: "2", text: "2 Región" },
        { value: "3", text: "3 Región" },
        { value: "4", text: "4 Región" },
        { value: "5", text: "5 Región" },
        { value: "6", text: "6 Región" },
        { value: "7", text: "7 Región" },
        { value: "8", text: "8 Región" },
        { value: "9", text: "9 Región" },
        { value: "10", text: "10 Región" },
        { value: "11", text: "11 Región" },
        { value: "12", text: "12 Región" },
        { value: "13", text: "13 Región" },
        { value: "14", text: "14 Región" },
        { value: "15", text: "15 Región" },
        { value: "16", text: "16 Región" },
      ],

      tipoCambios: [
        { value: "1", text: "Dólar" },
        { value: "2", text: "Euro" },
        { value: "3", text: "Bitcoin" },
      ],
    };
  },
  methods: {
    mostrarResultado: function () {
      this.resultado = true;
    },
  },
};
</script>
<style scoped>
form {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

#btnCalcular {
  width: 100%;
  margin-top: 15px;
}

#btnComprar {
  width: 70%;
  margin: 10px;
}

select {
  width: 100%;
}

#divResultado {
  width: 70%;
  border: 1px black solid;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>