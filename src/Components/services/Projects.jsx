import project1 from "./photo1.jpg"
import project2 from "./photo2.jpg"
import project3 from "./photo3.jpg"
import project4 from "./photo4.jpg"
import icon1 from "./icon1.png"
import icon2 from "./icon12.png"
import icon3 from "./icon2.png"
import icon4 from "./icon4.png"
import { FaChevronRight } from 'react-icons/fa'
import { HiArrowRight } from "react-icons/hi"
import { IoCallOutline } from "react-icons/io5"
const Projects = () => {
    return (
        <section className='my-20'>
            <div className='flex flex-col bg-primary3 max-w-3xl mx-auto px-14 py-20 rounded-3xl'>
                <div className='gap-5 px-20 flex flex-col text-center justify-center'>
                    <h1 className='text-h1 font-serif'>How We Work</h1>
                    <p>
                        It is a long established fact that a reader
                        will be distracted by the of readable content
                        of page  lookings at its layouts  points.
                    </p>
                </div>
                <div className='flex flex-col gap-20 mt-14'>
                    <div className="flex space-x-8 items-center justify-between">
                        <div className="overflow-hidden rounded-bl-[278px] w-1/2 rounded-tr-[6rem]">
                            <img className="w-full h-full" src={project1} alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary3 ">
                                    <img src={icon1} alt="icon" />
                                </div>
                                <div>
                                    <h1 className="text-[120px] text-white font-serif">01</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-h2 text-primary2 font-serif">Concept & Details</h1>
                                <p className="text-[16px] text-justify font-jost">
                                    It is a long established fact  will be distracted.
                                    Lorem Ipsum is simply dummy from text of the
                                    and typesetting indufstry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse space-x-8 items-center justify-between">
                        <div className="overflow-hidden rounded-bl-[278px] w-1/2 rounded-tr-[6rem]">
                            <img src={project2} alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary3 ">
                                    <img src={icon2} alt="icon" />
                                </div>
                                <div>
                                    <h1 className="text-[120px] text-white font-serif">02</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-h2 text-primary2 font-serif">Idea for Work</h1>
                                <p className="text-[16px] text-justify font-jost">
                                    It is a long established fact  will be distracted.
                                    Lorem Ipsum is simply dummy from text of the
                                    and typesetting indufstry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-8 items-center justify-between">
                        <div className="overflow-hidden rounded-bl-[278px] w-1/2 rounded-tr-[6rem]">
                            <img src={project3} alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary3 ">
                                    <img src={icon3} alt="icon" />
                                </div>
                                <div>
                                    <h1 className="text-[120px] text-white font-serif">03</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-h2 text-primary2 font-serif">Design</h1>
                                <p className="text-[16px] text-justify font-jost">
                                    It is a long established fact  will be distracted.
                                    Lorem Ipsum is simply dummy from text of the
                                    and typesetting indufstry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse space-x-8 items-center justify-between">
                        <div className="overflow-hidden rounded-bl-[278px] w-1/2 rounded-tr-[6rem]">
                            <img src={project4} alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between">
                                <div className="bg-primary3 ">
                                    <img src={icon4} alt="icon" />
                                </div>
                                <div>
                                    <h1 className="text-[120px] text-white font-serif">04</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-h2 text-primary2 font-serif">Perfection</h1>
                                <p className="text-[16px] text-justify font-jost">
                                    It is a long established fact  will be distracted.
                                    Lorem Ipsum is simply dummy from text of the
                                    and typesetting indufstry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects