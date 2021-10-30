<template>
  <div>
      <h1>Login</h1>
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Usuario:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.usuario"
          type="text"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Ingresar</b-button>
     
    </b-form>
  
  </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            form:{
                usuario:"",
                passwrod:""
            }

        }
    }

}
</script>
<style scoped>
form{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

button{
    margin-top: 15px;
    width:100%;
}
</style>