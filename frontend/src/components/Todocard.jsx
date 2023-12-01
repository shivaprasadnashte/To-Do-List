import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Todocard() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const getTodos = async () => {
    setLoading(true);
    try {
      let response = await fetch('http://localhost:5000/todos');
      let data = await response.json();
      setTodos(data);
    }
    catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    getTodos();

  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`, {

    })
      .then(function (response) {
        console.log(response);
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const updateStatus = (id) => {
    axios.put(`http://localhost:5000/todos/${id}`, {
      status: true
    })
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
      {todos[0] ?
        todos.map((todo) => {
          return (
            <div className={todo.status ? "bg-green-400" : "bg-white"} key={todo._id}>
              <div className='  w-full   p-4 border-2 border-gray-400 rounded-md shadow-xl'>
                <div>
                  <h1 className=' text-xl font-bold'>{todo.title}</h1>
                </div>
                <div className=' text-sm xl:text-lg py-3'>
                  {todo.description}
                </div>
                <div className=' w-full flex justify-end md:gap-5 gap-2'>
                  <button className=' py-1 px-3 rounded-lg hover:bg-red-600 font-bold bg-red-400' onClick={() => {
                    deleteTask(todo._id)
                  }}>Delete</button>
                  {/* <button className=' py-1 px-3 rounded-lg hover:bg-yellow-500 font-bold bg-yellow-300'>Update</button> */}
                  <div className={todo.status ? "hidden" : "flex"}>
                    <button className=' py-1 px-3 rounded-lg hover:bg-green-600 font-bold bg-green-400' onClick={() => {
                      updateStatus(todo._id)
                    }}>Completed</button>
                  </div>

                </div>


              </div>
            </div>
          )
        }
        )
        : <div className=' text-2xl font-bold text-center'>No Task Found</div>
      }
    </>
  )
}

export default Todocard