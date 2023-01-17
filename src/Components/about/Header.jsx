import Image from "./photo header.png"

const Header = () => {
    return (
        <section>
            <div className="relative flex items-center">
                <div className="absolute bg-white text-center px-16 py-8 inset-x-[37%] bottom-0 rounded-t-3xl">
                    <h1 className="fonnt-serif text-h1">About Us</h1>
                    <p className="font-jost">Home / About</p>
                </div>
                <div className=''>
                    <img src={Image} alt="header" />
                </div>
            </div>
        </section>
    )
}

export default Header