import React from 'react'

export default function Reviews() {
  return (
    <div>
      <div className='Reviewspage '>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className='headerOfRev text-uppercase'>Reviews to your inbox</h1>
              <p className='pcontantOfRev'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <form className='row '>

                <div className="col-auto ">

                  <input type="email" className="form-control inputRev text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn signupbtn">Sign up</button>
                </div>
              </form>

            </div>
            <div className="col-md-6 col-sm-12 imgRev">
              <img src="https://assets-global.website-files.com/6581a2d5e138528f8e62d78c/6592ca0f844f5b5a9a2e9b9e_CTA%20Image-p-800.png" alt="" />
            </div>
          </div>

        </div>


      </div>


    </div>



  )
}
