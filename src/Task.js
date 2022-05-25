import './App.css';

let apples = 5;


const Task = () => {
    return (
        <div className="App">

                <p>
                    Edit <code>src/App.js</code> and save to reload.

                </p>
            <p>{'Количество ' + (apples + 2)}</p>
        </div>
    );

}

export default Task;
