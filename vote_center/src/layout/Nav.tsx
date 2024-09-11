import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsActive(!isActive)
  }

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item has-treeview">
          <Link to={`/`} className="nav-link">
            <i className="nav-icon fas fa-circle"></i>
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-item has-treeview">
          <Link to={`/voters`} className="nav-link">
            <i className="nav-icon fas fa-circle"></i>
            <p>Voter</p>
          </Link>
        </li>
        <li className="nav-item has-treeview">
          <Link to={`/candidates`} className="nav-link">
            <i className="nav-icon fas fa-circle"></i>
            <p>Candidate</p>
          </Link>
        </li>
        <li className="nav-item has-treeview">
          <Link to={`/vote-casts`} className="nav-link">
            <i className="nav-icon fas fa-circle"></i>
            <p>Vote Cast</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
