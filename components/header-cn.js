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
            <a href="index.html"><span class="glyphicon glyphicon-home"></span> 东西生活圈</a>
          </button>
        </li>
        <li class="dropdown">
          <button class="dropbtn">探索 <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="explore/business.html" target="_blank">商业</a></li>
            <li><a href="explore/culture.html" target="_blank">文化</a></li>
            <li><a href="explore/people.html" target="_blank">人物</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">更多 <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="rankings.html" target="_blank">排名</a></li>
            <li><a href="web.html" target="_blank">网站</a></li>
            <li><a href="https://studymax.org/" target="_blank">留学</a></li>
            <li><a href="project.html" target="_blank">项目</a></li>
            <li><a href="about-us.html" target="_blank">关于我们</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">
            <a href="index.html">English</a>
          </button>
        </li>
      </ul>
      <!-- <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
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
