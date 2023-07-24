let cuenta_personal = null;

//Se toman los datos del HTML
const cantidad = document.querySelector(`#cantidad`);
const consultar_saldo = document.querySelector(`#consultar_saldo`);
const ingresar_monto = document.querySelector(`#ingresar_monto`);
const retirar_monto = document.querySelector(`#retirar_monto`);
const saldo_usuario = document.querySelector(`#saldo_usuario`);

//Esta funcion se ejecuta cuando se cargo todo el DOM gracias al DOMContentLoaded
addEventListener("DOMContentLoaded", function () {
    //hidratar el estado
    const username = this.localStorage.getItem("username");
    const cuentaParse = JSON.parse(username);
    cuenta_personal = cuentaParse;

})
//Se definen los eventos
consultar_saldo.addEventListener(`click`, function (e) {
    //saber cuanto dinero tiene en la cuenta
    const cuenta_saldo = cuenta_personal.saldo;
    // Enviar el resultado al html
    saldo_usuario.innerText = cuenta_saldo;
    cantidad.value="";
})
ingresar_monto.addEventListener(`click`, function (e) {
    //Se toma la cantidad ingresada por el usuario
    const deposito = cantidad.value;
    // se convierte ese valor en numero
    const number_deposito = +deposito;
    //validar que solo se ingresen numero positivos
    if (number_deposito < 0) {
        Swal.fire('Valor ingresado invalido')
        return
    }
    //validar que se ingrese un valor
    if (number_deposito === 0) {
        Swal.fire('Ingrese un valor')
        return
    }
    //saber cuanto dinero tiene en la cuenta
    const cuenta_saldo = cuenta_personal.saldo;
    //validar que la cuenta no supere los $990
    if (cuenta_saldo + number_deposito > 990) {
        Swal.fire('Su cuenta no puede tener mas de $990')
        return
    }
    //sumar con el deposito
    const nuevo_saldo = cuenta_saldo + number_deposito;
    // Enviar el resultado al html
    saldo_usuario.innerText = nuevo_saldo;
    //actualizar saldo de cada cuenta  
    cuenta_personal.saldo = nuevo_saldo;
    localStorage.setItem(`saldo`, nuevo_saldo)
    cantidad.value="";
})
retirar_monto.addEventListener(`click`, function (e) {
    //Se toma la cantidad ingresada por el usuario
    const deposito = cantidad.value;
    // se convierte ese valor en numero
    const number_deposito = +deposito;
    //validar que solo se ingresen numero positivos
    if (number_deposito < 0) {
        Swal.fire('Valor ingresado invalido')
        return
    }
    //validar que se ingrese un valor
    if (number_deposito === 0) {
        Swal.fire('Ingrese un valor')
        return
    }
    //saber cuanto dinero tiene en la cuenta
    const cuenta_saldo = cuenta_personal.saldo;
    //validar que la cuenta no este por debajo de los $10
    if (cuenta_saldo - number_deposito < 10) {
        Swal.fire('Su cuenta no puede tener menos de $10')
        return
    }
    //restar con el deposito
    const nuevo_saldo = cuenta_saldo - number_deposito;
    // Enviar el resultado al html
    saldo_usuario.innerText = nuevo_saldo;
    //actualizar saldo de cada cuenta  
    cuenta_personal.saldo = nuevo_saldo;
    localStorage.setItem(`saldo`, nuevo_saldo)
    cantidad.value="";
})
salir.addEventListener("click", function (e) {
    Swal.fire({
        title: '¿Seguro?',
        text: "Si aceptas se cerrara la cuenta",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cerrar.'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Cuenta cerrada',
                '¡Vuelve Pronto!'
            )
            localStorage.clear();
            location = "login.html";
        }
    })

})