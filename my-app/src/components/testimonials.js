import React from 'react'
import { IoStarSharp } from "react-icons/io5";


function testimonials() {
    return (
        <div className='testimonial'>
            <div className='gray-box'>

                <div className='review1'>
                    <h3 className='review-txt'> OVER 504 "5 STARS" REVIEWS AND</h3>
                    <h3 className='review-txt2'>CLIMBING</h3>
                </div>

                <div className='review2'>
                    <a href="https://www.yelp.com/biz/nexacable-technologies-smyrna-2"><img src='https://ijm.vmw.mybluehost.me/wp-content/uploads/2021/06/yelp.png' className='yelp-img'></img></a>
                    <div className='yelp-textbox'>
                        <h4 className='yelp-text2'>Rate Us on Yelp </h4>
                        <p2>248 Reviews</p2>
                    </div>

                </div>

                <div className='review3'>
                    <img src='https://ijm.vmw.mybluehost.me/wp-content/uploads/2021/06/logo-google.png' className='google-img'></img>
                    <div className='google-textbox'>
                        <h4 className='google2'> Rate Us on Google</h4>
                        <p2>1,248 Reviews</p2>
                    </div>


                </div>
            </div>
            

        </div>

    )
}

export default testimonials;