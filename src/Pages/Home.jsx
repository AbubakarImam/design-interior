import Header from "../Components/Header"
import Intro from "../Components/Intro"
import { HiArrowRight } from "react-icons/hi"

const Home = () => {
    return (
        <div>
            <Intro />
            <div className="flex justify-center items-start space-x-[52px] mt-20 max-w-4xl mx-auto">
                <div className="flex-col">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] text-center">Project Plan</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex-col">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] text-center">Interior Work</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] text-center">Realization</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
            </div>
        </div>
    )
}

export default Home