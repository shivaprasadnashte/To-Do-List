import React from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'

function Addtask({ model, setModel }) {
  const [task, setTask] = React.useState('')
  const [dscreption, setDscreption] = React.useState('')
  const submit = () => {
    console.log(task, dscreption)
  }

  const addTask = () => {
    axios.post('http://localhost:5000/add', {
      title: task,
      description: dscreption
    })
      .then(function (response) {
        setModel(false)
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <>

      <div className='  md:p-10 p-2 flex flex-col gap-5  border-2 border-gray-300 bg-yellow-200'>
        <div className=' w-full flex justify-end'
          onClick={() => {
            setModel(false)
          }}>
          <RxCross2 className=' text-2xl' />
        </div>
        <div className=' flex flex-col'>
          <div className=' text-xl font-bold'>
            <label > Enter Task</label>
          </div>
          <div className=' w-full border-2 border-gray-200'>
            <input
              type="text"
              className=' w-full p-2  md:placeholder:text-lg'
              placeholder='Enter Your Task ...'
              onChange={(e) => {
                setTask(e.target.value)
              }}
              value={task}
            />
          </div>
        </div>
        <div className=' flex flex-col'>
          <div className=' text-xl font-bold'>
            <label > Add Dscription</label>
          </div>
          <div className=' w-full border-2  bg-white border-gray-200'>

            <textarea
              cols="30"
              rows="5"
              className=' w-full p-2 text-lg md:placeholder:text-2xl'
              placeholder=' Enter your dscreption ...'
              onChange={(e) => {
                setDscreption(e.target.value)
              }}
              value={dscreption}></textarea>
          </div>
        </div>
        <div className=' w-full flex justify-center'
          onClick={() => {
            addTask()
            document.querySelector('.fixed').classList.add('hidden')
          }}  >
          <button className=' bg-black text-white font-bold py-2 px-3 rounded-lg'>ADD Task</button>
        </div>
      </div>
      \
    </>
  )
}

export default Addtask