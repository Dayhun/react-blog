import React from 'react'
import './banner.css'
import { useState, useEffect } from 'react'
import axios from "axios";



export default function Banner() {
    const [banner, setBanner] = useState([])

    useEffect(() => {
        axios.get("./data.json").then((res) => {
            setBanner(res.data.blog);
        });
        // fetch("https://Dayhun.github.io/react-blog/public/data.json")
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(data => {
        //         // console.log(data.blog)
        //         setBanner(data.blog)
        //     })
    }, [])

    return (
        <div className='banner'>
            <div className='max-width'>
                <div className='banner-contents'>
                    <p className='sub-text'>{banner.subTitle}</p>
                    <p className='main-text'>{banner.mainTitle}</p>
                    <p className='description'>{banner.description}</p>
                </div>
            </div>
        </div>
        // <div class="banner">
        //     <div class="max-width">
        //         <div class="banner-contents">
        //             <p class="sub-text">React Blog</p>
        //             <p class="main-text">My BLOG</p>
        //             <p class="description">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}