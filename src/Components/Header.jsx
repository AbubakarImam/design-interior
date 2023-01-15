import { CiSearch } from "react-icons/ci"
import logo from '../assets/Logo.svg'

const Header = () => {
    return (
        <div className='sticky top-0 z-50'>
            <header className='flex justify-between items-center py-5 my-6 px-3 max-w-4xl mx-auto'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className=" flex gap-8 items-center">
                    <ul className='flex space-x-8'>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Services</li>
                        <li>Project</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <CiSearch className="font-sm cursor-pointer" />
                </div>
            </header>
        </div>
    )
}

export default Header