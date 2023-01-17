import img1 from "./assets/article1.png"
import img2 from "./assets/article4.png"
import img3 from "./assets/article3.png"
import { FaChevronRight } from 'react-icons/fa'

const Articles = () => {
    return (
        <section className='my-20'>
            <div className='flex flex-col'>
                <div className='gap-5 px-40 flex flex-col text-center justify-center'>
                    <h1 className='text-h1 font-serif'>Articles & News</h1>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the of readable content of a
                        page when lookings at its layouts the points of using.
                    </p>
                </div>
                <div className='flex flex-col gap-20 mt-14'>
                    <div className="flex gap-8">
                        <div className="border-[#E7E7E7] shadow-lg p-4 bg-white rounded-3xl">
                            <div className="overflow-hidden rounded-t-3xl">
                                <img src={img1} alt="" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">
                                        Let’s Get Solution For Building Construction Work
                                    </h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] text-primary2 font-jost">25 December,2022 </p>
                                    <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#E7E7E7] shadow-lg p-4 bg-primary3 rounded-3xl'>
                            <div className="overflow-hidden rounded-t-3xl">
                                <img src={img2} alt="" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">
                                        Low Cost Latest Invented Interior Designing Ideas.
                                    </h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] text-primary2 font-jost">25 December,2022 </p>
                                    <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#E7E7E7] shadow-lg p-4 bg-white rounded-3xl'>
                            <div className="overflow-hidden rounded-t-3xl">
                                <img src={img3} alt="" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <div>
                                    <h2 className="text-h3 font-serif">
                                        Best For Any Office & Business Interior Solution
                                    </h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] text-primary2 font-jost">25 December,2022 </p>
                                    <div className="rounded-full bg-primary3 p-4"><FaChevronRight /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles