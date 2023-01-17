import React from 'react'
import Header from './Header'
import WhatWeDo from './WhatWeDo'
import Team from './Team'
import Form from './Form'

const About = () => {
    return (
        <div>
            <Header />
            <div className='my-20 max-w-4xl mx-auto relative p-20'>
                <div className="bracket">
                    <div className="flex flex-col relative align-middle">
                        <div className='text-center px-20'>
                            <h1 className='text-[85px] font-serif font-black'>“</h1>
                            <p className="italic font-serif font-bold"> I like an interior that defies labeling.
                                I don't really want someone to walk into a room and know that I did it</p>
                            <span className='text-jost text-primary2 pt-6 text-h5'>-BUNNY WILLIAMS</span>
                        </div>
                    </div>
                </div>
            </div>
            <WhatWeDo />
            <Team />
            <Form />
        </div>
    )
}

export default About