//Aqui es donde se llaman todas las funciones escritas en mdLinks.js 

#!/usr/bin/env node

const mdLinks = require('./lib/mdlinks'); //este recure esta lleno de los objetos que estan escritos en ese archivo y que le pasa module.exports que esta hasta el final de este codigo

  let options = {};
  if (process.argv.indexOf('--validate') !== -1) {
    options.validate = true;
  }

  if (process.argv.indexOf('--stats') !== -1) {
    options.stats = true;
  }

  mdLinks(process.argv[2], options).then((links)=>{
    links.forEach((link) => {
      if (link.status) {
        console.log(link.file, ':', link.line, link.href, 'status:', link.status);
      } else {
        console.log(link.file, ':', link.line, link.href);
      }
    });
  }).catch((error)=>{
    console.error('MDLinks ha fallado, revisa que has puesto una ruta válida');
    console.error('Error', error);
  });

module.exports = mdLinks;
