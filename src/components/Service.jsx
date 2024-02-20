const Service=()=>{
    return (
        <>
            <div className="py-14">
                <h1 className="text-center font-bold underline text-4xl ">My Services</h1>

                <div className="service-Container space-x-4 flex mt-10">

                    <div className="cursor-pointer hover:bg-slate-100 bg-slate-200 firstService shadow-lg rounded-xl space-y-4 px-6 text-center p-6">
                        <i class="fa-brands fa-aws text-5xl"></i>
                        <h1 className="text-3xl">Web Designing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati! Ipsum 
                        dignissimos nihil enim corporis possimus ab porro iste voluptatem?</p><br />
                        <a href="contact" className="px-4  py-2 mt-5 bg-orange-600 text-white rounded-full font-bold">Check</a>
                    </div>
                    <div className="cursor-pointer hover:bg-slate-100  bg-slate-200 secondService shadow-lg rounded-xl space-y-4 px-6 text-center p-6">
                        <i class="fa-solid fa-mobile text-5xl"></i>
                    <h1 className="text-3xl">Backend Development</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati! Ipsum 
                        dignissimos nihil enim corporis possimus ab porro iste voluptatem?</p><br />
                        <a href="contact" className="px-4  py-2 mt-5 bg-orange-600 text-white rounded-full font-bold">Check</a>
                    </div>
                    <div className="cursor-pointer hover:bg-slate-100  bg-slate-200 thirdService shadow-lg rounded-xl space-y-4 px-6 text-center p-6">
                    <i class="fa-solid fa-server text-5xl"></i>
                    <h1 className="text-3xl">React Designing</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati! Ipsum 
                        dignissimos nihil enim corporis possimus ab porro iste voluptatem?</p><br />
                        <a href="contact" className="px-4  py-2 mt-5 bg-orange-600 text-white rounded-full font-bold">Check</a>
                    </div>

                </div>



            </div>
            
        </>
    )
}

export  default Service;