//Objetos (clase constructora)
class Perfil {
    constructor(literal) {
        this.id = persona.length;
        this.nombre = literal.nombre;
        this.telefono = literal.telefono;
        this.dni = literal.dni;
        this.email = literal.email;
        this.edad = literal.edad;
        this.sexo = literal.sexo;
        this.edoCivil = literal.edoCivil;
        this.ciudadDeResidencia = literal.ciudadDeResidencia;
    }
    RiesgoEdad() {
        if (
        (this.edad >= 18 && this.edad < 26) ||
        (this.edad >= 61 && this.edad < 81)
        ) {
        return "Riesgo alto";
        } else if (this.edad >= 26 && this.edad < 51) {
        return "Riesgo bajo";
        } else if (this.edad >= 51 && this.edad < 61) {
        return "Riesgo medio";
        } else if (this.edad > 80) {
        return "No podemos asegurarlo";
        }
    }
    RiesgoCiudad() {
        if (this.ciudadDeResidencia == "FRONTERA") {
        return "Riesgo alto";
        } else if (this.ciudadDeResidencia == "INTERIOR") {
        return "Riesgo bajo";
        } else if (this.ciudadDeResidencia == "CAPITAL") {
        return "Riesgo medio";
        } else {
        return "Ingresó un dato incorrecto";
        }
    }
    RiesgoGenero() {
        if (this.sexo == "MASCULINO" || this.sexo == "OTRO") {
        return "Riesgo alto";
        } else if (this.sexo == "FEMENINO") {
        return "Riesgo medio";
        } else {
        return "Ingresó un dato incorrecto";
        }
    }
    }
class Auto {
    constructor(literal) {
        this.id = carro.length;
        this.marca = literal.marca;
        this.modelo = literal.modelo;
        this.ano = literal.ano;
        this.uso = literal.uso;
        this.placa = literal.placa;
        this.valorDeMercado = literal.valorDeMercado;
        this.gps = literal.gps;
        this.alarma = literal.alarma;
    }
    RiesgoUso() {
        if (this.uso == "PARTICULAR") {
        return "Riesgo medio";
        } else if (this.uso == "TRABAJO") {
        return "Riesgo alto";
        } else {
        return "Ingresó un dato incorrecto";
        }
    }
    }

//Definición de Variables
cliente = [];
persona = [];
carro = [];
cart = [];

//Funciones
function transformRiesgo(riesgo) {
    switch (riesgo) {
        case "Riesgo alto":
            return 3;
        case "Riesgo medio":
            return 2;
        case "Riesgo bajo":
            return 1;
        default:
            return 0;
        }
    }
function PromedioRiesgo(edad, ciudad, genero, uso) {
    return Math.round((edad + ciudad + genero + uso) / 4);
    }
function remov(a) {
    //Borrar con jQuery
    $(a).remove();
    }
function simular (){
        remov(".flex-form")
        $("#principal").append(`<form class="flex-form">
                <h1>Perfil del usuário</h1>
                <div>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" required id="nombre">
                </div>
                <div>
                    <label for="telefono">Número de telefono:</label>
                    <input type="tel" required id="telefono">
                </div>
                <div>
                    <label for="dni">DNI:</label>
                    <input type="number" id="dni" required>
                </div>
                <div>
                    <label for="">Email:</label>
                    <input type="email" id="email" required>
                </div>
                <div>
                    <label for="">Edad:</label>
                    <input type="number" id="edad" required>
                </div>
                <div>
                    <label for="">Género</label>
                    <select name="sexo" id="sexo" required>
                        <option value="Default">Seleccionar</option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMENINO">Femenino</option>
                        <option value="OTRO">Otro</option>
                    </select>
                </div>
                <div>
                    <label for="">Estado Civil</label>
                    <select name="edoCivil" id="edoCivil" required> 
                        <option value="Default">Seleccionar</option>
                        <option value="SOLTERO">Soltero</option>
                        <option value="CASADO">Casado</option>
                        <option value="DIVORCIADO">Divorciado</option>
                    </select>
                </div>
                <div>
                    <label for="">Ubicación</label>
                    <select name="Ubicación" id="ubicacion" required>
                        <option value="Default">Seleccionar</option>
                        <option value="INTERIOR">Interior</option>
                        <option value="CAPITAL">Capital</option>
                        <option value="FRONTERA">Frontera</option>
                    </select>
                </div>
                <input type="submit" id="buttonPersona" value="Siguiente">
            </form>`)
        $(".flex-form").submit(formPerson);
    }
