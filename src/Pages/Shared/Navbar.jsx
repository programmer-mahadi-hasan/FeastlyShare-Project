import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.warning('You have been loged out!')
            })
            .catch(error => {
                console.log('log out failed!')
            })
    }
    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/available-foods'}>Available Foods</NavLink></li>
        <li><NavLink to={'/add-foods'}>Add Food</NavLink></li>
        <li><NavLink to={'/manage-foods'}>Manage My Foods</NavLink></li>
        <li><NavLink to={'/request-foods'}>My Request Foods</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">
                    Feastly<span className='text-orange-500'>Share</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    user ?
                        <>
                            <div className="avatar tooltip tooltip-info tooltip-left" data-tip={user.displayName}>
                                <div className="ring-orange-500 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <Link onClick={handleLogOut} className="btn">Log Out</Link>
                        </>
                        :
                        <>
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'} className="btn">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;