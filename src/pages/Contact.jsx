import Contactdashboard from "../components/Contactdashboard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Contact() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
          
            <div>
               <Contactdashboard/>
            </div>


            <div>
                <Footer/>
            </div>

        </div>
    )
}
export default Contact