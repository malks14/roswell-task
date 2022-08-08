import "./App.css";
import TableResultPage from "./pages/TableResult/TableResultPage";
import TableTimerPage from "./pages/TableTimer/TableTimerPage";
import TaskProvider from "./store/TaskProvider";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <div className='w-full flex flex-col items-center'>
          <h1 className="text-3xl font-bold underline">Roswell Task - Timer</h1>
          <TableTimerPage />
          <TableResultPage />
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
