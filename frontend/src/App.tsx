import React from "react";
import "./App.css";
import {
  ScheduleComponent,
  Inject,
  Agenda,
  Day,
  Month,
  Week,
  WorkWeek,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import Nav from "./Nav";
class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2019, 0, 11, 6, 30),
        StartTime: new Date(2019, 0, 11, 4, 0)
      },
    ],
  };
  private remoteData = new DataManager({
    url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  render() {
    return (
      <div>
        <Nav></Nav>
        <hr />
        <div className="container-fluid row">
          <div>
            <p className="row">
              <h1 className="text-center">Manage Task</h1>
            </p>
          </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
          <div className="col-9">
            <ScheduleComponent
              currentView="Month"
              eventSettings={{ dataSource: this.remoteData }}
              selectedDate={new Date(2017, 5, 5)}
            >
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
          <div className="col-3">
            <h5>Message to</h5>
            <select className="form-select" id="validationCustom04" required>
              <option value="">Nguyễn Văn A</option>
              <option value="">Nguyễn Văn B</option>
              <option value="">Nguyễn Văn C</option>
              <option value="">Nguyễn Văn D</option>
              <option>...</option>
            </select>
            <div className="my-2">
              <div className="">
                <div className="row d-flex justify-content-center">
                  <div className="col">
                    <div className="card" id="chat2">
                      <div className="card-header d-flex justify-content-between align-items-center p-2">
                        <h5 className="mb-0">Chat</h5>
                      
                      </div>
                      <div
                        className="card-body"
                      >  
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
                          style={{"height" : "40px", "width" : "40px"}}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
