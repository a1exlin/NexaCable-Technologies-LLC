import React from 'react'
function contact() {
    return (
        <div className='contact'>
            <div>
                <h1> We are looking foward to hearing from you</h1>
                <p1> Use the form below to submit requests and/or questions. We will get back to you as soon as possible. </p1>
            </div>

            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="First Name" class="form-control" id="inputEmail4" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Phone Number</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Phone Number" />
                    </div>
                    <div class="form-group col-md-6" className='messageInput'>
                        <label for="message">Message</label>
                        <input type="password" class="form-control" id="message" placeholder="Message" />
                    </div>
                </div>
              
                <button type="submit" class="btn btn-primary" className='messagebtn'>Sign in</button>
            </form>
            
        </div>
    )
}

export default contact;