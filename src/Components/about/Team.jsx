import image1 from "./photo3.png"
import image2 from "./photo4.png"
import image3 from "./photo.png"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Team = () => {
    return (
        <section className="my-20 bg-primary3">
            <div className='py-14 rounded-3xl px-10 max-w-4xl mx-auto space-y-6 flex flex-col justify-center'>
                <div className="w-[70%] mx-auto">
                    <h1 className='font-serif text-h1 text-center'>
                        What the People Thinks
                        About Us
                    </h1>
                </div>
                <div className='flex justify-around space-x-6'>

                    <div className="bg-primary3 rounded-3xl overflow-hidden">
                        <img className="h-full w-full" src={image1} alt="girl pic" />
                    </div>

                    <div className="bg-primary3 rounded-3xl overflow-hidden">
                        <img className="h-full w-full" src={image2} alt="girl pic" />
                    </div>
                    <div className="flex flex-col justify-between text-center rounded-3xl bg-white p-4 pb-3 gap-3 items-center">
                        <div>
                            <p className="font-jost font-bold">Nattasha Julie</p>
                            <p className="font-jost">Design, Australia</p>
                        </div>
                        <div className="flex justify-between gap-4">
                            <FaFacebook className="text-h2" />
                            <FaTwitter className="text-h2" />
                            <FaLinkedinIn className="text-h2" />
                            <FaInstagram className="text-h2" />
                        </div>
                        <p>
                            +1 (378) 400-1234
                            julie@email.com
                        </p>
                    </div>
                    <div className="bg-primary3 rounded-3xl overflow-hidden">
                        <img className="h-full w-full" src={image3} alt="girl pic" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team