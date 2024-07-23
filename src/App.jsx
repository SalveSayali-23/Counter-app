import React,{useState} from "react";

const App = () => {

  const [count,setCount]=useState(0)
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h2>Count : {count}</h2>
          <div className="btn_div">
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
