// node-static
// var static = require('node-static');
 
// //
// // Create a node-static server instance to serve the './public' folder
// //
// var file = new static.Server('./public');
 
// require('http').createServer(function (request, response) {
//     request.addListener('end', function () {
//         //
//         // Serve files!
//         //
//         file.serve(request, response);
//     }).resume();
// }).listen(8080);

// Serve Static
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(express.static('public'))

app.listen(8080, () => console.log('GypsyJazzAgenda app listening on port 8080!'))

// Express
// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))