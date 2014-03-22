svg-3d-simplicial-complex
=========================
Renders a simplicial complex to a list of <polygon> elements in an SVG file

# Example

```javascript
var bunny  = require("bunny")
var mat4   = require("gl-matrix").mat4
var render = require("svg-3d-simplicial-complex")

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
```

Output svg:

<img src="https://raw.githubusercontent.com/mikolalysenko/svg-3d-simplicial-complex/master/bunny.svg">

# Install

```
npm install svg-3d-simplicial-complex
```

# API

### `require("svg-3d-simplicial-complex")(positions,cells[,options])`
Renders a simplicial complex as a list of <polygon> elements

* `positions` is a list of vertex positions
* `cells` is an indexed list of facets
* `options` is an object that has the following optional properties:

    + `model` the model matrix for the camera
    + `view` the view matrix for the camera
    + `projection` the projection matrix for the camera
    + `viewport` the viewport for the rendered svg

Conventions for camera and viewport follow those from WebGL

**Returns** A string of `<polygon>` svg elements that renders the simplicial complex.

# Credits
(c) 2014 Mikola Lysenko. MIT License