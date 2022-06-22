import React from 'react'
import axios from "axios";
import './about.css'
import { useState, useEffect } from "react"
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'
import Github from '../../assets/Github.svg'

export default function About() {
    const [about, setAbout] = useState([])

    useEffect(() => {
        axios.get("./data.json").then((res) => {
            setAbout(res.data.users[0]);
        });
        //     fetch("https://Dayhun.github.io/react-blog/public/data.json")
        //         .then(res => {
        //             return res.json()
        //         })
        //         .then(data => {
        //             setAbout(data.users[0])
        //         })
    }, [])

    return (
        <aside className="about">
            <h2>About Me</h2>
            {/* 이미지 가져오는거 수정해야함 */}
            <img src="./assets/profile.jpg" alt="user-profile" className="user-profile" />
            <p className="user-name">{about.name}</p>
            <p className="user-description">{about.userInfo}</p>
            <h3>Categories</h3>
            <ul className="categories">
                <li><a href="#">Life</a></li>
                <li><a href="#">Style</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Photo</a></li>
                <li><a href="#">Develop</a></li>
                <li><a href="#">Music</a></li>
            </ul>
            <h3>Follow</h3>
            <ul className="sns">
                <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
                <li><a href="#"><img src={Instagram} alt="Instgram" /></a></li>
                <li><a href="#"><img src={Github} alt="Github" /></a></li>
            </ul>
        </aside>

        // <aside class="about">
        //     <h2>About Me</h2>
        //     <img src="./assets/profile.jpg" alt="프로필 이미지" class="user-profile" />
        //     <p class="user-name">Chilli</p>
        //     <p class="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //     <h3>Categories</h3>
        //     <ul class="categories">
        //         <li><a href="#">Life</a></li>
        //         <li><a href="#">Style</a></li>
        //         <li><a href="#">Tech</a></li>
        //         <li><a href="#">Sport</a></li>
        //         <li><a href="#">Photo</a></li>
        //         <li><a href="#">Develop</a></li>
        //         <li><a href="#">Music</a></li>
        //     </ul>
        //     <h3>Follow</h3>
        //     <ul class="sns">
        //         <li>
        //             <a href="#">
        //                 <img src={Facebook} alt="Facebook" />
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <img src={Twitter} alt="Twitter" />
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <img src={Instagram} alt="Instagram" />
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#">
        //                 <img src={Github} alt="GitHub" />
        //             </a>
        //         </li>
        //     </ul>
        // </aside>
    );
}