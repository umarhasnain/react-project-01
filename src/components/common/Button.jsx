import React from 'react'

const Button = ({data}) => {
  return (
    <div>
      <button className='w-[110px] h-[35px] bg-orange-600 rounded-lg text-white'>{data}</button>
    </div>
  )
}

export default Button
