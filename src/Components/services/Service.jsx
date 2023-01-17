import { HiArrowRight } from "react-icons/hi"

const Service = () => {
    return (
        <section className="flex flex-col max-w-4xl mx-auto gap-10 mt-20">
            <article className="flex justify-center items-start space-x-[52px]">
                <div className="flex-col py-16 px-6">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">Project Plan</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex-col py-16 px-6">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">Interior Work</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex flex-col py-16 px-6 justify-center">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">Retail Design</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
            </article>
            <article className="flex justify-center items-start space-x-[52px]">
                <div className="flex-col py-16 px-6">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">2d/3d Art Work</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex-col bg-primary3 rounded-2xl py-16 px-6">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">Interior Work</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
                <div className="flex flex-col py-10 px-6 justify-center">
                    <h3 className="text-h3 text-primary2 leading-[31.25px] font-serif text-center">Decoration Work</h3>
                    <p className="text-xs text-center">There are many variations of the passages of lorem Ipsum from
                        available, majority.</p>
                    <a className="mt-8 flex justify-center">Read more <HiArrowRight className="text-primary1 text-h5 ml-1" /> </a>
                </div>
            </article>
        </section>
    )
}

export default Service