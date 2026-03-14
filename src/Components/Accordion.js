import React, { useState } from 'react'

const Accordion = ({ data }) => {

    const [openSelectIndex, setOpenSelectIndex] = useState(0);
    const toggleSelect = (index) => {
        setOpenSelectIndex(index === openSelectIndex ? null : index);
        console.log(openSelectIndex)
    }

    return (
        <section className='bg-[#0f0715] min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden z-10'>
            <div className='container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8'>
                <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent text-white mb-6 border border-white border-opacity-25 rounded-full py-2 px-4 text-center">
                    <p class="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">UI Element</p>
                    </div>
                </div>

                <h1 className="text-5xl font-bold text-center mb-6">React Accordion</h1>

                <div className="overflow-hidden">
                    {data.map((section, index) => (
                        <div key={index} className={`mb-4 ${openSelectIndex === index ? 'border-0 border-white border-opacity-30 bg-gradient-to-b from-[#7a7adb] to-[#2c3e50] rounded-lg p-0 transition duration-400' : ''}`}>
                            <button
                                onClick={() => toggleSelect(index)}
                                className={`border border-opacity-30 py-5 px-7 text-white w-full text-left rounded-md focus:outline-none ${openSelectIndex === index ? ' text-white border border-transparent pb-0' : ' text-gray-700'
                                    } transition-all duration-300 ease-in-out font-bold`}
                            >
                                {section.title}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSelectIndex === index ? 'max-h-96' : 'max-h-0' }`}
                            >
                                {openSelectIndex === index && (
                                    <div className="py-5 px-7">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Accordion
