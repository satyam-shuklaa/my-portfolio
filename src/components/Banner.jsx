import bannerImage from "../assets/myImage3.png"
import bannerBackground from "../assets/banner.svg"
import Typed from "typed.js"
import { useEffect, useRef } from "react"
const Banner =()=>{
    const el =useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Frontend Developer", "Java Developer", "Full Stack Developer", "React Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 100,
          loop:true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return(
        <>
            <div className="bannerMainDiv flex items-center " 
            style={{backgroundImage:`url(${bannerBackground})`,backgroundSize:"cover"}}>

                <div className=" w-full flex justify-center text-white">
                    {/* text */}
                    <div className="w-2/3 ms-10">
                        <h3 className="text-3xl font-semibold">Hi , I am </h3>
                        <h1 className="mt-3 text-5xl font-bold">Satyam Shukla</h1>
                        <h2 className="mt-3 text-2xl font-semibold">I am a <span className="text-bold underline" ref={el}></span></h2>
                        <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iusto qui tenetur 
                        debitis! Cum vel dignissimos debitis voluptatem quibusdam quasi minus earum doloribus obcaecati 
                        hic tempora possimus assumenda architecto adipisci.</p>
                        <div className="icons-container space-x-4 flex">
                        <a className="hover:bg-orange-500 h-10 w-10 rounded-full bg-gray-900 flex justify-center items-center">
                        <i class="fa-brands text-2xl  fa-facebook"></i>
                        </a>
                        <a className="hover:bg-orange-500 h-10 w-10 rounded-full bg-gray-900 flex justify-center items-center">
                        <i class="fa-brands text-2xl fa-instagram"></i>
                        </a>
                        <a className="hover:bg-orange-500 h-10 w-10 rounded-full bg-gray-900 flex justify-center items-center">
                        <i class="fa-brands text-2xl fa-linkedin"></i>
                        </a>
                        <a className="hover:bg-orange-500 h-10 w-10 rounded-full bg-gray-900 flex justify-center items-center">
                        <i class="fa-brands text-2xl fa-twitter"></i>
                        </a>
                        
                        
                        
                        
                        </div>
                        <br />
                        <a href="contact" className="px-4  py-2 mt-5 bg-orange-600 text-white rounded-full font-bold">Contect Me</a>
                    </div>
                </div>

                <div className="w-full flex justify-center ">
                    {/* image */}
                    <img className="rounded-full w-set shadow-lg my-2" src={bannerImage} alt="" />
                </div>

            </div>
        </>
    )
}
export default Banner;