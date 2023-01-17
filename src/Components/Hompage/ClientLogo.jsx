import logo1 from "./assets/01.svg"
import logo2 from "./assets/02.svg"
import logo3 from "./assets/03.svg"
import logo4 from "./assets/04.svg"
import logo5 from "./assets/05.svg"

const ClientLogo = () => {
    return (
        <section className="my-20 mx-8 flex justify-center p-6">
            <div className='flex space-between items-center space-x-14'>
                <div className=""><img className="h-24 w-24" src={logo1} alt="logo1" /></div>
                <div><img className="h-24 w-24" src={logo2} alt="logo2" /></div>
                <div><img className="h-24 w-24" src={logo3} alt="logo3" /></div>
                <div><img className="h-24 w-24" src={logo4} alt="logo4" /></div>
                <div><img className="h-24 w-24" src={logo5} alt="logo5" /></div>
            </div>
        </section>
    )
}

export default ClientLogo