function formPerson(e) {
    e.preventDefault();
    //Crea el objeto persona
    let inputs = e.target.children;
    personaObj = new Perfil({
        nombre: inputs[1].children[1].value,
        telefono: inputs[2].children[1].value,
        dni: inputs[3].children[1].value,
        email: inputs[4].children[1].value,
        edad: inputs[5].children[1].value,
        sexo: inputs[6].children[1].value,
        edoCivil: inputs[7].children[1].value,
        ciudadDeResidencia: inputs[8].children[1].value,
    });
    cliente.push(personaObj);
    persona.push(personaObj);
    console.log(cliente);

    riesgo1 = personaObj.RiesgoEdad();
    console.log(riesgo1);
    riesgo1 = transformRiesgo(riesgo1);
    console.log(riesgo1);
    riesgo2 = personaObj.RiesgoCiudad();
    console.log(riesgo2);
    riesgo2 = transformRiesgo(riesgo2);
    console.log(riesgo2);
    riesgo3 = personaObj.RiesgoGenero();
    console.log(riesgo3);
    riesgo3 = transformRiesgo(riesgo3);
    console.log(riesgo3);
    //Borra
    remov(".flex-form");
    //Crea el html con jQuery, form para el evento
    $("#principal").append(`<form class="flex-form">
                                <h2>Perfil del carro</h2>
                                <div>
                                    <label for="">Marca del Vehículo:</label>
                                    <input type="text" id="marca" required>
                                </div>
                                
                                <div>
                                    <label for="">Modelo:</label>
                                    <input type="text" id="modelo" required>
                                </div>
                                
                                <div>
                                    <label for="">Año:</label>
                                    <input type="number" id="ano" required>   
                                </div>
                                
                                <div>
                                    <label for="">Tipo de uso</label>
                                    <select name="uso" id="tipo" required>
                                        <option value="Default">Seleccionar</option>
                                        <option value="PARTICULAR">Particular</option>
                                        <option value="TRABAJO">Trabajo</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="">Placa:</label>
                                    <input type="text" id="placa" required>
                                </div>
                                
                                <div>
                                    <label for="">Valor de Mercado:</label>
                                    <input type="number" id="valor" required>
                                </div>
                                
                                <div>
                                    <label for="">Su vehículo posee GPS o algún sistema de ratreo?</label>
                                    <select name="gps" id="gps" required>
                                        <option value="Default">Seleccionar</option>
                                        <option value="Y">Si</option>
                                        <option value="N">No</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="">Su vehículo posee alarma?</label>
                                    <select name="alarma" id="alarma" required>
                                        <option value="Default">Seleccionar</option>
                                        <option value="Y">Si</option>
                                        <option value="N">No</option>
                                    </select>
                                </div>
                                <input type="submit" id="buttonPersona" value="Siguiente">
                                </form>`);
    //Evento que escucha con jQuery
    $(".flex-form").submit(formCar);
    }
function formCar(e) {
    e.preventDefault();
    //Crea el objeto carro
    let inputs = e.target.children;
    carroObj = new Auto({
        marca: inputs[1].children[1].value,
        modelo: inputs[2].children[1].value,
        ano: inputs[3].children[1].value,
        uso: inputs[4].children[1].value,
        placa: inputs[5].children[1].value,
        valorDeMercado: inputs[6].children[1].value,
        gps: inputs[7].children[1].value,
        alarma: inputs[8].children[1].value,
    });
    cliente.push(carroObj);
    carro.push(carroObj);
    console.log(cliente);

    riesgo4 = carroObj.RiesgoUso();
    console.log(riesgo4);
    riesgo4 = transformRiesgo(riesgo4);
    console.log(riesgo4);

    riesgoTotal = PromedioRiesgo(riesgo1, riesgo2, riesgo3, riesgo4);
    console.log(riesgoTotal);

    switch (riesgoTotal) {
        case 3:
        riesgoTotal = (carroObj.valorDeMercado * 10) / 100;
        break;
        case 2:
        riesgoTotal = (carroObj.valorDeMercado * 7) / 100;
        break;
        case 1:
        riesgoTotal = (carroObj.valorDeMercado * 5) / 100;
        break;
        default:
        riesgoTotal = 0;
        break;
    }
    console.log(riesgoTotal);
    //Borra
    remov(".flex-form");
    //Crea html con jQuery, form para el evento
    $("#principal").append(`<form class="flex-form">
                                <h2>Tipo de cobertura</h2>
                                <label for="">Indique cual cobertura desea:</label>
                                <select name="cobertura" id="cobertura" required>
                                    <option value="Default">Seleccionar</option>
                                    <option value="PARCIAL">Parcial (Incluye solo choques)</option>
                                    <option value="COMPLETA">Completa (Incluye choques, robos e incendios)</option>
                                </select>
                                <input type="submit" id="buttonPersona" value="Siguiente">
                                </form>`);
    //Evento que escucha con jQuery
    $(".flex-form").submit(formSeg);
    }
