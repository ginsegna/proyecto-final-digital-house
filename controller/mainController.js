const path = require ('path');
const fs = require ('fs');

const productsFilePath = path.join(__dirname, '../data/productos.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const products = JSON.parse (fs.readFileSync("./data/productos.json"));


const controller = {
    index: (req,res) => {
        return res.render ('index')
    },
    login: (req,res) => {
        return res.render ('login')
    },
    productCar: (req,res) => {
        return res.render ('productCar')
    },
    productDetail: (req,res) => {
        const productToEdit = products[0]
        return res.render ('productDetail', {product:productToEdit})
    },
    register: (req,res) => {
        return res.render ('register')
    },

    crear: (req, res) => {
        return res.render ('formCarga')
    },

    carga: (req,res) => {
       
        
        const nuevoProducto = req.body;

        

         //asignanción del id al nuevo producto, una mas que el último id
        const largoBD = products.length;
        nuevoProducto.id = (products[largoBD - 1].id)+1;

        // pasar a numeros los string de precio y descuento que vengan del formulario
        nuevoProducto.price = parseFloat(nuevoProducto.price);
        nuevoProducto.discount = parseFloat(nuevoProducto.discount);

        // agrego el campo con el nombre de la foto del producto que se guardó en public/images/products
        nuevoProducto.image = req.file.filename;

        

        products.push(nuevoProducto);

    
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

        
		return res.send(nuevoProducto);
        
        
    },

    edicion: (req,res) => {
        return res.render ('formEdicion')
    },
  

}

module.exports = {controller}