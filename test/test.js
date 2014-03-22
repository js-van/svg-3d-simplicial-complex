"use strict"

var bunny  = require("bunny")
var mat4   = require("gl-matrix").mat4
var render = require("../render.js")

console.log('<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewport="0 0 256 256" version="1.1">')
console.log(render(bunny.positions, bunny.cells, {
  view: mat4.lookAt(mat4.create(), [5, 10, 20], [0,2,0], [0,1,0]),
  projection: mat4.perspective(mat4.create(),
    Math.PI/4.0,
    1.0,
    0.1,
    1000.0),
  viewport: [[0,0], [256,256]]
}))
console.log("</svg>")