// variable para usar http  
const http = require('http') 

// para las fechas
const moment = require('moment')

// creacion de servidor
const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Hola Mundo 2')
})

//escucha de servidor standar
// const connectedServer = server.listen(8080, () => {
//     console.log('server http escuchando en el puerto ' +  connectedServer.address().port )
// })

const connectedServer = server.listen(8080, () => {
        const horaActual= moment().format('HH')
        let mensaje
        if(horaActual>=6 && horaActual <=12){
            mensaje = 'Buenos Dias'
        } else if(horaActual >=13 && horaActual<= 19){
            mensaje = 'Buenas Tardes'
        } else{
            mensaje = 'Buenas Noches'
        }
    console.log(mensaje + ' server http escuchando en el puerto ' +  connectedServer.address().port )
})
