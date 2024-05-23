import React from 'react'

function Button({text,onClick,outline}) {
  return (
    <div 
    onClick={() => onClick()}
    className={`hover:shadow-box-design text-center capitalize min-w-24 ${outline? 'bg-black text-white border-2 border-blue py-2 px-6 font-semibold cursor-pointer rounded-full hover:bg-blue hover:transition-all hover:duration-300' : 'bg-blue text-white px-6 py-2 transition-all border-blue ease-in duration-300 rounded-full cursor-pointer font-semibold'}`}>{text}</div>
  )
}

export default Button