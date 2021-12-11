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
$('#ver').on('click',(e)=>{
    e.preventDefault();
    $.get('productos.json',(consulta,status)=>{
        
        console.log(consulta)
        if (status === 'success') {
        consulta.forEach((post) => {
        $('#container').append(`<div style="margin:50px 0px">
        <h1>${post.name}</h1>
        <h1>${post.price}</h1>
        <h1>${post.stock}</h1>
        </div>`);
            });
        }
    });
});

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
        localStorage.setItem('Productos', JSON.stringify(RegistroDeProductos)); //guardo mis Productos en el storage
    }else if(selectABM === "eliminar"){
        let id = document.getElementById('id').value;
        let name = document.getElementById('nombre').value;
        let price = document.getElementById('precio').value;
        let stock = document.getElementById('stock').value;
        let indexProducto = RegistroDeProductos.findIndex(producto => producto.id === id)
        RegistroDeProductos.splice(indexProducto, 1)
        
    } 
}
const producto = RegistroDeProductos


//console.log(producto)


