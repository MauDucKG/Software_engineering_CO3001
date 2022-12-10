import React from 'react'

export default function Chat() {
  return (
    <><h4 className="text-center mb-3">Message</h4>
    <div className="my-2">
      <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <div className="card" id="chat2">
              <div className="card-header d-flex justify-content-between align-items-center p-2">
                <h5 className="mb-0">Chat</h5>
              </div>
              <div className="card-body">
                <div className="d-flex flex-row justify-content-end mb-1">
                  <div>
                    <p className="small p-2 mb-1 text-white rounded-3 bg-primary">
                      Hello, i am Duc
                    </p>
                    <p className="small mb-1 rounded-3 text-muted d-flex justify-content-end">
                      00:11
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-1">
                  <div>
                    <p className="small p-2 mb-1 rounded-3 bg-warning">
                      Hi, i am Duc
                    </p>
                    <p className="small mb-1 rounded-3 text-muted">
                      00:13
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <p className="small p-2 mb-1 text-white rounded-3 bg-primary">
                      Okay
                    </p>
                    <p className="small mb-1 rounded-3 text-muted d-flex justify-content-end">
                      00:15
                    </p>
                  </div>
                </div>
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
                  id="exampleFormControlInput1"
                  placeholder="Type message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}
