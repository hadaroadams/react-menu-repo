import React, { useState } from 'react'
import Menu from './Menu'
import { data } from './data'
function Main() {
  const [menu,setMenu] = useState(data)

  const categ =(ctg)=>{
    const items = data.filter((item)=>{
        return item.category==ctg
    })
    setMenu(items)
  }
  return (
    <div className=' bg-slate-100 mt-0 p-10'>
      <header className='mx-auto w-fit mt-20'>
        <h1 className='text-4xl'>Our Menu</h1>
        <div className='mx-auto bg-amber-600 w-24 h-1 mt-3'></div>
      </header>
      <main>
        <section className='mx-auto w-fit mt-10'>
          <button onClick={()=>{setMenu(data)}}>All</button>
          <button onClick={()=>{categ('Breakfast')}}>Breakfast</button>
          <button onClick={()=>{categ('Lunch')}}>Lunch</button>
         <button onClick={()=>{categ('Shakes')}}>Shakes</button>
        </section>
        <section className='grid justify-center m-8 sm:grid-cols-2 sm:justify-between lg:grid-cols-3  '>
          {menu.map((item)=>{
            return <Menu image={item.image} desc={item.desc} price={item.price} title={item.title} key={item.id}/>
          })}
        </section>
      </main>
    </div>
  )
}

export default Main
