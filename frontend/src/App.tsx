import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageTask from "./ManageTask";
class App extends React.Component {
  

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'login'} element={<div></div>} />
          <Route path={'/'} element={<ManageTask/>} />
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
