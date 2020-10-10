import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix_logo"
      />

      <img
        className="avatar"
        src="http://note.youdao.com/yws/public/resource/33ff6b5b234de305b53271ccbb97330d/xmlnote/WEBRESOURCE29cba347d3997d6e1aa9a1d551631a89/10"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
