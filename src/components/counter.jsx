import React, {useState} from "react";

// создаем компонент
const Counter =()=> {
    // содержание useState может быть любим(numbers,object,array...any)
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

    // можем использовать переменные
    // const x = <h1>empty</h1>;

    const formatCount = () => {
        return count === 0 ? "empty" : count;
    }

    // создаем компонент бутстрап классов
    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += count === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    //обраюотчики событий
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    }

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);
    }

    const handleTagChange = () => {
        setTags(["tag4", "tag5"])
    }

    return (
        // <React.Fragment></React.Fragment> можно сократить оставив тег пустым
        <>
            <ul>
                {tags.map((tag) => (
                    <li key={tag}
                        className="btn btn-primary btn-sm m-2"
                        onClick={handleTagChange}>
                        {tag}
                    </li>
                ))}
            </ul>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}>
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}>
                -
            </button>
        </>
    );
};
// экспортируем компонент
export default Counter;