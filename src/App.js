import React,{useState} from "react";

const App = () => {
const [bird,setBird] = useState({});
const [birds,setBirds] = useState([]);

const add = () => {
  setBirds([...birds,bird]);
}

const like = (id)=>{
   var myObj = birds[id];
  //  console.log("Arr before like",myObj)
   myObj.like += 1;
  //  console.log("Arr after like",myObj)
   var newArr = birds.map((item,i)=>i==id?myObj:item)
   setBirds(newArr); 
}

return(
  <div>
     <input type="text" onChange={e=>setBird({panchi:e.target.value,like:0})}/>
     <button onClick={add}>Add</button>
     <ul>
        {
          birds.map((value,index)=>(
            <li key={index}>
              <span>{value.panchi}</span>
              <button onClick={()=>like(index)}>{value.like}</button>
            </li>
          ))
        }
     </ul>
  </div>
)
}

export default App