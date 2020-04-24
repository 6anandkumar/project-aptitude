import React, { Component } from "react";
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";



class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },

      inDuration: 250,
      outDuration: 250,
      opacity: 0.7,
      dismissible: false,
      startingTop: "50%",
      endingTop: "12%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a className=" modal-trigger" data-target="modal1">Login</a>
        

        <div ref={Modal => { this.Modal = Modal;}} id="modal1" className="modal">
       
          <div className="model-header">
                <div className="hcss">
                  <h3 className="center darken-3 ">Log In</h3>
                    <hr></hr>
                </div>
          </div>

          <div className="modal-content ">
              <div class="row">
                <form class="col s12">

                  <div class="row">
                    <div class="input-field col s12">
                      <input placeholder="Your Username and email" id="first_name" type="text" class="validate"/>
                      <label for="email">Email</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input placeholder="Password" id="password" type="password" class="validate"/>
                      <label for="password">Password</label>
                    </div>
                  </div>

                    <div className="row">
                      <div className="col s12">
                        <div className="left">
                            <p className="ppadding">
                              <label className="labelpadding">
                                <input type="checkbox" class="filled-in"  />
                                <span className="spanpadding">Remember me</span>
                              </label>
                            </p>
                        </div>
                      </div>
                    </div>

                </form>
              </div>

                

          </div>
       
            
            <div className="modal-footer">
              <a className="modal-close waves-effect waves-light btn">
                Cancel
              </a>
              <a className="modal-close waves-effect waves-light btn">
                Log in
              </a>
            </div>


          </div>
      </div>
    );
  }
}

export default Modal;
