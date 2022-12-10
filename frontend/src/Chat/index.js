import React from 'react'

export default function Chat() {
  
  function send() {
    // Lua nguoi de chat
    var choice = document.getElementById("choice").value;

    var message = document.getElementById("mess").value;
    document.getElementById("mess").value = "";
    // Send
    if (choice != ""){
        var x = document.getElementById("isend");
        x.className = "small p-2 mb-1 text-start text-white rounded-3 bg-primary";
        document.getElementById("isend").innerHTML = message;
        // Day
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = time+' '+date;

      document.getElementById("date").innerHTML = dateTime;
      
      var y = document.getElementById("yousend");
      if (message == "!task"){
        y.className = "small p-2 mb-1 text-start text-white rounded-3 bg-secondary";
        document.getElementById("yousend").innerHTML = "user";
      }
      else {
        y.className = "small p-2 mb-1 text-start text-white rounded-3 bg-secondary";
        document.getElementById("yousend").innerHTML = "Tôi là " + choice;
        
      }
        var retoday = new Date();
        var redate = retoday.getDate()+'/'+(retoday.getMonth()+1)+'/'+retoday.getFullYear();
        var retime = retoday.getHours() + ":" + retoday.getMinutes() + ":" + retoday.getSeconds();
        var redateTime = retime+' '+redate;

        
        document.getElementById("date1").innerHTML = redateTime;
  }

    
  }    
  
  function change_chat() {
    var x = document.getElementById("isend");
    x.className = "small mb-1 text-start text-white rounded-3 bg-white";
    document.getElementById("isend").innerHTML = "";
    document.getElementById("date").innerHTML = "";

    var y = document.getElementById("yousend");
    y.className = "small mb-1 text-start text-white rounded-3 bg-white";
    document.getElementById("yousend").innerHTML = "";
    document.getElementById("date1").innerHTML = "";
  }

  return (
    
    <><h4 className="text-center mb-3">Message</h4>
    <div className="my-2">
      <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <div className="card" id="chat2" >
              <div className="card-header d-flex justify-content-between align-items-center p-2">

                <select className="form-select" id="choice" onChange={change_chat}>
                  <option value="" >Chat</option>
                  <option value="A" >A</option>
                  <option value="B" >B</option>
                  <option value="C" >C</option>
                  <option value="D" >D</option>
                  <option value="E" >E</option>
                </select>
                
              </div>
              
              <div className="card-body">
                

                <div className="d-flex flex-row justify-content-end mb-1">
                  <div>
                    <p className="small p-2 mb-1 text-start text-white rounded-3 bg-white" id="isend">
                    </p>
                    <p id="date"  className="small mb-1 rounded-3 text-muted d-flex justify-content-end">
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-1" >
                  
                  <div>
                  <span>
                  
                    <p className="small p-2 mb-1 rounded-3 bg-white" id="yousend">
                    
                      </p>
                  </span>
                    
                    <p id="date1" className="small mb-1 rounded-3 text-muted">
                    </p>
                  </div>
                  
                    
                </div>

                {/* <div className="d-flex flex-row justify-content-start" >
                  <div>
                    <p className="small p-2 mb-1 text-white rounded-3 bg-primary">
                      Okay
                    </p>
                    <p id="hvn" className="small mb-1 rounded-3 text-muted d-flex justify-content-end">
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="avatar 3"
                  className="mx-2"
                  style={{ height: "40px", width: "40px" }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="mess"
                  placeholder="Type message"
                />
                <button className="btn btn-danger" type="button" onClick={send}>Send</button>   
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      

    </div>
    
    </>
    
  )
  
  
}

