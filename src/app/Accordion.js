import React, { useState } from 'react'
import './styles.css'

const Accordion = ({title,context}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="accordion">
      <button className="accordion button" onClick={()=>setIsOpen(!isOpen)}>
    {title}
      <span>{isOpen ? "➖" : "➕"}</span>
      </button>
      {isOpen && <p className="accordion p">{context}</p>}
    </div>
  )
}

export default Accordion
