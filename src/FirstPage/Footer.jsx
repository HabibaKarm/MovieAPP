import React from 'react'

export default function Footer() {
  return (
  <div>
    <footer>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4">
                <a className=" brand new-amsterdam-regular" href="#">
                        Movie<span className='maven'>Maven</span>
                    </a>
                </div>
                <div className="col-4">
                    <ul>
                        <li><a href="#" className='links'>About</a></li>
                        <li><a href="#" className='links'>Movies</a></li>
                        <li> <a href="#" className='links'>Reviews</a></li>
                        <li> <a href="#" className='links'>Contact</a></li>
                        <li> <a href="#" className='links'>Help</a></li>
                       
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li> <a href="#" className='social'><i className="fa-brands fa-facebook"></i></a></li>
                        <li> <a href="#" className='social'><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li> <a href="#" className='social'><i className="fa-brands fa-instagram"></i></a></li>
                        <li> <a href="#" className='social'><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="copyright align-center text-center">
                    <p>�� 2024 Movie Maven. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    {/* // <div className="footer w-100 ">
    //       <div className="container-fluid">
    //         <div className="row footer1 d-inline ">

    //           <a className="navbar-brand brand new-amsterdam-regular " href="#">
    //             Movie<span className='maven'>Maven</span>
    //           </a>

    //           <a href="#" className='links'>About</a>
    //           <a href="#" className='links'>Movies</a>
    //           <a href="#" className='links'>Reviews</a>
    //           <a href="#" className='links'>Contact</a>
    //           <a href="#" className='links'>Help</a>

    //           <a href="#" className='social'><i className="fa-brands fa-facebook"></i></a>
    //           <a href="#" className='social'><i className="fa-brands fa-x-twitter"></i></a>
    //           <a href="#" className='social'><i className="fa-brands fa-instagram"></i></a>
    //           <a href="#" className='social'><i className="fa-solid fa-envelope"></i></a>





    //         </div>
    //       </div>





    //       <div className="row">
    //         <div className="copyright align-center text-center">
    //           <p>�� 2024 Movie Maven. All rights reserved.</p>
    //         </div>
    //       </div>
    //     </div> */}
</div>
  )
}
