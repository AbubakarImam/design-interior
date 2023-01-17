import { HiArrowRight } from "react-icons/hi"
import { IoCallOutline } from "react-icons/io5"
import photo2 from "../assets/article2.jpg"

const About = () => {
    return (
        <section className="my-24">
            <article className="flex justify-center space-x-8">
                <div className="my-10 w-[472px] ml-0 mr-10">
                    <h1 className="text-h2 text-primary2 font-serif">We Create The Art Of Stylish Living Stylishly</h1>
                    <p className="text-[16px] text-justify font-jost">It is a long established fact that a reader will be distracted by the of readable content of a page
                        when lookings at its layouts the points of using that it has a more-or-less normal.
                    </p>
                    <div className="mt-10">
                        <div className="flex gap-3">
                            <button className="bg-primary3 p-8 rounded-full">
                                <IoCallOutline className="text-h3 text-primary1" />
                            </button>
                            <div>
                                <p className="font-jost text-h3 font-bold">012345678</p>
                                <p className="font-jost text-h4">Call Us Anytime</p>
                            </div>
                        </div>
                        <button className="bg-primary2 py-[20px] shadow-md px-8 my-8 cursor-pointer
                         rounded-2xl text-primary3 flex justify-center items-center
                         hover:bg-gray-500 transition duration-150 ease-in-out hover:shadow-lg">
                            Get Started
                            <HiArrowRight className="text-primary1 text-h5 ml-1" />

                        </button>
                    </div>
                </div>
                <div className="rounded-bl-[123px] rounded-tr-[326px] overflow-hidden">
                    <img className="w-full h-full" src={photo2} alt="kitchen stools" />
                </div>
            </article>
        </section>
    )
}

export default About