import React from "react";
import "./TestimoniosStyle.scss";

export default function Testimonios() {
  const config = {
    username: "team_marcelabarros",
    post1: {
      imageLink:
        "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/103855201_884913195338930_1250017299622911057_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaCiieN8iLQAX-jQHjB&tp=18&oh=973b0c8a34676b4ba17c8d36dc12c8d3&oe=5FDBDDD6",
      postLink: "https://www.instagram.com/p/CBeXn4tJ6Ut/",
    },
    post2: {
      imageLink:
        "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/73387393_165657887982918_5250464061664043803_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7OksXhaj7GQAX-Vm8bs&tp=18&oh=edcd1b2c679cb5867bc593cbf709bd5c&oe=5FDBF9FD",
      postLink: "https://www.instagram.com/p/B6RQvJSp9YO/",
    },
    post3: {
      imageLink:
        "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/77222949_184041972721760_6417578935193399453_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rLUxdvnl4YEAX99rp6f&tp=18&oh=dd67dbd62780944de5316d7b68084e27&oe=5FDB275F",
      postLink: "https://www.instagram.com/p/B51rU7BptIC/",
    },
    post4: {
      imageLink:
        "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/106279280_583550822550463_7894120481717226872_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ov1PxzjfdZ4AX-AA8Qw&tp=18&oh=55b10d701063e6e7c4ea25fc3b4d5092&oe=5FDBF1B5",
      postLink: "https://www.instagram.com/p/CCPONsEJo4j/",
    },
  };
  return (
    <section id="testimonios">
      <h2>VOS ELEGÍS CÓMO TRANSFORMAR TU FÍSICO</h2>
      <h4>Entrenamientos personalizados para cada objetivo</h4>
      <div className="posts-container">
        <InstagramPost
          username={config.username}
          imageLink={config.post1.imageLink}
          postLink={config.post1.postLink}
        />
        <InstagramPost
          username={config.username}
          imageLink={config.post2.imageLink}
          postLink={config.post2.postLink}
        />
        <InstagramPost
          username={config.username}
          imageLink={config.post3.imageLink}
          postLink={config.post3.postLink}
        />
        <InstagramPost
          username={config.username}
          imageLink={config.post4.imageLink}
          postLink={config.post4.postLink}
        />
      </div>
    </section>
  );
}

export function InstagramPost({ username, imageLink, postLink }) {
  return (
    <div className="post-container">
      <a target="_blank" rel="noreferrer" href={postLink}>
        Ver en perfil
      </a>
      <img src={imageLink} key={imageLink} alt={imageLink} />
      <span>@{username}</span>
    </div>
  );
}
