import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>

      {/*--------left side--------*/}
      <div>
        <p>
          Book Appointment <br/> with trusted Doctor

        </p>
<div>
  <img src={assets.group_profiles} alt="" />
  <p>Lorem ipsum, dolor sit amet consectetur, <br /> adipisicing elit. Esse deleniti animi ratione?</p>
</div>
<a href="">Book appointments <img src={assets.arrow_icon} alt="" /></a>
      </div>


      {/*--------right side--------*/}
      <div>
        <img src={assets.header_img} alt="" />

       </div>
  
    </div>
  )
}

export default Header
