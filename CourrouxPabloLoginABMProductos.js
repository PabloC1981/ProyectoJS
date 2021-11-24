let  UsuariosAutorizados =  [{name:"pablo" , surname:"perez", password:"qwerty"},
                            {name:"belen" , surname:"sanchez", password:"qwerty"}]


class AltaUsuarios {
    constructor(name,surname,password,){
    this.name=name
    this.surname=surname
    this.password=password
    }   
}                            
alert("Usted a Ingresado a un Sector Restringido \nTendra 3 intentos para ingresar correctamente\nDe ser invalidos su Usuario se bloqueará")   
    //Estado Inicial: No autorizado y 3 Intentos
const btnlogin = document.getElementById('login')
btnlogin.onclick = (e) =>{
    e.preventDefault();
    Login()   
} 
let chances = 3
let findUser = false
function Login(){
    
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let password = document.getElementById('password').value;
    
    let findUser = UsuariosAutorizados.find(user => user.name == name && user.surname == surname && user.password == password)

    if(!findUser && chances > 0){
            chances--
            alert(`Alguno de los datos es erroneo. Te quedan ${chances} intentos.` )
            document.getElementById("formLogin").reset();
            }else if (chances <= 0){
                alert("Usuario Bloqueado");
            }else{            
        authorized = true
        alert("Bienvenido:" + findUser.name.toLocaleUpperCase())
        localStorage.setItem("Users Login", JSON.stringify(findUser.name))
        window.location.href="indexABMProductos.html"    
    }
}

    