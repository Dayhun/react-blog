import React from 'react'
import './viewauthor.css'
import profileImg from '../../assets/profile.jpg'

export default function ViewAuthor() {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={profileImg} alt="프로필사진" />Chilli</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">2022.05.25.</dd>
        </dl>
        // <dl class="author-wrap">
        //     <dt class="a11y-hidden">Author</dt>
        //     <dd class="author"><img src={profileImg} alt="프로필 이미지" /> {userName}</dd>
        //     <dt class="a11y-hidden">Created</dt>
        //     <dd class="created">{created}</dd>
        // </dl>
    );
}