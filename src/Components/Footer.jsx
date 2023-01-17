import logo from "../assets/Logo.svg"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <footer className='mt-20 max-w-4xl mx-auto'>
                <div className="flex py-10 px-6 mx-auto gap-4 space-x-1">
                    <div className='flex flex-col space-y-0 gap-6 items-start mr-3 px-3'>
                        <div><img src={logo} alt="logo" className="h-8 cursor-pointer" onClick={() => navigate("/")} /></div>
                        <p className="text-h6 font-jost">It is a long established fact that a reader will be distracted lookings.</p>
                        <div className="flex justify-between gap-4">
                            <FaFacebook className="text-h2" />
                            <FaTwitter className="text-h2" />
                            <FaLinkedinIn className="text-h2" />
                            <FaInstagram className="text-h2" />
                        </div>
                    </div>
                    <div className="flex justify-around space-x-20">
                        <div className='flex flex-col space-y-2'>
                            <div><h1 className="text-h4 font-serif cursor-pointer" onClick={() => navigate("/pages")}>Pages</h1></div>
                            <div className="flex flex-col space-y-4">
                                <a className="cursor-pointer" onClick={() => navigate("/about")}>About</a>
                                <a className="cursor-pointer" onClick={() => navigate("/project")}>OurProjects</a>
                                <a className="cursor-pointer" onClick={() => navigate("/pages")}>OurTeam</a>
                                <a className="cursor-pointer" onClick={() => navigate("/contact")}>ContactUs</a>
                                <a className="cursor-pointer" onClick={() => navigate("/services")}>Services</a>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div><h1 className="text-h4 font-serif cursor-pointer" onClick={() => navigate("/services")}>Services</h1></div>
                            <div className="flex flex-col justify-center space-y-4">
                                <a href="/">Kitchan</a>
                                <a href="/">Living Area</a>
                                <a href="/">Bathroom</a>
                                <a href="/">DinningHall</a>
                                <a href="/">Bedroom</a>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div><h1 className="text-h4 font-serif cursor-pointer" onClick={() => navigate("/contact")}>Contact</h1></div>
                            <div className="flex flex-col justify-center text-left space-y-4">
                                <p>
                                    55 East Birchwood Ave.Brooklyn, New York 11201 </p>
                                <p>contact@interno.com</p>
                                <p>(123) 456 - 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-h4">Copyright &copy;,2023 Abubakar Imam</p>
            </footer>
        </div>
    )
}

export default Footer