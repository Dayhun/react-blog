import React from 'react'
import './post.css'
import Category from '../category/Category';
import Author from '../author/Author';
import { Link } from "react-router-dom";

export default function Post(props) {
    return (
        <li>
            <Link to="/postview" className="post">
                <article>
                    <img src={props.thumbnailSrc} alt="포스트 이미지" />
                    <div className="contents-wrap">
                        <Category category={props.category} />
                        <h3>{props.title}</h3>
                        <Author profileImg={props.profileImg} created={props.created} />
                        <p class="post-description">{props.contentsText}</p>
                    </div>
                </article>
            </Link>
        </li>
    );
}



