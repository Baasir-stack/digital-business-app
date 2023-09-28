import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className="container">
        <div className="f-container">
            <span className='title'>Get Funded Today!</span>
            <EmailBox/>

            <hr />
            <div className='f-menu'>
                <Link to='h-wrapper' spy={true} smooth={true}>
                  <span>Home</span>
                </Link>
                <Link to='wwd-wrapper' spy smooth offset={100}>
                  <span>what we do</span>
                </Link>
                <Link to='hiw-wrapper' spy smooth>
                  <span>how it works</span>
                </Link>
                <Link to='wwi-wrapper' spy smooth offset={100}>
                  <span>who we invest in</span>
                </Link>
                <Link to='t-wrapper' spy smooth>
                  <span>testimonials</span>
                </Link>
            </div>

            <hr />

        </div>
      </div>
    </div>
  )
}

export default Footer
