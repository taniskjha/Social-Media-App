import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NotFound.css'
export default function NotFound() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>Even the things we love break somtimes &#128547;, While we put the pieces back together, meanwhile try <Link to="/">Again</Link> </h2>
            </div>
        </div>
    );
}