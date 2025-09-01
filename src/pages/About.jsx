import Aboutdashboard from "../components/aboutdashborad"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Aboutdashboard/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default About