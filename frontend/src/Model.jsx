import Addtask from "./components/Addtask"
import React from 'react'

function Model({ model, setModel}) {
    return (
        <>
            
                <div className='fixed top-0 flex justify-center  items-center  left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full' >                  
                    <div className=" relative w-full max-w-2xl max-h-full">
                        <div className="relative  bg-white rounded-lg shadow p-4 ">
                            <Addtask model={model} setModel={setModel} />
                        </div>
                    </div>
                </div>
        

        </>
    )
}

export default Model


