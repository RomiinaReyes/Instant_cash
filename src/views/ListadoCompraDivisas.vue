<template>
    <div>
        <h1>Listado de Compra de Divisas</h1>
        <b-table 
        striped
    bordered
    fixed
    scrollY
    :maxHeight="200" 
        :items="arregloCompraDivisas"></b-table>
    </div>
</template>
<script>
export default {
    name:"ListadoCompraDivisas",
    data(){
        return{
            arregloCompraDivisas:[
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"},
                {email:"r@gmail.com", Nombres:"roberto camilo", ApellidoP:"gonzalez", ApellidoM:"castro", Region:"5", Telefono:"5555557", CantidadPesos:"10000", TipoMoneda:"Euro", CambioPesos:"850", Resultado:"11.75"}
            ]
        }
    }
}
</script>

<style scoped>
    table{
        width:80%;
        margin-left:auto;
        margin-right:auto;
    }
    table tbody tr td {
        font-size: 7px;
}
</style>