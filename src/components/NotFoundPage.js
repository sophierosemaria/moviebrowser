import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="backdrop-404" style={{backgroundImage: "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"}}>
            <div className="text-404 p-5">
                <h1 className='large-text'>404</h1> 
                <h2>Page Not Found</h2>
                <p style={{textAlign:"center"}}>
                    <Link to="/" className="btn btn-dark">Go back to Home </Link>
                </p>
            </div>
        </div>
    )
    
};

export default PageNotFound;