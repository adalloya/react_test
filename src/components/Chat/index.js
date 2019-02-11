import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Chat() {
    return (
<div id="modal9" className="modal">
    <div className="modal-content">
            <span id="todo-item">
            <div className="row">
            <blockquote>
      <h4>Crear mensaje</h4>
    </blockquote>
             <form className="col s12">
                             <div className="input-field col s12">
                                <input id="chatmessage" type="text" data-length="30" maxLength="30"></input>
                                <label htmlFor="item">Escribe tu mensaje</label>
                             </div>
                                        <div className="col s12">
                                                <button id="chatsend" className="modal-close btn waves-effect waves-light summit" type="submit" name="action">Enviar
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

export default Chat;
