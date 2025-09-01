function Aboutdashboard() {
    const styleSheet = {
        imgstyle: {
            width: "100%"
        },
        dstyle: {
            position: "absolute",
            top: "300px",
            left: "50px",
            padding: "20px"

        }
    }
    return (
        <div>
            <div>
                <img src='https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80'
                    style={{ width: "100%" }} alt='banner' />
            </div>
            <div style={styleSheet.dstyle}>
               <div>
                <h1 style={{ color: "white" }}>Welcome to ZAYLA!</h1>
                </div>
                <div style={{width:"700px",color:"#70AEC4", fontSize:"24px"}}>

                <p>Where we believe shopping should be simple, enjoyable, and tailored just for you.</p> 

                 <p>   Founded with a passion for connecting people to the products they love, we’re dedicated to making your online shopping experience smooth and satisfying.</p>

</div>



            </div>
        </div>

    )
}
export default Aboutdashboard