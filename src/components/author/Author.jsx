import React from 'react'
import './author.css'

export default function Author({ profileImg, userName, created }) {
    return (
        <dl class="author-wrap">
            <dt class="a11y-hidden">Author</dt>
            <dd class="author"><img src={profileImg} alt="프로필 이미지" /> {userName}</dd>
            <dt class="a11y-hidden">Created</dt>
            <dd class="created">{created}</dd>
        </dl>
    );
}