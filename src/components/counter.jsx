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
            <span>{formatCount()}</span>
            <button>+</button>
        </>
    );
};
// экспортируем компонент
export default Counter;