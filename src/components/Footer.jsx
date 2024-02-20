const Footer=()=>{
    return (
        <>
            <div className="bg-gray-200 flex justify-between px-32 py-4">
                <div>
                    <p> ©2024 Satyam Shukla <span> All rights reserved.</span> </p>
                </div>
                <div className="flex space-x-4">
                    <a href="About" className="hover:underline">About</a>
                    <a href="Privacy Policy" className="hover:underline">Privacy Policy</a>
                    <a href="Licensing" className="hover:underline">Licensing</a>
                    <a href="Contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </>
    )
}

export  default Footer;