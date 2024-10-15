import React from 'react'

type propType ={
  text: String,
  dark?: Boolean
}

const Button = (props: propType) => {
  const {text, dark} = props
  return (
    <button className={`rounded-full duration-200 hover:opacity-60 border-solid 
     border-purple-800 overflow-hidden
      ` + (dark ? 'text-white bg-purple-700' : 'text-purple-700 bg-white')}>
      <p className='font-semibold text-lg px-10 sm:px-6 whitespace-nowrap py-3'>

        {text}
      </p>
    </button>
  )
}

export default Button
