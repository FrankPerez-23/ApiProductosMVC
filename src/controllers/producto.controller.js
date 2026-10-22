const Producto = require('../models/producto.model');

//valida los datos recibidos. Devuelve un mensaje de error o null si todo está bien.

const validarProducto = ({ nombre, precio, stock}) => { 
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        return 'El nombre es obligatorio';
    }
    if (precio === undefined || isNaN(Number(precio)) || Number(precio) < 0) {
        return 'El precio debe ser un número mayor o igual a 0';
    }
    return null;
};

//GET /api/ productos
const listar = async (req, res) => {
    try{
        const producto = await Producto.obtenerTodos();
        res.status(200).json(productos);
    }catch(error){
        console.error(error);
        res.status(500).json({mensaje: 'Error al obtener los productos'});
    }
};

// GET /api/productos/:id
const obtener = async (req, res) => {
    try{
        const producto = await Producto.obtenerPorId(req.params.id);
        if (!producto) {
            return res.status(404).json({mensaje: 'Producto no encontrado'});
        }
        res.status(200).json(producto);
    }catch (error){
        console.error(error);
        res.status(500).json({mensaje: 'Error al obtener el producto'});
    }
};