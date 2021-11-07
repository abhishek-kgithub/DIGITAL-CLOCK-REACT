import React,{useState} from 'react'
import Covid from './components/Covid';


const App = () => {
  let time = new Date().toLocalTimestring();
  const [cTime, setcTime] = useState(time);
   const UpdateTime = () => {
     time= new Date().toLocalTimestring();
      setcTime(time);
   };
   setInterval(UpdateTime,1000);

  return(
  <>
  <h1>{cTime}</h1>
  </>

  );
};

export default App;  
