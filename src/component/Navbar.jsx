import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link>
                </li>
                <li>
                    <Link to="/services" className="hover:bg-gray-700 px-3 py-2 rounded">Services</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
