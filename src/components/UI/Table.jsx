import React from "react";
const Table = ({ task }) => {
//   const taskCtx = useContext(TaskContext);

//   var date = new Date(taskCtx.);
console.log(typeof(task.startedTime));
  let dateString = task.startedTime
    let date = new Date();
    console.log(date);
    console.log(dateString);
    let date2 = date.setDate(dateString)
    console.log(date2);
    let test = new Date()
    console.log(test.toLocaleTimeString());
    let pop = Math.floor(test/1000);
    console.log(Date(pop));
  //   String.prototype.toHHMMSS = function () {
  //     var sec_num = parseInt(this, 10); // don't forget the second param
  //     var hours   = Math.floor(sec_num / 3600);
  //     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  //     var seconds = sec_num - (hours * 3600) - (minutes * 60);
  
  //     if (hours   < 10) {hours   = "0"+hours;}
  //     if (minutes < 10) {minutes = "0"+minutes;}
  //     if (seconds < 10) {seconds = "0"+seconds;}
  //     return hours+':'+minutes+':'+seconds;
  // }
  // let sape = task.timerTime.toString().toHHMMSS()
  const sum = (a, b) => {
    return a + b
  }

  function timeToMins(time) {
    var b = time.split(':');
    return b[0]*60 + +b[1];
  }
  
  // Convert minutes to a time in format hh:mm
  // Returned value is in range 00  to 24 hrs
  function timeFromMins(mins) {
    function z(n){return (n<10? '0':'') + n;}
    var h = (mins/60 |0) % 24;
    var m = mins % 60;
    return z(h) + ':' + z(m);
  }
  
  // Add two times in hh:mm format
  function addTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) + timeToMins(t1));
  }
  let rew = test.toLocaleTimeString("it-IT")
  console.log(addTimes(dateString, rew));

  return (
    <tbody>
      <tr className="text-center">
        <td>{task.task}</td>
        <td>{task.startedTime}</td>
        <td>{task.endTime}</td>
        <td>{task.timerTime}seconds</td>
      </tr>
    </tbody>
  );
};

export default Table;
