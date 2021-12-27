let RegistroDeProductos =  [{id:"1" , name:"Chomba Jesus Maria", price:"1999", stock:"10" },
                            {id:"2" , name:"Pantalo Jesus Maria", price:"1999", stock:"10" },
                            {id:"3" , name:"Pollera Jesus Maria", price:"1599", stock:"10" }];

class Productos {
    constructor(id,name,price,stock){
        this.id=id
        this.name=name
        this.price=price
        this.stock=stock
    }  
}
const btnProd = document.getElementById('subir')
btnProd.onclick = (e) =>{
    e.preventDefault();
    AgregarProducto()
};


function AgregarProducto(){

    let selectABM = document.getElementById("tipoSelect").value;

    if(selectABM === "agregar"){
        let id = document.getElementById('id').value;
        let name = document.getElementById('nombre').value;
        let price = document.getElementById('precio').value;
        let stock = document.getElementById('stock').value;
        let nuevoProducto = new Productos (id,name,price,stock)
        RegistroDeProductos.push(nuevoProducto)
        document.getElementById("formABprod").reset();
        const producto =  JSON.stringify(RegistroDeProductos)
        console.log(producto)
        localStorage.setItem('Productos', JSON.stringify(RegistroDeProductos)); //guardo mis Productos en el storage
    }else if(selectABM === "eliminar"){
        let id = document.getElementById('id').value;
        let indexProducto = RegistroDeProductos.findIndex(producto => producto.id === id)
        let producto = RegistroDeProductos.splice(indexProducto, 1)
        console.log(producto)
        console.log(RegistroDeProductos)
    } 
}

$('#ver').on('click',(e)=>{
    e.preventDefault();
let divProductos= document.getElementById("divProductos")

fetch('productos.json')
    .then(response => response.json())
    .then(datosProductos=>{
        datosProductos.forEach(producto =>{
            divProductos.innerHTML += `
                <div class="card border-primary mb-5" id="producto${producto.id + 1}" style="max-width: 18rem">
                    <img src="../img/${producto.img}" class="card-img-top" alt="${producto}">
                    <div class="card-body">
                        <p class="card-text">${producto.name}</p>
                        <h5 class="card-title">${producto.price}</h5>
                        <p class="card-text">stock:  ${producto.stock}</p>
                        <div class="cardButton">
                            <button class="btn btn-dark" id="boton${producto.id}"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            `
    })

})
.catch(error=> console.error(error))
$('#limpiar').on('click', (e) => {
    $('.container').empty();
});

})

