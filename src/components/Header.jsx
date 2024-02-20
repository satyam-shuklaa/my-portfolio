import { useState } from "react";
const Header = () =>{
    
    const [brandeName, setBrandeName] = useState("Satyam Shukla");  //state for mobile menu

     const [menuLinks , setMenuLinks] = useState([
        { 
            title : "Home", 
            link : "/home",
            id : 1,
        },
        { 
            title : "About", 
            link : "/about",
            id : 2,
        },
        { 
            title : "Skills", 
            link : "/skills",
            id : 3,
        },
        { 
            title : "Portfolio", 
            link : "/portfolio",
            id : 4,
        },
        { 
            title : "Contact", 
            link : "/contact",
            id : 1,
        },
        
    ])

    const [actionButton , setActionButton] =useState({
        title :"Hire Me ",
        link : "/hire-me"
    })
    
    return (
        <>
            <div className="mainDiv h-20 border flex justify-between items-center px-20 bg-gray-100">
                <div>
                    {/* Brande logo */}
                    <h1 className="text-2xl font-bold">{brandeName}</h1>
                </div>

                <div className="space-x-6">
                    {/* mainu */}
                    {menuLinks.map((link)=>(
                        <a key={link.id} href={link.link} className="hover:text-orange-600 text-1xl">{link.title}</a>
                    ))}

                    {/* <a href="/about" className="hover:text-orange-600 text-1xl">About</a>
                    <a href="/skills" className="hover:text-orange-600 text-1xl">Skills</a>
                    <a href="/home" className="hover:text-orange-600 text-1xl">Home</a>
                    <a href="/contact" className="hover:text-orange-600 text-1xl">Contact</a> */}
                </div>

                <div>
                    {/* button */}
                    <a href={actionButton.link} className="px-4 py-2 bg-orange-600 text-white rounded-full font-bold">{actionButton.title}</a> 
                </div>
            </div>
        </>
    )
};

export  default Header;