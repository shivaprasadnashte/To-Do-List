import React from 'react'
function Navbar({ setModel, model }) {
    return (
        <>
            <div className=' mb-10 shadow-xl py-3 px-5 items-center flex justify-between'>
                <div >
                    <h1 className=' text-xl md:text-3xl font-bold'>
                        To-Do-List
                    </h1>
                </div>
                <div className=' items-center bg-gray-800 text-white font-bold md:py-2 md:px-4 py-1 px-3 rounded-lg'>
                    <button onClick={
                        () => {
                            setModel(true);
                        }}>
                        Add Task
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar