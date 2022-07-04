import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

 // импортируем компоненты
import Counter from "./components/counter";

// разделяем компоненты
const App =()=> {
    return <Counter />;
};



reactDom.render(<App />, document.getElementById('root'));

