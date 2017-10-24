'use strict'

  //  acción del controlador
function prueba (req, res) {
  res.status(200).send({
    message: 'Probando una acción del controlador de usuarios'
  })
}

module.exports = {
  prueba
}
