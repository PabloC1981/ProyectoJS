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