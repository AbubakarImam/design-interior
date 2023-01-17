import { HiArrowRight } from "react-icons/hi"

const Contact = () => {
    return (
        <section className='my-20'>
            <div className="bg-primary2 p-14 text-center rounded-[2.5rem] flex flex-col justify-center">
                <h1 className="text-h1 font-serif text-primary3">Wanna join the interno?</h1>
                <p className="text-h4 font-jost text-primary3">It is a long established fact  will be distracted.</p>
                <div className="p6 flex justify-center">
                    <span className="bg-primary1 py-[20px] px-4 drop-shadow-lg shadow-md my-4 cursor-pointer
                     rounded-2xl text-primary3 flex justify-center items-center
                     hover:bg-orange-300 transition duration-700 ease-in-out hover:shadow-lg">
                        Contact with Us
                        <HiArrowRight className="text-primary2  text-h5 ml-1" />

                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact