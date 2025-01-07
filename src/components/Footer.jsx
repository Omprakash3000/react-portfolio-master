import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/omprakash3000"}
          alt="Founder"
        />

        <h2>Om Prakash Thakur</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@omprakashthakur2680" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/omprakash._.03" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/omprakash3000" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
