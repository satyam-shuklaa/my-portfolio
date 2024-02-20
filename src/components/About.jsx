import { useState } from "react";
import aboutImage from  "../assets/resizeImage.jpeg";
const About =()=>{
    const [data,setData] = useState({
        image:aboutImage,
        title:`Java and React Developer`,
        desc1 :`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores placeat, est velit 
        eligendi omnis fugit fuga possimus nam animi quia.`,
        desc2 :`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium enim nesciunt error numquam vero, 
        aperiam blanditiis temporibus repellendus ipsa harum quasi deleniti 
        dicta nam expedita quis explicabo 
       reprehenderit nobis labore quia sed eligendi quaerat? Hic!`,
       actionButton:{
        actionTitle:`Read More...`,
        actionLink:"/read More"
       },
    })
    return(
        <>
            <div className="main-container py-10 bg-gray-100 ">
                <h1 className="text-center text-3xl pb-10 font-bold underline">About Me</h1>
                
                <div className="flex justify-around items-start mt-5">
                    {/* image container */}
                    <div className="w-full flex justify-center"><img className="rounded-full" src={data.image} alt="" /></div>
                
                
                    <div className="w-full space-y-3 pr-24 justify-between">
                    {/* text container */}
                    <h1 className="text-4xl font-semibold ">{data.title}</h1>
                    <p className="py-5">{data.desc1}</p>
                    <p className="pb-8">{data.desc2}</p>
                    <a href={data.actionButton.actionLink} className="px-4 py-2 bg-orange-600 text-white rounded-full font-bold">{data.actionButton.actionTitle}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export  default About;