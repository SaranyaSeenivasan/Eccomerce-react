import '../Style.css'
import Navbar from './Navbar.jsx'
function Ticketanimation(){
    return(
        <div>
          <Navbar/>
        <div className="order-container">
    

      
        <div className="success-animation">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="circle" cx="26" cy="26" r="25" fill="none" />
            <path className="check" fill="none" d="M14 27 l10 10 l20 -20" />
          </svg>
          <div className="order-message">Your order has been placed!</div>
        </div>
    </div>
    </div>
    )
}
export default Ticketanimation