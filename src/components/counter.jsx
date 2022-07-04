import React from "react";

// создаем компонент
const Counter =()=> {
    const count = 0;
    // можем использовать переменные
    // const x = <h1>empty</h1>;

    const formatCount = () => {
        return count === 0 ? "empty" : count;
    }
    return (
        // <React.Fragment></React.Fragment> можно сократить оставив тег пустым
        <>
            <span className="badge bg-primary m-2">{formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2">+</button>
        </>
    );
};
// экспортируем компонент
export default Counter;