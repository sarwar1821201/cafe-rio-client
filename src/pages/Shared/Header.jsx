import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navItems= <>
        <li><Link to='/' >Home</Link></li>
        <li> <Link to='/menu'>Our Menu</Link> </li>
        <li><Link to='/order/salad'>Order Food </Link></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">The Cafe Rio</Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <li className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4"  > <Link to='/login'>Login</Link> </li>
  </div>
</div>
        </div>
    );
};

export default Header;