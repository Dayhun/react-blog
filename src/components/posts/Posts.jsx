import React, { useEffect, useState } from "react";
import './posts.css'
import Post from '../post/Post';
import axios from "axios";

export default function Posts() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		//axios 방식
		axios.get("./data.json")
			.then((res) => {
				setPost(res.data.posts);
			});

		//fetch 방식
		/*
		fetch("https://Dayhun.github.io/react-blog/public/data.json")
			.then(res => {
				return res.json()
			})
			.then(data => {
				setPost(data.posts)
			})
		*/
	}, []);

	return (
		<ul className="posts">
			{post.map(item => {
				return <Post
					key={item.id}
					thumbnailSrc={item.thumbnail}
					title={item.title}
					contentsText={item.contents[0]["text"]}
					profileImg={item.profileImg}
					created={item.created}
					category={item.category}
				/>
			})
			}
		</ul>
	);
}