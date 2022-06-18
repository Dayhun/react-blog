import './post.css'
import Category from '../category/Category';
import Author from '../author/Author';
export default function Post(props) {
    return (
        <li>
            <a href="post-view.html" class="post">
                <article>
                    <img src={props.imgSrc} alt="포스트 이미지" />
                    <div class="contents-wrap">
                        <Category />
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <Author />
                        <p class="post-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                            dolor quas odio cum incidunt repudiandae vel."
                        </p>
                    </div>
                </article>
            </a>
        </li>
    );
}