function formSeg(e) {
    e.preventDefault();
    cobertura = document.getElementById("cobertura").value;
    cliente.push(cobertura);
    console.log(cliente);

    let coberturaTotal = 0;
    switch (cobertura) {
        case "PARCIAL":
        if (carroObj.gps == "Y" && carroObj.alarma == "Y") {
            coberturaTotal = (carroObj.valorDeMercado * 4) / 100;
        } else if (carroObj.gps == "Y" && carroObj.alarma == "N") {
            coberturaTotal = (carroObj.valorDeMercado * 5) / 100;
        } else if (carroObj.gps == "N" && carroObj.alarma == "Y") {
            coberturaTotal = (carroObj.valorDeMercado * 6) / 100;
        } else if (carroObj.gps == "N" && carroObj.alarma == "N") {
            coberturaTotal = (carroObj.valorDeMercado * 7) / 100;
        }
        break;
        case "COMPLETA":
        if (carroObj.gps == "Y" && carroObj.alarma == "Y") {
            coberturaTotal = (carroObj.valorDeMercado * 7) / 100;
        } else if (carroObj.gps == "Y" && carroObj.alarma == "N") {
            coberturaTotal = (carroObj.valorDeMercado * 8) / 100;
        } else if (carroObj.gps == "N" && carroObj.alarma == "Y") {
            coberturaTotal = (carroObj.valorDeMercado * 9) / 100;
        } else if (carroObj.gps == "N" && carroObj.alarma == "N") {
            coberturaTotal = (carroObj.valorDeMercado * 10) / 100;
        }
        break;
        default:
        coberturaTotal = 0;
        break;
    }
    console.log(coberturaTotal);
    //Calcula el valor del seguro
    valorSeguro = coberturaTotal + riesgoTotal;
    seguroPorMes = valorSeguro / 12;
    cliente.push(valorSeguro);
    //Borra
    remov(".flex-form");
    //Crea html con jQuery
    $("#principal").append(`<div id="msjCarga">
                                    <h2>Ya analizamos su perfil, por favor clique siguiente para ver la cotización</h2>
                                    <button id="buttonCotizar">Siguiente</button>
                                    </div>`);
    //Evento que escucha con jQuery
    $("#buttonCotizar").on("click", cotar);
    }
function cotar() {
    //Borra
    remov("#msjCarga");
    //Crea el html con jQuery
    $("#principal").append(`<div id="msjCarga">
                                <h2>Cotización</h2>
                                <p>Nombre del cliente: ${personaObj.nombre}</p> 
                                <p>Telefono: ${personaObj.telefono}</p> 
                                <p>Email: ${personaObj.email}</p>
                                <p>Edad: ${personaObj.edad}</p>
                                <p>Vehículo: ${carroObj.marca} ${carroObj.modelo} ${
        carroObj.ano
    }</p> 
                                <p>Uso: ${carroObj.uso}</p>
                                <p>Tipo de cobertura: ${cobertura}</p>
                                <p>Valor del seguro: ${seguroPorMes.toFixed(
                                2
                                )} USD por mes</p> 

                                <button id="btnCarrito">Agregar e ir al carrito</button>
                                <button id="btnNuevo">volver a cotizar</button>
                                </div>`);
    //Evento que escucha para agregar al carrito (jQuery)
    $("#btnCarrito").on("click", addToCart);
    //Evento que escucha para agregar al carrito (jQuery)
    $("#btnNuevo").on("click", function (){
            nuevaCotización = confirm("Desea realizar una nueva cotización?")
            if (nuevaCotización) {
                if (cart.length == 0){  
                    newCotizacion()
                }
                else {
                    avisoCarrito = confirm("Tiene itens en el carrito, desea borrarlos?")
                    if (avisoCarrito){
                        borrarTodo()
                        borrarCarrito()
                        newCotizacion()
                        remov("#vlrCart")
                    } else{
                        newCotizacion()
                    }
                }
            } 
        });
    }
function addToCart() {
    if (cart.length == 0){
        //Borra
        remov(".divCart");
        //Agrega al carrito
        cart.push(cliente);
        //Guarda en localStore
        localStorage.setItem("cart", JSON.stringify(cart));
        //Muestra la cotización en pantalla
        showProducts();
    } else{
        //Borra
        remov(".divCart");
        //Busco el array del carrito
        cartStorage0 = JSON.parse(localStorage.getItem("cart"));

        //Verificar se ya existe y preguntar

        //Agrega al carrigo
        cartStorage0.push(cliente);
        //Guardo nuevamente
        localStorage.setItem("cart", JSON.stringify(cartStorage0));
        //Muestra
        showProducts();
    }
    
    }
