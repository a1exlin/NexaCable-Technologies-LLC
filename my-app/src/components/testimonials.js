import React from 'react'
import { IoStarSharp } from "react-icons/io5";


function testimonials() {
    return (
        <div className='testimonial'>

            <h3 className='review'> OVER 504 "5 STARS" REVIEWS AND</h3>
            <h3 className='climbing'>CLIMBING</h3>

            <a href="https://www.yelp.com/biz/nexacable-technologies-smyrna-2"><img src='https://ijm.vmw.mybluehost.me/wp-content/uploads/2021/06/yelp.png' className='yelp'></img></a>
            <h4 className='yelp-text'>Rate Us on Yelp </h4>
            <p2 className="yelp-text2">248 Reviews</p2>
            <h4 className='google2'> Rate Us on Google</h4>
            <p2 className="google3">1,248 Reviews</p2>
            <img src='https://ijm.vmw.mybluehost.me/wp-content/uploads/2021/06/logo-google.png' className='google'></img>

            <h1 className='review-header'> Our Reviews</h1>

            {/* ------------------------------------------------- */}
            <div className='review1'> <img className='review-image1' src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/dl.jpg"></img>

                <h3 className='star'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    <IoStarSharp />
                </h3>

                <p className='dl1'>D. L</p>
                <p className='review-header1'>Smyrna, GA</p>

                <p className='review1-text'>

                    I needed someone to install some security cameras at my business. They suggested the hardware and we collaborated on the locations of the cameras. They ran all the cable and got it all set up for me over a 3 day period and everything works great. I would use them again.</p>


            </div>

            <div className='review2'> <img className='review-image2' src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/dl.jpg"></img>

                <h3 className='star2'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    <IoStarSharp />
                </h3>

                <p className='dl2'>D. L</p>
                <p className='review-header2'>Smyrna, GA</p>

                <p className='review2-text'>
                    I needed someone to install some security cameras at my business. They suggested the hardware and we collaborated on the locations of the cameras. They ran all the cable and got it all set up for me over a 3 day period and everything works great. I would use them again.</p>

            </div>

            <div className='review3'> <img className='review-image3' src="https://ijm.vmw.mybluehost.me/wp-content/uploads/2023/11/dl.jpg"></img>
            
                <h3 className='star3'>
                    <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    <IoStarSharp />
                </h3>

                <p className='dl3'>D. L</p>
                <p className='review-header3'>Smyrna, GA</p>

                <p className='review3-text'>
                    I needed someone to install some security cameras at my business. They suggested the hardware and we collaborated on the locations of the cameras. They ran all the cable and got it all set up for me over a 3 day period and everything works great. I would use them again.</p>
            </div>
        </div>

    )
}

export default testimonials;