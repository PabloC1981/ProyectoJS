//SIMULADOR DE VENTA DE INDUMENTARIA ESCOLAR
/*let  name= prompt('Ingrese Su Nombre').toUpperCase();
let surname = prompt('Ingrese Su Apellido ').toUpperCase();
let cellphone = prompt('Ingrese Su Numero Celular');
let password = prompt('Ingrese Su Contaseña \n Debe Tenes Entre 5 y 8 Caracteres');
let password1= prompt('Reitere la Contraseña');*/
let RegistroDeClientes = [];
//CLASE CLIENTES PARA GENERAR USUARIOS
class Clientes {
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }  
}

let check = $('#cargar');
let btnEnviar = $('.btn');

btnEnviar.click(function(){
    let name = $('#Name');
    let email = $('#Email');
    let password = $('Password')
    if($(inputName).val().length == "" && $(inputEmail).val().length == "" && $(inputPassword).val().length == ""){
        alert("Usuario Creado")
        alert("BIENVENIDOS A LAVORO \n Indumentaria Escolar")
        RegistroDeClientes.push({name,email,password})
        console.log(RegistroDeClientes)
        }else{
            alert("Alguno de los datos es erroneo")
        }
    });
console.log(RegistroDeClientes)