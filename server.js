const express = require('express')
const next = require('next')
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000;

app.prepare()
.then(() => {
  const server = express()

  //custom middlewares
  server.use( ( req, res, next) => {

      //create readable date
      const now = new Date().toString();
      let log;

      if( req.url === '/_next/on-demand-entries-ping?page=/'){
        return;
      }

      if( req.url === '/_next/on-demand-entries-ping?page=/projects'){
        return;
      }

      if( req.url === '/_next/on-demand-entries-ping?page=/about'){
        return;
      }

      log = `${now}: ${req.method} ${req.url}`;

      fs.appendFile(
          'server.log', 
          log + '\n',
          (err) => {
              if(err){
                  console.log('Unable to append to server.log');
              }
          }  
      );

      console.log("--------------");
      console.log("--------------");
      console.log(`${now}`);
      console.log(`Method: ${req.method}`);
      console.log(`Url: ${req.url}`);
      console.log("--------------");
      console.log("--------------");

      //call next when you are done
      next();

  });


  server.get('/about', (req, res) => {
    console.log('about route');
    return app.render(req, res, '/about', req.query)
  })

  server.get('/projects', (req, res) => {
    console.log('Projects route');
    console.log(req.query);
    return app.render(req, res, '/projects', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on' + port)
  })
})