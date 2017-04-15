/*jshint esversion: 6*/

const net = require('net');

let method = `GET`;
let host;
let path = '/';
let version = 'HTTP/1.1';

const client = net.connect({port: 8080}, () =>{
process.stdin.on('data', ( data ) => {
  parseFunc(data);
  function parseFunc (data){
      parsedData = data.toString().split(' ');
      console.log(parsedData);
      if(parsedData[0] === 'method'){
        let temp = parsedData[1].split('');
        temp.pop();
        method = temp.join('');
      }
      if(parsedData[0] === 'path'){
        let temp = parsedData[1].split('');
        temp.pop();
        path = temp.join('');
      }
      if(parsedData[0] === 'host'){
        let temp = parsedData[1];
        temp.pop();
        host = temp.join('');
      }
    }
console.log(`method ${method} host ${host} path ${path}`);
  client.write(`${method} ${path} ${version}`);
  client.on('data',(data)=>{
    dataArray = data.toString().split('\n');
    console.log(dataArray);
  });
    client.end();
  });


});