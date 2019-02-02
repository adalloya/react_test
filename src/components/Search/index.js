import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Search() {
    return (
<div id="modal7" className="modal login">
    <div className="modal-content">
            <div className="row">
            <blockquote>
      <h4>Busqueda</h4>
    </blockquote>
             <form className="col s12">
              
                                        <div className="input-field col s12">
                                          <input id="searchinput" type="text" className="validate" data-length="15" maxLength="15"></input>
                                          <label htmlFor="searchinput">Busca unicamente por el nombre de la consola:</label>
                                        </div>
                                        <div className="input-field col s12">
                                          <button id="searchbutton" className="btn waves-effect waves-light modal-close">Buscar<i className="material-icons right">send</i>
                                          </button>
                                          </div>
            </form>
            </div>
            </div>
            </div>
           
            
    );
} 

export default Search;
