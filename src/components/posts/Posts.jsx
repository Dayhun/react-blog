import './posts.css'
import Post from '../post/Post';

export default function Posts() {
	return (
		<ul class="posts">
			<Post imgSrc="../../../public/assets/post-img6.jpg" />
			<Post imgSrc="../../../public/assets/post-img5.jpg" />
			<Post imgSrc="../../../public/assets/post-img4.jpg" />
			<Post imgSrc="../../../public/assets/post-img3.jpg" />
			<Post imgSrc="../../../public/assets/post-img2.jpg" />
			<Post imgSrc="../../../public/assets/post-img1.jpg" />
		</ul>
	);
}