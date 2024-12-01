const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <style>
  </style>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- <div class="navbar-header"></div> -->
      <ul class="nav navbar-nav navbar-center">
        <li class="dropdown">
          <button class="dropbtn">
            <a href="index.html"><span class="glyphicon glyphicon-home"></span> EWL</a>
          </button>
        </li>
        <li class="dropdown">
          <button class="dropbtn">
            Explore <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="explore/business.html" target="_blank">Business</a></li>
            <li><a href="explore/culture.html" target="_blank">Culture</a></li>
            <li><a href="explore/education.html" target="_blank">Education</a></li>
            <li><a href="explore/lifestyle.html" target="_blank">Lifestyle</a></li>
            <li><a href="explore/people.html" target="_blank">People</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">
            More <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="rankings.html" target="_blank">Rankings</a></li>
            <li><a href="web.html" target="_blank">Websites</a></li>
            <li><a href="https://studymax.org/" target="_blank">Study Abroad</a></li>
            <li><a href="project.html" target="_blank">Project</a></li>
            <li><a href="about-us.html" target="_blank">About us</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">
            <a href="index-cn.html"><li>中文</li></a>
          </button>
        </li>
      </ul>
      <!-- <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Register</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul> -->
    </div>
  </nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
