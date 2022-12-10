import "./index.css";
import * as React from "react";
import axios from "axios";
import Chat from "../Chat";
import { useEffect, useState } from "react";
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
  var dataSource = {
    eventsData: [],
  };
  useEffect(() => {
    let a = axios.get("http://localhost:4000/task").then((event) => {
      setdata(event.data.tasks);
    });
  }, []);

  React.useEffect(() => {
    updateSampleSection();
  }, []);
  let scheduleObj;
  const [data, setdata] = useState(
    extend([], dataSource.eventsData, null, true)
  );
  function onPopupOpen(args) {
    if (args.type === "Editor") {
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
            { text: "Mậu Đức", value: "duc" },
            { text: "Đăng Khoa", value: "khoa" },
            { text: "Huy Quý", value: "quy" },
            { text: "Đăng Minh", value: "minh" },
            { text: "Vĩnh Toàn", value: "toan" },
            { text: "Thiên Bảo", value: "bao" },
            { text: "Đức Huy", value: "huy" },
          ],
          fields: { text: "text", value: "value" },
          value: args.data.EventType,
          floatLabelType: "Always",
          placeholder: "Employee",
          value: "duc",
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
            { text: "Trường Đại học Bách Khoa", value: "bachkhoa" },
            { text: "Trường Đại học Quốc Tế", value: "quocte" },
            { text: "Trường Đại học Nhân Văn", value: "nhanvan" },
            { text: "Trường Đại học Tự Nhiên", value: "tunhien" },
            { text: "Trường Đại học Công nghệ Thông Tin", value: "cntt" },
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
    if (args.data["_id"] === undefined) {
      axios.post("http://localhost:4000/task", args.data).then(() => {
        let a = axios.get("http://localhost:4000/task").then((event) => {
          setdata(event.data.tasks);
        });
      });
    }
  }
  const TypeData = [
    { OwnerText: "Collector", Id: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Janitor", Id: 2, OwnerColor: "#f8a398" },
  ];
  return (
    <div>
      <Nav></Nav>
      <hr className="mb-4" />
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
                  location: { default: "Hồ Chí Minh" },
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
          <Chat/>
        </div>
      </div>
    </div>
  );
}
export default EditorCustomField;
