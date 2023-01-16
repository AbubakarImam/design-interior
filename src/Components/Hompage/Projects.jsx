import project1 from "./project.png"
import project2 from "./project2.png"
import project3 from "./project3.png"
import project4 from "./project4.png"
import { FaChevronRight } from 'react-icons/fa'
const Projects = () => {
    return (
        <section className='my-20'>
            <div className='flex flex-col'>
                <div className='gap-5 px-40 flex flex-col text-center justify-center'>
                    <h1 className='text-h1 font-serif'>Follow Our Projects</h1>
                    <p>
                        It is a long established fact that a reader
                        will be distracted by the of readable content
                        of page  lookings at its layouts  points.
                    </p>
                </div>
                <div className='flex flex-col gap-20 mt-14'>
                    <div className="flex gap-20">
                        <div className="">
                            <div className="overflow-hidden rounded-tr-[7rem]">
                                <img src={project1} alt="" />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">Modern Kitchan</h2>
                                    <p className="text-h4 font-serif">Decor / Artchitecture</p>
                                </div>
                                <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                            </div>
                        </div>
                        <div>
                            <div className="overflow-hidden rounded-tl-[7rem]">
                                <img src={project2} alt="" />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">Modern Kitchan</h2>
                                    <p className="text-h4 font-serif">Decor / Artchitecture</p>
                                </div>
                                <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div className="">
                            <div className="overflow-hidden rounded-br-[7rem]">
                                <img src={project3} alt="" />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">Modern Kitchan</h2>
                                    <p className="text-h4 font-serif">Decor / Artchitecture</p>
                                </div>
                                <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                            </div>
                        </div>
                        <div className="">
                            <div className="overflow-hidden rounded-bl-[7rem]">
                                <img src={project4} alt="" />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">Modern Kitchan</h2>
                                    <p className="text-h4 font-serif">Decor / Artchitecture</p>
                                </div>
                                <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects