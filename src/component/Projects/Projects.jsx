import React from 'react'
import Data from './data'
import Card from './Card'

const Projects = () => {
  return (
    <section className="relative" id="Projects">
      <div className='container mx-auto'>
        <div className='my-12 text-center'>
          <h4 className='text-teal-400 font-extrabold text-2xl text-center'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h1 className='py-4 text-xl font-medium'>My Portfolio</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-9'>
          {Data.map((value, index) => {
            return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects