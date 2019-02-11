import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Subasta() {
    return (
<div id="modalsubasta" className="modal subasta">
    <div className="modal-content subasta">
    <a id="subastabutton" href="#modal1" class="waves-effect waves-light btn modal-trigger"><i class="material-icons left">gavel</i>Publicar anuncio</a>
            <span id="todo-item">
            <div className="row">
            <blockquote>
      <h4 class="subastatitulo">Publica tu subasta</h4>
    </blockquote>
             <form className="col s12">

                        <div className="input-field col s12">
                                    <select id="category1">
                                      <option value="" defaultValue>Selecciona una categoria</option>
                                      <option value="Accesorio">Accesorio</option>
                                      <option value="Consola">Consola</option>
                                      <option value="Juego">Juego</option>
                                  
                                    </select>
                                    <label>¿Qué es lo que vendes?</label>
                             </div>

                                <div className="input-field col s12">
                                    <select id="consola1">
                                      <option value="" defaultValue>Selecciona la Consola</option>
                                      <option value="NINTENDO 3DS"> Nintendo 3DS</option>
                                      <option value="CLASICO">Clasico</option>
                                      <option value="PS3">PS3</option>
                                      <option value="PS4">PS4</option>
                                      <option value="SWITCH">Switch</option>
                                      <option value="VITA">Vita</option>
                                      <option value="WIIU">WiiU</option>
                                      <option value="XBOX ONE">XBOX ONE</option>
                                  
                                    </select>
                                    <label>¿Para que consola es?</label>
                             </div>
                             <div className="input-field col s12">
                                    <select id="status1">
                                      <option value="" defaultValue>Selecciona la condicion</option>
                                      <option value="Nuevo">Nuevo</option>
                                      <option value="Usado">Usado</option>
                                    </select>
                                    <label>¿En que condicion está?</label>
                             </div>
                             <div className="input-field col s12">
                                    <select id="location1">
                                      <option value="" defaultValue>Selecciona tu ubicacion</option>
                                      <option value="CDMX">Ciudad de México</option>
                                      <option value="EDOMX">Estado de México</option>
                                      <option value="Toluca">Toluca</option>
                                      <option value="Queretaro">Queretaro</option>
                                      <option value="Otro">Otro</option>
                                    </select>
                                    <label>¿Donde lo vendes?</label>
                             </div>
                             <div className="input-field col s12">
                                <input id="item1" type="text" data-length="30" maxLength="30"></input>
                                <label htmlFor="item">¿Como se llama tu producto?</label>
                             </div>
                           
                            <div className="input-field col s12">
                              <textarea id="description1" className="materialize-textarea" data-length="240" maxLength="240"></textarea>
                              <label htmlFor="description">Describelo brevemente</label>
                            </div>
                                        <div className="input-field col s12">
                                          <textarea id="price1" type="number" className="materialize-textarea" data-length="10" maxLength="10"></textarea>
                                          <label htmlFor="price">¿Cual es el precio inicial?</label>
                                        </div>
                                      <div className= "col s12">
                                      <blockquote>
                                        <h6>Agrega una imagen del producto que vas a vender, primero selecciona el archivo y luego da click en en agregar para adjuntarla al anuncio</h6>
                                       </blockquote>
                                     <label class="upload-group waves-effect waves-light btn">
                                            seleccionar imagen
                                      <input type="file" class="upload-group" id="file"></input>
                                        </label>
                                      <button type="button" class="btn btn-primary" id="uploadButtonsubasta" >Agregar imagen</button>
                                      <blockquote id="exito1" class="exito"><h6>¡La carga fue exitosa ya puedes publicar tu anuncio! </h6> </blockquote>
                                       <h6 id="fileurlmobile"></h6>
                                       </div>
                                        <div className="col s12">
                                                <button id="add-to-do1" className="modal-close btn waves-effect waves-light summit disabled" type="submit" name="action">Publicalo
                                                        <i className="material-icons right">send</i>
                                                </button>
                                        </div>
            </form>
            </div>
            </span>
            </div>
            </div>
            
    );
}

export default Subasta;