import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from './ProfileDropdown'

export default function FloatingOptions() {
  const [profileDropdownVisibility, setProfileDropdownVisibility] = useState(false)
  return (
    <div>
      <div className="floating-options">
        <Link className="floating-option" to="#">
          <div><i class="far fa-calendar"></i></div>
        </Link>
        <Link className="floating-option" to="#">
          <div><i class="fas fa-bell"></i></div>
        </Link>
        <Link className={`floating-option ${profileDropdownVisibility && 'active'}`} to="#" onClick={e => setProfileDropdownVisibility(!profileDropdownVisibility)}>
          <div><i class="fas fa-user"></i></div>
        </Link>
      </div>
      <ProfileDropdown visible={profileDropdownVisibility}/>
    </div>
  )
}
