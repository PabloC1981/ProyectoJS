//SIMULADOR DE VENTA DE INDUMENTARIA ESCOLAR
/*let  name= prompt('Ingrese Su Nombre').toUpperCase();
let surname = prompt('Ingrese Su Apellido ').toUpperCase();
let cellphone = prompt('Ingrese Su Numero Celular');
let password = prompt('Ingrese Su Contaseña \n Debe Tenes Entre 5 y 8 Caracteres');
let password1= prompt('Reitere la Contraseña');*/
let RegistroDeClientes = [];
//CLASE CLIENTES PARA GENERAR USUARIOS
class Clientes {
    constructor(name,surname,cellphone,password){
        this.name=name
        this.surname=surname
        this.cellphone=cellphone
        this.password=password
    }  
}
function RegistrarCliente(){
    let  name= prompt('Ingrese Su Nombre').toUpperCase();
    let surname = prompt('Ingrese Su Apellido ').toUpperCase();
    let cellphone = prompt('Ingrese Su Numero Celular');
    let password = prompt('Ingrese Su Contaseña \n Debe Tenes Entre 5 y 8 Caracteres');
    let password1= prompt('Reitere la Contraseña');    
    
    if(name == "" || surname == "" || isNaN(cellphone)){
        alert("Alguno de los datos es erroneo")
    }else if(password.length >=5 && password.length <=8 && password === password1){
        alert("Usuario Creado")
        alert("BIENVENIDOS A LAVORO \n Indumentaria Escolar")
        RegistroDeClientes.push({name,surname,cellphone,password })
        }else{
            alert("Usted no ha ingresado una contraseña valida")
            
        }
    }

//const cliente = new Clientes ({name:name, surname:surname, cellphone:cellphone, password:password})
console.log(RegistroDeClientes)
RegistrarCliente();