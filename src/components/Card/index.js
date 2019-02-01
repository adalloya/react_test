import React, { Component } from "react";

class Card extends Component {

render() {

    return (
<div className="container">
  <div className="row">
     <div className="col s12 m12">
       <a href="hola" id="number" className="waves-effect waves-light btn-large hide-on-small-only banner">0 Articulos en venta</a>
       <a href="hola" id="number1" className="waves-effect waves-light btn-large watchers hide-on-small-only banner">0 Personas comprando</a>
       <a href="hola" id="number2" className="waves-effect waves-light btn-large watchers hide-on-small-only banner">0 Usuarios registrados</a>
     </div>
  </div>
    <div id="to-dos" className="row">

        </div>
</div>
    );
}

}
    export default Card;
