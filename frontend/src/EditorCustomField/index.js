import "./index.css";
import * as React from "react";
import { createElement, extend } from "@syncfusion/ej2-base";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ResourcesDirective,
  ResourceDirective,
} from "@syncfusion/ej2-react-schedule";
// import dataSource from "./datasource.json";
import { applyCategoryColor } from "./helper";
import Nav from "../shared/Nav";

import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { updateSampleSection } from "./sample-base";
/**
 *  Schedule editor custom fields sample
 */
function EditorCustomField() {
  const dataSource = [];
  React.useEffect(() => {
    updateSampleSection();
  }, []);
  let scheduleObj;
  const data = extend([], dataSource.eventsData, null, true);
  function onPopupOpen(args) {
    if (args.type === "Editor") {
      console.log(data);
      // Create required custom elements in initial time
      if (!args.element.querySelector(".custom-field-row")) {
        let row = createElement("div", { className: "custom-field-row" });
        let formElement = args.element.querySelector(".e-schedule-form");
        formElement.firstChild.insertBefore(
          row,
          formElement.firstChild.firstChild
        );
        let container = createElement("div", {
          className: "custom-field-container",
        });
        let inputEle = createElement("input", {
          className: "e-field",
          attrs: { name: "Employee" },
        });
        container.appendChild(inputEle);
        row.appendChild(container);
        let dropDownList = new DropDownList({
          dataSource: [
            { text: "Đức", value: "duc" },
            { text: "Đức1", value: "duc1" },
          ],
          fields: { text: "text", value: "value" },
          value: args.data.EventType,
          floatLabelType: "Always",
          placeholder: "Employee",
          value: "duc1",
        });
        dropDownList.appendTo(inputEle);
        inputEle.setAttribute("name", "Employee");
        let inputMCPs = createElement("input", {
          className: "e-field",
          attrs: { name: "MCP" },
        });
        container.appendChild(inputMCPs);
        row.appendChild(container);
        let dropDownList1 = new DropDownList({
          dataSource: [
            { text: "Bách Khoa", value: "bachkhoa" },
            { text: "Quốc Tế", value: "quocte" },
          ],
          fields: { text: "text", value: "value" },
          value: args.data.EventType,
          floatLabelType: "Always",
          placeholder: "MCP",
          value: "bachkhoa",
        });
        dropDownList1.appendTo(inputMCPs);
        inputMCPs.setAttribute("name", "MCP");
      }
    }
  }
  function onEventRendered(args) {
    applyCategoryColor(args, scheduleObj.currentView);
  }
  const TypeData = [
    { OwnerText: "Collector", Id: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Janitor", Id: 2, OwnerColor: "#f8a398" },
  ];
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
          <div className="control-wrapper">
            <ScheduleComponent
              height="500px"
              selectedDate={new Date(2021, 1, 15)}
              ref={(t) => (scheduleObj = t)}
              eventSettings={{
                dataSource: data,
                fields: {
                  subject: { title: "Subject Summary", name: "Subject" },
                  location: { default: "Hồ Chí Minh"},
                  description: { title: "Comments", name: "Description" },
                },
              }}
              popupOpen={onPopupOpen.bind(this)}
              eventRendered={onEventRendered.bind(this)}
            >
              <ResourcesDirective>
                <ResourceDirective
                  field="OwnerId"
                  title="Owner"
                  name="Owners"
                  dataSource={TypeData}
                  textField="OwnerText"
                  idField="Id"
                  colorField="OwnerColor"
                ></ResourceDirective>
              </ResourcesDirective>
              <Inject
                services={[
                  Day,
                  Week,
                  WorkWeek,
                  Month,
                  Agenda,
                  Resize,
                  DragAndDrop,
                ]}
              />
            </ScheduleComponent>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditorCustomField;
