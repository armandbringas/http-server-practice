import * as http from 'http';
const host = 'localhost'
let port = 2020
const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '' ) {
      if (request.method === 'GET') {
        response.end("Hello, Galvanize!");
      }
    }
    response.statusCode = 404;
    response.end();
  });

  server.listen(2020, "localhost", () => {
    console.log(`Server running at ${host}:${port}`);
  });