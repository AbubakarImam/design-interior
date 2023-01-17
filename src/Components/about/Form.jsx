import { useState } from 'react'
import { HiArrowRight } from "react-icons/hi"


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        return
        if (!name && !email) {
            alert("Fill the form")
        }
        setName("");
        setEmail("");
        setText("");
    }
    return (
        <section className="my-20">
            <div className='py-14 rounded-3xl px-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center'>
                <div className="w-[70%] mx-auto">
                    <h1 className='font-serif text-h1 text-center'>
                        Creative project? Let's have
                        a productive talk.
                    </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-6">
                        <input className='outline-none pb-2 border-b-2 focus:'
                            type="text" placeholder='Name' value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input className='outline-none pb-2 border-b-2 focus:'
                            type="email" placeholder='Email' value={email}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <textarea name="feedback" rows='5' placeholder='Hello Iam Intrested in..'
                        className='outline-none w-full border-b-2 pt-8'
                        value={text} onChange={(e) => setName(e.target.value)}></textarea>

                    <button type='submit' className="bg-primary2 py-[20px]  shadow-md px-8 mx-auto mt-14 cursor-pointer
                     rounded-2xl text-primary3 flex justify-center items-center
                     hover:bg-gray-500 transition duration-700 ease-in-out hover:shadow-lg">
                        Get Started
                        <HiArrowRight className="text-primary1 text-h5 ml-1" />

                    </button>
                </form>
            </div>
        </section>
    )
}

export default Form