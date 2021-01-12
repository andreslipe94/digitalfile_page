window.onload = function() {
    // Variables


    let baseDeDatos = [{
            id: 201,
            img: './img/plantas/Crisantemo.jpeg',
            nombre: 'Crisantemo',
            descripcion: 'Crisantemo',
            descripcion2: '',
            old: '', // precio viejo
            precio: 79
        },
        {
            id: 202,
            img: './img/plantas/Conejitos.jpeg',
            nombre: 'Conejitos',
            descripcion: 'Conejitos',
            descripcion2: '',
            old: '', // precio viejo
            precio: 39
        },

        {
            id: 203,
            img: './img/plantas/Crotton_amarillo.jpeg',
            nombre: 'Crotton_amarillo',
            descripcion: 'Crotton amarillo',
            descripcion2: '',
            old: '', // precio viejo
            precio: 439
        },
        {
            id: 204,
            img: './img/plantas/Crotton mona lisa chico.jpeg',
            nombre: 'Crotton_mona',
            descripcion: 'Crotton mona lisa chico',
            descripcion2: '',
            old: '', // precio viejo
            precio: 249
        },
        {
            id: 205,
            img: './img/plantas/dolar grande.jpeg',
            nombre: 'dolar_grande',
            descripcion: 'dolar grande',
            descripcion2: '',
            old: '', // precio viejo
            precio: 289
        },
        {
            id: 206,
            img: './img/plantas/Ficus benjamina.jpeg',
            nombre: 'Ficus_benjamina',
            descripcion: 'Ficus benjamina',
            descripcion2: '',
            old: '', // precio viejo
            precio: 589
        },
        {
            id: 207,
            img: './img/plantas/Gazania.jpeg',
            nombre: 'Gazania',
            descripcion: 'Gazania',
            descripcion2: 'enamorada del sol',
            old: '', // precio viejo
            precio: 79
        },
        {
            id: 208,
            img: './img/plantas/Geranio malbon.jpeg',
            nombre: 'Geranio_malbon',
            descripcion: 'Geranio malbon',
            descripcion2: '',
            old: '', // precio viejo
            precio: 89
        },
        {
            id: 210,
            img: './img/plantas/Helecho americano grande.jpeg',
            nombre: 'Helecho_americano_grande',
            descripcion: 'Helecho americano grande',
            descripcion2: '',
            old: '', // precio viejo
            precio: 389
        },
        {
            id: 211,
            img: './img/plantas/Helecho asplenium.jpeg',
            nombre: 'Helecho_asplenium',
            descripcion: 'Helecho asplenium',
            descripcion2: '',
            old: '', // precio viejo
            precio: 389
        },
        {
            id: 212,
            img: './img/plantas/Mamtillo blanco.jpeg',
            nombre: 'Mantillo_blanco',
            descripcion: 'Mantillo blanco',
            descripcion2: '',
            old: '', // precio viejo
            precio: 39
        },
        {
            id: 213,
            img: './img/plantas/Mini pensamiento.jpeg',
            nombre: 'Mini_pensamiento',
            descripcion: 'Mini pensamiento',
            descripcion2: '',
            old: '', // precio viejo
            precio: 39
        },
        {
            id: 214,
            img: './img/plantas/palo de agua.jpeg',
            nombre: 'palo_de_agua',
            descripcion: 'palo de agua',
            descripcion2: '',
            old: '', // precio viejo
            precio: 289
        },
        {
            id: 215,
            img: './img/plantas/Pensamiento.jpeg',
            nombre: 'Pensamiento',
            descripcion: 'Pensamiento',
            descripcion2: '',
            old: '', // precio viejo
            precio: 39
        },
        {
            id: 216,
            img: './img/plantas/Petunia.jpeg',
            nombre: 'Petunia',
            descripcion: 'Petunia',
            descripcion2: '',
            old: '', // precio viejo
            precio: 39
        },
        {
            id: 217,
            img: './img/plantas/Sansiveria enana.jpeg',
            nombre: 'Sansiveria_enana',
            descripcion: 'Sansiveria enana',
            descripcion2: '',
            old: '', // precio viejo
            precio: 249
        },
        {
            id: 218,
            img: './img/plantas/Santa rita.jpeg',
            nombre: 'Santa_rita',
            descripcion: 'Santa Rita',
            descripcion2: '',
            old: '', // precio viejo
            precio: 389
        },
        {
            id: 219,
            img: './img/plantas/Santa teresita.jpeg',
            nombre: 'Santa_teresita',
            descripcion: 'Santa Teresita',
            descripcion2: '',
            old: '', // precio viejo
            precio: 249
        },
        {
            id: 220,
            img: './img/plantas/Syngonium grande.jpeg',
            nombre: 'Syngonium_grande',
            descripcion: 'Syngonium grande',
            descripcion2: '',
            old: '', // precio viejo
            precio: 289
        },
        {
            id: 221,
            img: './img/plantas/Violeta de los alpes.jpeg',
            nombre: 'Violeta_de_los_alpes',
            descripcion: 'Violeta de los Alpes',
            descripcion2: '',
            old: '', // precio viejo
            precio: 389
        },
        {
            id: 222,
            img: './img/plantas/Coleos.jpeg',
            nombre: 'Coleos',
            descripcion: 'Coleos',
            descripcion2: '',
            old: '', // precio viejo
            precio: 69
        }
        // {
        //     id: ,
        //     img: './img/plantas/.jpeg',
        //     nombre: '',
        //     descripcion: '',
        //     descripcion2: '',
        //     old: '', // precio viejo
        //     precio:
        // },

    ]

    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['img']);
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info['precio'] + '$';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar al Carrito';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito() {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
            // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function(item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function(total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - $ ${miItem[0]['precio']}`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
            // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function(carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }
    // Eventos

    // Inicio
    renderItems();
}



function comprar() {

    var carrito = document.getElementsByClassName('list-group-item'); // captura el contenido de la lista de compras.
    var importe = total; // captura la suma en pesos del total de la compra.
    var listaCap = ''; // inicia variable vacia para los productos que se agreguen al carrito.
    var whats = 'https://api.whatsapp.com/send?phone=5493513060928&text=';
    var mensajeFinal;


    for (let i = 0; i < carrito.length; i++) {

        listaCap += carrito[i].textContent.replace(/r?\X/g, '\n\ \n');

    }

    msj = listaCap;

    mensajeFinal += '<a href="' + whats + msj + 'total: $ ' + importe.textContent + '">' +
        '<i class="fab fa-whatsapp" aria-hidden="true">' + '</i>' +
        '</a>'

    document.getElementById('pedido').innerHTML = mensajeFinal;


    console.log(msj + 'total: $ ' + importe.textContent);


    return carrito;
}