import Dashboard from "../components/dashborad"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"


function Home() {
 
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Searchbar/>
      </div>
       
      <div>
        <Dashboard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default Home