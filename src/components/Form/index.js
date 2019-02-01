import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Form() {
    return (
<div id="modal1" className="modal">
    <div className="modal-content">
            <span id="todo-item">
            <div className="row">
            <blockquote>
      <h4>Publica tu anuncío</h4>
    </blockquote>
             <form className="col s12">

                        <div className="input-field col s12">
                                    <select id="category">
                                      <option value="" defaultValue>Selecciona una categoria</option>
                                      <option value="Accesorio">Accesorio</option>
                                      <option value="Consola">Consola</option>
                                      <option value="Juego">Juego</option>
                                  
                                    </select>
                                    <label>¿Qué es lo que vendes?</label>
                             </div>

                                <div className="input-field col s12">
                                    <select id="consola">
                                      <option value="" defaultValue>Selecciona la Consola</option>
                                      <option value="Nintendo 3DS"> Nintendo 3DS</option>
                                      <option value="Clasico">Clasico</option>
                                      <option value="PS3">PS3</option>
                                      <option value="PS4">PS4</option>
                                      <option value="Switch">Switch</option>
                                      <option value="Vita">Vita</option>
                                      <option value="Vita">WiiU</option>
                                      <option value="XBOX ONE">XBOX ONE</option>
                                  
                                    </select>
                                    <label>¿Para que consola es?</label>
                             </div>
                             <div className="input-field col s12">
                                    <select id="status">
                                      <option value="" defaultValue>Selecciona la condicion</option>
                                      <option value="Nuevo">Nuevo</option>
                                      <option value="Usado">Usado</option>
                                    </select>
                                    <label>¿En que condicion está?</label>
                             </div>
                             <div className="input-field col s12">
                                    <select id="location">
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
                                <input id="item" type="text" data-length="30" maxLength="30"></input>
                                <label htmlFor="item">¿Como se llama tu producto?</label>
                             </div>
                           
                            <div className="input-field col s12">
                              <textarea id="description" className="materialize-textarea" data-length="240" maxLength="240"></textarea>
                              <label htmlFor="description">Describelo brevemente</label>
                            </div>
                                        <div className="input-field col s12">
                                          <textarea id="price" type="number" className="materialize-textarea" data-length="10" maxLength="10"></textarea>
                                          <label htmlFor="price">¿En cuanto lo vendes?</label>
                                        </div>
                                      <div className= "col s12">
                                      <blockquote>
                                        <h6>Agrega una imagen del producto que vas a vender, primero selecciona el archivo y luego da click en en agregar para adjuntarla al anuncio</h6>
                                       </blockquote>
                                     <label class="upload-group waves-effect waves-light btn">
                                            seleccionar imagen
                                      <input type="file" class="upload-group" id="file"></input>
                                        </label>
                                      <button type="button" class="btn btn-primary" id="uploadButton" >Agregar imagen</button>
                                      <blockquote id="exito" class="exito"><h6>¡La carga fue exitosa ya puedes publicar tu anuncio! </h6> </blockquote>
                                       <h6 id="fileurl"></h6>
                                       </div>
                                        <div className="col s12">
                                                <button id="add-to-do" className="modal-close btn waves-effect waves-light summit disabled" type="submit" name="action">Publicalo
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

export default Form;
