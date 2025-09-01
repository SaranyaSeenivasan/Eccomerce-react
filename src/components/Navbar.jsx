import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
const styleSheet={
    diStyle:{
        backgroundColor:" #0769ccff  ",
        padding:"2px",
        textAlign:"right",
        width:"100% auto"
    },
    listStyle:{
        display:"inline-block",
        marginRight:"50px",
        textDecoration:"none",
        fontWeight:"bold",   
    },
    linkStyle:{
        textDecoration:"none",
        color:"white",
         fontSize:"22px",
    },
    hStyle:{
        fontSize:"30px",
        color:"yellow",
        fontWeight:"bold",
        display:"inline-block",
        marginRight:"650px",
    
    },
    

    }



function Navbar(){
    return(
        <div >
            
            <div style={styleSheet.diStyle}>
        
            <ul>
                
                <li style={styleSheet.hStyle} ><img src={logo} alt='logo' style={{height:"50p",width:"50px"}}/> Zayla</li>
                <li style={styleSheet.listStyle}><Link to='/home' style={styleSheet.linkStyle} >Home</Link></li>
                <li style={styleSheet.listStyle}><Link to='/about' style={styleSheet.linkStyle}>About</Link></li> 
                <li style={styleSheet.listStyle}><Link to='/contact' style={styleSheet.linkStyle}>Contact</Link></li> 
                <li style={styleSheet.listStyle}><Link to='/setting' style={styleSheet.linkStyle}>Settings</Link></li> 
                
           
            </ul>
            </div>
            </div>
        
    )
}
export default Navbar