import bannerBackground from "../assets/banner.svg"
const Expertice=()=>{
    return (
        <>
            <div className="expertise-container ">
                <h1 className="text-4xl font-semibold underline text-center">My Expertise</h1>

                <div className="Box-Container mt-5 p-10 flex"
                style={{backgroundImage:`url(${bannerBackground})`,backgroundSize:"cover"}}>
                    <div className="flex justify-center">
                        {/* text-container */}
                        <div className="w-2/3 text-left text-white">
                        <h1 className="font-semibold text-3xl">I love these Technologies</h1>
                        <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, 
                         Facere odio quas libero consequuntur.
                         Ducimus, ad! Voluptatum reiciendis aperiam alias iusto.</p><br />
                         <a href="contact" className="px-4  py-2 mt-5 bg-orange-600 text-white rounded-full font-bold">Hire Me</a>
                        
                        </div>
                    </div>
                    <div className="w-2/3 justify-center">
                        {/* skills-container */}
                        <div className="flex space-x-3   flex-wrap ">
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">Advance Java</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">JavaScript</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">SQL</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">Core Java</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">React</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">HTML CSS</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">Spring framework</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">SpringBoot</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">JavaScript</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">SQL</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">React</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">Spring framework</p>
                        <p className="bg-gray-200 px-3 mt-3 hover:bg-orange-600 hover:text-white cursor-pointer py-2 rounded-full w-fit">SpringBoot</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export  default Expertice;