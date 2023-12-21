import react from "react"
import { GoArrowRight } from "react-icons/go";
function home() {
    return (
        <div className="home">
            <div className="home2">
            <h1>NexaCable Technologies</h1>
            <p1>We provide commercial network and security systems installation for large and small businesses or new residential constructions </p1>
            </div>
            <div>
            <button className="quote"> Request a Quote <GoArrowRight className="arrow" /></button>

            </div>

         

            <div className="service">
            <p> Quick service Request</p>
             <h2> Send Inspection Request </h2>
                <form>
               
                <div class="form-row">
            
                    <div class="form-group col-md-6">
                        
                        <input type="First Name" class="form-control" id="inputEmail4" placeholder="Full Name"className="service-name" />
                    </div>
                    <div class="form-group col-md-6" >
                        
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Email" className="service-email"/>
                    </div>
             

                 
                 
                </div>
              
                <button type="submit" class="btn btn-primary" className='requestbtn'>Sign in</button>
            </form>
            </div>
            





            </div>




    )
}

export default home;

