import React from 'react'
import './Landing.css';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
export default function Landing({users}) {
  
  return (
    <div>
      <h2>Who's Watching ?</h2>
      <div className="users">
        {users.map(u => <Link to={`/${u.id}/catalog`} key={u.id}> <div> {u.name} </div> </Link>)}
      </div>
    </div>
  )
}
