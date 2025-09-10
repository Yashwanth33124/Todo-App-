import React, { useEffect, useState } from "react";
import './style.css';
import TodoItem  from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

const App = () => {
  const [loading, setloading] = useState(false);
  const [todolist, settodolist] = useState([]);
  const [error, seterror] = useState(null);
  const [tododetails,settododetails] = useState(null)
  const [opendailog,setopendailog] = useState(false)

  async function FetchData() {
    try {
      setloading(true);
      let response = await fetch("https://dummyjson.com/todos");
      let Data = await response.json();
      console.log(Data);

      if (Data?.todos && Data?.todos?.length > 0) {
        settodolist(Data.todos);
        seterror(null);
      } else {
        settodolist([]);
        seterror("No todos found");
      }
    } catch (e) {
      console.log(e);
      seterror("Some Error occurred");
    } finally {
      setloading(false);
    }
  }

  async function FetchDetails(gettodos) {
    console.log(gettodos)

    try{
      let apiResponse = await fetch(`https://dummyjson.com/todos/${gettodos}`)
      let data = await apiResponse.json()
      console.log(data)
      if(data) {
        settododetails(data)
        setopendailog(true)
      } else {
        settododetails(null)
        setopendailog(false)
      }
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchData();
  }, []);


  if(loading) return <Skeleton variant="rectangle"   width={650}   height={650}/>
  return (
    <div className="main">
      <h1 className="headertitle">Simple Todo-App using Material UI</h1>

      <div className="listtodo">
        {
          todolist && todolist.length > 0 ?
          todolist.map(todoItem => <TodoItem FetchDetails = {FetchDetails} todo={todoItem}/>) : null
        }
      </div>
         <TodoDetails 
        opendailog={opendailog}
        tododetails={tododetails}
        setopendailog={setopendailog}
        settodolist={settodolist}
        />
    </div>
    
  );
};

export default App;
