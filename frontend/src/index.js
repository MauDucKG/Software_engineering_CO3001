import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorCustomField from './EditorCustomField';

function App() {
    
    return (<BrowserRouter>
        <Routes>
          <Route path={'login'} element={<div></div>} />
          <Route path={'/'} element={<EditorCustomField/>} />
        </Routes>
      </BrowserRouter>);
}
export default App;

const root = createRoot(document.getElementById('sample'));
root.render(<App />);