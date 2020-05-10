import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/ProfileBar.css'




function ProfileBar() {
    // const user = document.querySelector('.user');
    // const xBtn = document.querySelector('.sidebar-header i');
    // const sidebar = document.querySelector('.sidebar');
    // const sidebarWrapper = document.querySelector('.sidebar-wrapper');


    // user.addEventListener('click', () => {
    //     sidebar.classList.add('sidebar-display');
    //     sidebarWrapper.classList.add('sidebar-wrapper-display');
    // });

    // xBtn.addEventListener('click', () => {
    //     sidebar.classList.remove('sidebar-display');
    //     sidebarWrapper.classList.remove('sidebar-wrapper-display');
    // });

    return (


        <div className="sidebar_wrapper">
            <h1> HEy World</h1>
            <div className="sidebar">
                <div className="sidebar_header border">
                    <h2 className="light_text">Account info</h2>
                    <i className="fas fa_times" />
                </div>
                <div className="sidebar_user">
                    <div className="sidebar_user_img">
                        <img alt="" src="images/user1.jpg" />
                    </div>
                    <span>+</span>
                </div>
                <div className="sidebar_user_info light_text">
                    <h4>Jane Smith</h4>
                    <p>@janesmith</p>
                </div>
                <div className="following light_text">
                    <p className="following_paragraph"><span>711</span> Following</p>
                    <p className="following_paragraph"><span>7.5K</span> Followers</p>
                </div>
                <div className="sidebar_list_1 border">
                    <ul>
                        <li>
                            <a href="#"> <i className="fas fa-user" /> Profile </a>
                        </li>
                        <li>
                            <a href="#"> <i className="far fa-list-alt" /> Lists </a>
                        </li>
                        <li>
                            <a href="#"> <i className="far fa-bookmark" /> Bookmarks </a>
                        </li>
                        <li>
                            <a href="#"> <i className="fab fa-adversal" /> Ads </a>
                        </li>
                        <li>
                            <a href="#"> <i className="fas fa-chart-line" /> Analytics </a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar_list_2">
                    <ul>
                        <li><a href="#">Settings and Privacy</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProfileBar
