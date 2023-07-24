//Se crea funcion para login de los usuarios
var cuentas = [
    { nombre: "Mali", password: "ilam", saldo: 200 },
    { nombre: "Gera", password: "areg", saldo: 290 },
    { nombre: "Maui", password: "iuam", saldo: 67 }
  ];
function login(){
    const username= document.querySelector("#username").value;
    const password= document.querySelector("#password").value;
    console.log(typeof username);
    console.log( username);
    for (const cuenta of cuentas) {
        if  (cuenta.nombre===username &&
            cuenta.password===password){
                //Guardar en el localStorage el usuario que ingresa                    
                localStorage.setItem(`username`, JSON.stringify(cuenta))
                Swal.fire({
                    icon: 'success',
                    title: 'Acceso correcto',
                    text: "Bienvenid@ " + username,
                    timer: 3000
                }) .then(() => {
                        // Se envía al html del cajero después de que el usuario hizo clic en OK
                        location = "index.html";
                    });
            return
            }
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos',
        footer: 'Acceso denegado'
      })
}