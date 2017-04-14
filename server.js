/*jshint esversion: 6*/

const net = require('net');

const server = net.createServer( request => {

  request.on('data', (data)=>{
    const dataArray = data.toString().split('\r\n');
    const requestLine = dataArray[0].split(' ');
    const method = requestLine[0];
    const path = requestLine[1];
    const httpVersion = requestLine[2];


    console.log(`request line: ${requestLine} method: ${method} path: ${path} httpVersion: ${httpVersion}`);

    const headersAndBody = `HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: ${indexHTML.length}

${indexHTML}`;

request.write(headersAndBody);
request.end();


  });
});

server.listen(8080);



const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>The Elements</h1>
  <h2>These are all the known elements.</h2>
  <h3>These are 2</h3>
  <ol>
    <li>
      <a href="/hydrogen.html">Hydrogen</a>
    </li>
    <li>
      <a href="/helium.html">Helium</a>
    </li>
  </ol>
</body>
</html>
Raw
`;

const indexHelium = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements - Helium</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>Helium</h1>
  <h2>H</h2>
  <h3>Atomic number 2</h3>
  <p>Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements and it exists only as a gas except in extremely cold conditions.</p>
  <p><a href="/">back</a></p>
</body>
</html>`;

const index404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Element not found!</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>404</h1>
  <h2>Element not found!</h2>
  <p>
    <a href="/">back</a>
  </p>
</body>
</html>`;