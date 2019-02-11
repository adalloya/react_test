import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Myads() {
    return (
        <div id="modal4" className="modal bottom-sheet">
          <div className="modal-content">
          <blockquote>
      <h4>Mis anuncios</h4>
    </blockquote>
    <div>
            <p>Aqui podras ver y administrar todos tus anuncios publicados</p>
<ul className="collapsible popout collection" id="userads">
  </ul>
    </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
    );
}

export default Myads;
