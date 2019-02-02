import React from "react";

function Filter() {
    return (
        <div id="modal5" className="modal bottom-sheet">
        <div className="modal-content">
        <blockquote>
    <h4>Filtrar por categoria</h4>
<a class="waves-effect waves-light btn filtros" id="Ver">Ver Todo</a>
  <a class="waves-effect waves-light btn filtros" id="Accesorios">Accesorios</a>
  <a class="waves-effect waves-light btn filtros" id="Consolas1">Consolas</a>
  <a class="waves-effect waves-light btn filtros" id="Juegos">Juegos</a>
  </blockquote>
  <blockquote>
    <h4>Filtrar por consola</h4>
<a class="waves-effect waves-light btn filtros" id="3DS">Nintendo 3DS</a>
  <a class="waves-effect waves-light btn filtros" id="Clasico">Clasico</a>
  <a class="waves-effect waves-light btn filtros" id="PS3">PS3</a>
  <a class="waves-effect waves-light btn filtros" id="PS4">PS4</a>
  <a class="waves-effect waves-light btn filtros" id="Switch">Switch</a>
  <a class="waves-effect waves-light btn filtros" id="VITA">PSVita</a>
  <a class="waves-effect waves-light btn filtros" id="WiiU">WiiU</a>
  <a class="waves-effect waves-light btn filtros" id="Xbox">Xbox One</a>
  </blockquote>
 </div>
       
</div>
    
    );
}

export default Filter;