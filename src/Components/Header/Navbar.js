import React from 'react'
import { BrowserRouter as Router, Route, Routes , Link, useParams} from 'react-router-dom';

import './Navbar.css';
export default function Navbar() {
  const {userId} = useParams()

  return (
    <div className="navbar">
    <Link to="/"><h3>Home</h3></Link>
    <Link to={`/${userId}/catalog`}><h3>Catalog</h3></Link>
    <h3>Reflix</h3>
    </div>
  )
}
