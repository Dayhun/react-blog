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
    );
}