function newCotizacion() {
        //Borrar
        remov("#msjCarga");
        cliente = []
        //comenzar de nuevo
        simular()
    }
function borrarTodo (){
        localStorage.clear();
        cart = [];
        arrayCrt = [];
    }
function borrarCarrito (){
        //Borrar carrito
        remov(".divCart")
        //Crear nuevamente el vacio
        $("#divCarrito").append(`<div class="flex-column divCart">
                                    <h2>Carrito</h2>
                                    <h3>Su carrito está vacío</h3>
                                </div>`);
        $("#btnFinish").hide();
    }
function showProducts() {
    cartStorage = JSON.parse(localStorage.getItem("cart"));
    console.log(cartStorage);
    //Crea html con jQuery
    for (const obj of cartStorage) {
        $("#divCarrito").append(`<div class="divCart">
                                    <h2>Item Nro ${(cartStorage.indexOf(obj)+1)}</h2>
                                    <p>Seguro Araucária de cobertura ${obj[2]} para un vehículo ${obj[1].marca} ${obj[1].modelo} ${obj[1].ano}</p>
                                    <p>Seguro a nombre de : ${obj[0].nombre}</p> 
                                    <p>Valor total: ${obj[3]} USD dividido en 12 cuotas</p> 
                                    <button class="btnErase">Eliminar</button>
                                    </div>`);
    }
    
    sumarTotal()
    
    $("#btnFinish").show()

    $("#btnFinish").on("click", () => {
        alert("Gracias por su compra");
        borrarCarrito();
        borrarTodo();
        remov("#vlrCart");
        newCotizacion();
    });

    $(".btnErase").on("click", borrarItem) 

    }
function borrarItem (e){
    //identificar el elemento en el array cartStorage
    const { id } = e.target;
    cartStorage.forEach((item, indice) => {
        if(cartStorage.indexOf(item) == id){
            indiceItem = indice;
        }
    });
    //eliminar el elemento en el array cartStorage
    cartStorage.splice(indiceItem, 1);
    //actualizar el html y el localStorage
    remov(".divCart:eq("+ indiceItem +")")
    localStorage.setItem("cart", JSON.stringify(cartStorage));
    sumarTotal()
}
function sumarTotal(){
    remov("#vlrCart")
    arrayCrt = [];
    for (const obj of cartStorage) {
        arrayCrt.push(obj[3])
    }
    totalCarrito = arrayCrt.reduce((total, item) => item + total, 0)
    $("#finalizarCompra").prepend(`<p id="vlrCart">Valor total del carrito: ${totalCarrito} USD dividido en 12 cuotas</p>`
    );
    
}

//Procesamiento del código (main code)
//Ready
$(() => {
    //Efecto jQuery
    $("#divCarrito").hide();
    //Efecto jQuery
    $("#btnFinish").hide();
    //Efecto jQuery
    $("#carrito").click (function () {
        $("#divCarrito").slideToggle();
    })
    //Crear
    $(".title-btn").click(simular)

    //Evento con jQuery
    console.log("Estamos ready")

    //API WEATHER
    //LINK: https://www.weatherapi.com/
    $("#apiToggle").hide();
    $("#apiClima").click( ()=>$("#apiToggle").slideToggle() )
    $("#btnClima").click(function (e) {
        e.preventDefault();
        let inputClima = document.getElementById("clima").value;
        let url = "http://api.weatherapi.com/v1/current.json?key=1023318526f9487f8a2224249222202&q=" + inputClima + "&aqi=no&lang=es";
        //AJAX
        $.ajax({
            type: "GET",
            url: url,
            data: "data",
            success: function (response) {
                $("#tiempo")
                    .fadeIn(1000)
                    .append(`<div class="resultadoApi">
                                            <h3>Resultado:</h3>
                                            <p>Ciudad: ${response.location.name}</p>
                                            <p>País: ${response.location.country}</p>
                                            <p>Fecha y hora local: ${response.location.localtime}</p>
                                            <p>Temperatura: ${response.current.temp_c}°C</p>
                                            <p>Clima: ${response.current.condition.text}</p>
                                            </div>`)
            }
        });
        //Animacion
        $("#tiempo")
            .animate({opacity: "0.75"}, "slow")
            .animate({opacity: "0.5"}, "slow")
            .animate({opacity: "0.75"}, "slow")
            .animate({opacity: "1"}, "slow")
    })

    $("#btnClima2").click( ()=> {
        $(".resultadoApi").remove()
    })
})

