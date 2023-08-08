import React from 'react'

function Menu({image,price,title,desc}) {
  return (
    <article className='my-10 h-fit w-full sm:w-11/12 rounded-lg bg-white pb-4'>
      <img className='w-full h-64 rounded-t-lg' src={image} alt="" />
      <div className='flex justify-between items-center my-5 mx-3'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className=' bg-orange-400 text-slate-50 px-3 rounded-sm'>${price}</p>
      </div>
      <p className='mx-3'>{desc}</p>
    </article>
  )
}

export default Menu
