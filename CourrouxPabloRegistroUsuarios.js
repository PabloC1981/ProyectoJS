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

/*$("#abrirRegistro").click(function(){
		if($("#formABprod").is(':hidden'))
		{
			$("#formABprod").slideDown(600);
		}
		else
            $("#formABprod").slideUp(600);
			
	});*/
const validarCampos = () => {
    let name = $('#Name').val();
    let email = $('#Email').val();
    let password = $('#Password').val();
    
    if(!name || !email || !password){
        alert("Debe llenar totos los campos.")
    }else if (password.length < 8){
        alert("La contraseña debe al menos tener 8 caracteres.");
    }else if ($("#Email").val().indexOf('@', 0) == -1 || $("#Email").val().indexOf('.', 0) == -1){
        alert('El correo electrónico introducido no es correcto. El formato es ejemplo@gmail.com');
    }else if (!$("#cargar").is(":checked")){
        alert("Debe aceptar los terminos y condiciones");
    }else{
        alert("Ususario Creado Correctamente");
        alert("BIENVENIDOS A LAVORO \n Indumentaria Escolar")
        $("#formABprod")[0].reset();
        RegistroDeClientes.push(new Clientes(name,email,password));
        $("#formABprod").slideUp(800);
        //location.href = "indexLoginABMProductos.html"
    }
}

$('.btn').click(function(e){
    e.preventDefault();
    validarCampos();
    $("#formABprod").slideDown(600);
    console.log(RegistroDeClientes)
})
