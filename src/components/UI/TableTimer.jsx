import React, {useState, useRef, useEffect, useContext} from 'react'
import styles from "./TableTimer.module.css";
import TaskContext from '../../store/task-context';

const TableTimer = () => {

    const taskCtx = useContext(TaskContext);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [disableBtnStart, setDisableBtnStart] = useState(false);
    //more convenient with useRef as when the user types, with useEffect and useState, the seconds would be lost as it re renders each time
    const [descriptionData, setDescriptionData] = useState({
        task: "",
        startedTime: 0,
    });

    const renders = useRef(0) //value persists, it stays the same between renders

    const timerId = useRef(0);

    const handleChange = (event) => {

        const target = event.target;
        const newTaskValue = target.value;
        const nameOfField = target.name;
  

        setDescriptionData((prevState) => {
            const newTaskObject = {
                ...prevState
            }

            newTaskObject[nameOfField] = newTaskValue;

            return newTaskObject;
        });
        renders.current++;
        
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(prevState => prevState + 1);

            if(renders.current === 59) {
                setMinutes(minutes+1);
                setSeconds(0)
            }
        }, 1000);//1000 means it changes every 1 second
        setDisableBtnStart(true)

    }

    const pauseTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
        setDisableBtnStart(false)
    }

    const resetTimer = () => {
        pauseTimer();
        if(seconds || minutes) {
            setSeconds(0);
            setMinutes(0)
            renders.current++;
        }
        setDisableBtnStart(false)
    };

    let localTime = new Date();
    let localeTimeString = localTime.toLocaleTimeString("it-IT");
    const submitHanlder = event => {
        event.preventDefault();
        taskCtx.addTask({
            task: descriptionData.task,//gets task description
            startedTime: descriptionData.startedTime,//captures timer time started
            timerTime: renders.current,//how long the timer lasts
            endTime: localeTimeString//what time timer stop
        })
        console.log(renders.current);
        renders.current = 0;
    };

 

    useEffect(() => {
        setDescriptionData((prevState) => {
            const time = {...prevState};
            time.startedTime = localeTimeString;
            return time;
        })
    }, [])

    return (
        <div className={styles.tableTimerCtn}>

            <form className="rounded px-8 pt-6 mb-4" onSubmit={submitHanlder}>
            <div className={styles.tableNumber}>
                <p>Started at: <span>{descriptionData.startedTime}</span></p>
                <p>Timer: <span>{minutes<10 ? "0"+minutes : minutes}:{seconds<10 ? "0"+seconds : seconds}</span></p>
            </div>
                <div className={styles.formInputCtn}>
                    <label htmlFor="task">
                        Task Description
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="task"
                      type="text" 
                      name='task'
                      placeholder="Went for a run"
                      onChange={handleChange}
                      value={descriptionData.task}
                      
                    />
                </div>

                <div className="flex items-center justify-between mt-3">
                    <button 
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="button"
                     onClick={startTimer}
                     disabled={disableBtnStart ? true : false}
                    >
                        Start
                    </button>
                    <div>
                        <button 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
                        type="submit"
                        onClick={resetTimer}
                        disabled={!descriptionData.task}
                        >
                            Stop
                        </button>
                        <button 
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1"
                        type="button"
                        onClick={pauseTimer}
                        >
                            Pause
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TableTimer