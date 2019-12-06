
import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    return (
        <div>
            <nav className='navbar navbar-light bg-primary'>
                <div className="navbar-brand text-light">
                    <i className="fas fa-id-card-alt"></i>
                    Contact Keeper</div>
                <div className='px-3'>
                    <NavLink to='/' className='text-light px-2'>Home</NavLink>
                    <NavLink to='/about' className='text-light px-2'>About</NavLink>
                </div>


            </nav>
        </div>
    )
}

export default Navbar