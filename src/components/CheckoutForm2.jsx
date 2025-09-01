// import { useContext, useRef } from "react"
// import { MyContext } from "../App"

// function CheckoutForm2() {
//     const val = useContext(MyContext)
//     const nameref = useRef()
//     const mobileref = useRef()
//     const mailref = useRef()
//     const addref = useRef()

//     const onsubmit = ((e) => {
//         e.preventDefault()
//         val.setCheckdel((c) => [
//             ...c, {
//                 name: nameref.current.value,
//                 mobile: mobileref.current.value,
//                 email: mailref.current.value,
//                 address: addref.current.value,
//             }
//         ])
//         nameref.current.value = ""
//         mobileref.current.value = ""
//         mailref.current.value = ""
//         addref.current.value = ""

//     })
//     return (
//         <div>
//             <form>
//                 <label>Name</label><br></br>
//                 <input type="text" ref={nameref} /><br></br>

//                 <label>Mobile Number</label><br></br>
//                 <input type="text" ref={mobileref} /><br></br>

//                 <label>Email</label><br></br>
//                 <input type="text" ref={mailref} /><br></br>

//                 <label>Address</label><br></br>
//                 <input type="text" ref={addref} /><br></br>

//                 <button onClick={(e) => onsubmit(e)}>send messsage</button>


//             </form>

//         </div>
//     )
// }
// export default CheckoutForm2