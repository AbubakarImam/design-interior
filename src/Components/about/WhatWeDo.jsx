import { HiArrowRight } from "react-icons/hi"
import image from "./Photo 11.jpg"
import image1 from "./Photo1.jpg"

const WhatWeDo = () => {
    return (
        <section>
            <article className="flex flex-col max-w-4xl mx-auto gap-10">
                <div className="flex justify-between my-6 px-1 gap-8">
                    <div className='text-left flex flex-col w-[50%] items-start'>
                        <h1 className="text-h2 font-serif">What We Do</h1>
                        <p className="text-h4 font-jost">
                            It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.
                        </p>
                        <button className="bg-primary2 py-[20px] shadow-md px-8 my-8 cursor-pointer rounded-2xl text-primary3 flex justify-center items-center">
                            Get Started
                            <HiArrowRight className="text-primary1 text-h5 ml-1" />

                        </button>
                    </div>
                    <div className="rounded-[70px] overflow-hidden"><img className="h-full w-full" src={image} alt="old" /></div>
                </div>
                <div className="flex flex-row-reverse my-6 justify-between px-1 gap-8">
                    <div className='text-justify flex flex-col w-[50%] items-start'>
                        <h1 className="text-h2 font-serif">The End Result</h1>
                        <p className="text-h4 font-jost">
                            It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.
                        </p>
                        <button className="bg-primary2 py-[20px] shadow-md px-8 my-8 cursor-pointer rounded-2xl text-primary3 flex justify-center items-center">
                            Get Started
                            <HiArrowRight className="text-primary1 text-h5 ml-1" />

                        </button>
                    </div>
                    <div className="rounded-[70px] overflow-hidden"><img className="h-full w-full" src={image1} alt="old" /></div>
                </div>
            </article>
        </section>
    )
}

export default WhatWeDo