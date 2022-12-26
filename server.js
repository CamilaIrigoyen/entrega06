const express = require ('express')
const {Server: HttpServer} = require ('http')
const {Server: IOServer} = require ('socket.io')

const app= express()
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

app.use(express.static('./public'))
app.get('/', (req,res) => {
    res.sendFile('index.html', {root:__dirname})
}

)

io.on('connection', socket => {
    socket.emit ('mi mensaje', 'este es mi mensaje desde el lado del servidor')
    console.log('usuario conectado');
    
})

const port=3000;

httpServer.listen(port, ()=> console.log('SERVER ON' , port))

// io.on('connection', (socket)=> {console.log('usuario conectado')
// });