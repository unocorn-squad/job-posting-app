import React from 'react'
import './Checkbox.css'

export const Checkbox = () => {
  return (
    <>
        <div className="checkbox">
            <input type="checkbox" className="checkbox__input" name="fulltime" value="fulltime"></input>
            <label for="fulltime" className="checkbox__label">Full Time <span>Only</span></label>
        </div>   
    </>
  )
}
