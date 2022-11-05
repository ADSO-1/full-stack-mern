// Middleware
// res: respuesta nuestro servidor
// req: informacion que nos llega de la vista
const home = (req, res) => {
    res.json({
        msg: "Hola Mundo ExpressJS"
    });
};

const ladoCuadrado = (req, res) => {
    const lado = req.params;
    console.log(lado);
    const { numero } = lado;
    res.json({
        msg: `El lado del cuadro es: ${numero * numero}`
    })
}

export {
    home,
    ladoCuadrado
}