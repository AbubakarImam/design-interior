import intro from "../assets/intro.jpg"
import { HiArrowRight } from 'react-icons/hi'

const Intro = () => {
    return (
        <section className=''>
            <div className="max-w-6xl mx-auto relative">
                <div className="absolute top-[27%] left-[17%] flex-col items-right w-[36%]">
                    <div className="gap-[9px]">
                        <h1 className="text-[55px] leading-[125%] items-center font-serif">Let Your Home Be Unique</h1>
                        <p className="text-h6">There are many variations of the passages of lorem
                            Ipsum fromavailable,variations of the passages.</p>
                    </div>
                    <button className="bg-primary2 py-[26px] shadow-md px-8 my-4 rounded-2xl text-primary3 flex justify-center items-center">
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