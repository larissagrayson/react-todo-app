import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// component file
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <TodoContainer/>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
);