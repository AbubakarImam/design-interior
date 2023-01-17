import intro from "../../assets/intro.jpg"
import { HiArrowRight } from 'react-icons/hi'


const Intro = () => {
    return (
        <section className=''>
            <div className="relative">
                <div className="absolute bottom-[28%] left-[17%] flex-col items-right w-[27%]">
                    <div className="gap-[9px]">
                        <h1 className="text-h1 items-center font-serif">Let Your Home Be Unique</h1>
                        <p className="text-h5 font-jost">There are many variations of the passages of lorem
                            Ipsum fromavailable,variations of the passages.</p>
                    </div>
                    <button className="bg-primary2  py-[20px] shadow-md px-8 my-4 cursor-pointer 
                    rounded-2xl text-primary3 flex justify-center items-center
                    hover:bg-gray-500 transition duration-700 ease-in-out hover:shadow-lg">
                        Get Started
                        <HiArrowRight className="text-primary1 text-h5 ml-1" />

                    </button>
                </div>
                <div className="rounded-bl-[140px] overflow-hidden">
                    <img src={intro} alt="living room chair" />
                </div>
            </div>
        </section>
    )
}

export default Intro