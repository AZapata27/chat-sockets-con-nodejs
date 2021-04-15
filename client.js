const { Socket } = require("net");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

})


const socket= new Socket();
const END ='END';

socket.connect({host: 'localhost',port:8000 });

socket.write('Hola mundo desde sockets node');
socket.setEncoding('utf-8');

readline.on('line',(message)=>{
    if(message === END){
        socket.end();
        process.exit(0);

    }
    socket.write(message);
})


socket.on('data',(data)=>{
    console.log(data);
})

socket.on("close", ()=>
process.exit(0));