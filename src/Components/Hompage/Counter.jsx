import React from 'react'

const Counter = () => {
    return (
        <section className='my-20'>
            <div className='bg-primary3 p-20 flex justify-center gap-4'>
                <div className='border-r-2 border-primary1 p-14 text-center'>
                    <h1 className='text-[88px] font-serif text-primary1'>12</h1>
                    <p className='text-h5 font-jost text-primary2'>Years Of Experiance</p>
                </div>
                <div className='border-r-2 border-primary1 p-14 text-center'>
                    <h1 className='text-[88px] font-serif text-primary1'>85</h1>
                    <p className='text-h5 font-jost text-primary2'>Success Project</p>
                </div>
                <div className='border-r-2 border-primary1 p-14 text-center'>
                    <h1 className='text-[88px] font-serif text-primary1'>15</h1>
                    <p className='text-h5 font-jost text-primary2'>Active Project</p>
                </div>
                <div className='p-14 text-center'>
                    <h1 className='text-[88px] font-serif text-primary1'>95</h1>
                    <p className='text-h5 font-jost text-primary2'>Happy CUstomers</p>
                </div>

            </div>
        </section>
    )
}

export default Counter