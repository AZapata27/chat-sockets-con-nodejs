const { Server } = require("net");


const server = new Server();

//protocolo para cerrar Socket
const END = 'END';


// evento de la conexion al socket
server.on("connection", (socket) => {
    const remoteSocket=`${socket.remoteAddress}: ${socket.remotePort}`;
  console.log(`New conection from ${remoteSocket}`);

  socket.setEncoding('utf-8');
  // evento de cuando ingrese data a socket
  socket.on('data',(message)=>{
    
    if ( message === END){
      
      socket.end();
    }else{
      console.log(`${remoteSocket} -> ${message}`);
    }
     
  });
  // evento de close de server
  socket.on("close", ()=>console.log(`Conection wiht ${sockect.remotePort} has end`));
});

server.listen({ port: 8000, host: "0.0.0.0" }, () => {
  console.log("Listening on port 8000");
});



