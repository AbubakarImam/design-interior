import Intro from "./Intro"
import Services from "./ServicesHome"
import About from "./About.Home"
import Testimonials from "./Testimonials"
import ClientLogo from "./ClientLogo"
import Projects from "./Projects"
import Counter from "./Counter"
import Articles from "./Articles"
import Contact from "./Contact"

const Home = () => {
    return (
        <div>
            <Intro />
            <div className="max-w-4xl mx-auto">
                <Services />
                <About />
                <Testimonials />
                <ClientLogo />
                <Projects />
            </div>
            <Counter />
            <div className="max-w-4xl mx-auto">
                <Articles />
                <Contact />
            </div>
        </div>
    )
}

export default Home