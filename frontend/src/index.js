import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorCustomField from './EditorCustomField';
import Login from './Login';

function App() {
    
    return (<BrowserRouter>
        <Routes>
          <Route path={'login'} element={<Login/>} />
          <Route path={'/'} element={<EditorCustomField/>} />
        </Routes>
      </BrowserRouter>);
}
export default App;

const root = createRoot(document.getElementById('sample'));
root.render(<App />);