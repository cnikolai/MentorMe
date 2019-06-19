import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand logo" href="#"><h3>MentorMe</h3></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a id="about" class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a id="profile" class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item">
        <a id="connect" class="nav-link" href="#">Connect</a>
      </li>
      <li class="nav-item">
        <a id="login" class="nav-link" href="#">Log In</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;

