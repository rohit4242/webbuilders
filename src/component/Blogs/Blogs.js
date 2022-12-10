import React from "react";
import Card from "./Card"
import BlogApi from "./BlogsApi"
const Blogs = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className='text-center font-Poppins text-teal-500 pb-4'>
                        <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
                        <h1 className="font-Poppins text-teal-500 text-3xl font-thin py-4">My Blog</h1>
                    </div>

                    <div className="flex flex-wrap justify-center items-center ">
                        {BlogApi.map((value,index) =>{
                            return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} desc_one={value.desc_one} title_two={value.title_two}  desc_two={value.desc_two} title_three={value.title_three} desc_three={value.desc_three}/>
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blogs;