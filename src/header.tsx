import React, { useState, useEffect } from 'react';
import './App.css';
import gallery from './data/images.json';

function Header() {
    return (
        <header className="App-header">
            <h1 className='header-title'> Photos </h1>
            <nav className='nav-bar'>
                <ol className='nav-list'>
                    <li className='nav-list-item active'><a href='#'>Recently added</a></li>
                    <li className='nav-list-item'><a href='#'>Favorited</a></li>
                </ol>
            </nav>
        </header>
    );
}

export default Header;