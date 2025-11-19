import { NavLink } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
  <>
    <h1>Texas Chainsaw Massacre Game Soundboard</h1>
    <br/>
    <div className='homeLinks'>
      <div className='characters'>
        <NavLink to="/hitchhiker">
          <img src='/images/hitchhiker_portrait.png'/><br/>
          Hitchhiker
        </NavLink></div>
      <div className='characters'>
        <NavLink to="/cook">
          <img src='/images/cook_portrait.png'/><br/>
          Cook
        </NavLink></div>
      <div className='characters'>
        <NavLink to="/leatherface">
          <img src='/images/leatherface_portrait.png'/><br/>
          Leatherface
        </NavLink></div>
    </div>
  </>
  )
}

export default Home
