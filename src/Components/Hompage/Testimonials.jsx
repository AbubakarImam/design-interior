import img1 from "./assets/testimonial1.jpg"
import img2 from "./assets/testimonial2.jpg"
import img3 from "./assets/testimonial3.jpg"

const Testimonials = () => {
    return (
        <section className="my-20">
            <div className='bg-primary3 py-14 rounded-3xl px-10 space-y-6 flex flex-col justify-center'>
                <div className="w-[70%] mx-auto">
                    <h1 className='font-serif text-h1 text-center'>
                        What the People Thinks
                        About Us
                    </h1>
                </div>
                <div className='flex justify-around space-x-6'>
                    <div className='bg-white rounded-3xl space-y-4 p-4 pb-14
                    transform transition duration-700 hover:scale-110'>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary3 rounded-full overflow-hidden">
                                <img className="h-16 w-16" src={img1} alt="girl picture" />
                            </div>
                            <div>
                                <p className="font-jost font-bold">Nattasha Mith</p>
                                <p className="font-jost">Sydney, USA</p>
                            </div>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.
                        </p>
                    </div>
                    <div className='bg-white rounded-3xl space-y-4 p-4 pb-14
                    transform transition duration-700 hover:scale-110'>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary3 rounded-full overflow-hidden">
                                <img className="h-16 w-16" src={img2} alt="girl picture" />
                            </div>
                            <div>
                                <p className="font-jost font-bold">Raymond Galario</p>
                                <p className="font-jost">Sydney, Australia</p>
                            </div>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.
                        </p>
                    </div>
                    <div className='bg-white rounded-3xl space-y-4 p-4 pb-14
                    transform transition duration-700 hover:scale-110'>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary3 rounded-full overflow-hidden">
                                <img className="h-16 w-16" src={img3} alt="man picture" />
                            </div>
                            <div>
                                <p className="font-jost font-bold">Benny Roll</p>
                                <p className="font-jost"></p>
                            </div>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy
                            text of the typesetting industry.
                            Ipsum has been.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials