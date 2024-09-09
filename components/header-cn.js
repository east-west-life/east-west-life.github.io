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
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <button class="dropbtn">
            <a href="index.html"><span class="glyphicon glyphicon-home"></span> 东西生活圈</a>
          </button>
        </li>
        <li class="dropdown">
          <button class="dropbtn">探索 <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
              <li><a href="life/australia.html">澳大利亚</a></li>
              <li><a href="life/canada.html">加拿大</a></li>
              <li><a href="life/japan.html">日本</a></li>
              <li><a href="life/malaysia.html">马来西亚</a></li>
              <li><a href="life/newzealand.html">新西兰</a></li>
              <li><a href="life/singapore.html">新加坡</a></li>
              <li><a href="life/thailand.html">泰国</a></li>
              <li><a href="life/uk.html">英国</a></li>
              <li><a href="life/usa.html">美国</a></li>
              <li><a href="life/southeast-asia.html">东南亚</a></li>
              <li><a href="life/asia.html">亚洲</a></li>
              <li><a href="life/europe.html">欧洲</a></li>
              <li><a href="life/world.html">世界</a></li>
              <li><a href="life/they.html">他们</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">更多 <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="project.html" target="_blank">项目</a></li>
            <li><a href="web.html" target="_blank">网站</a></li>
            <li><a href="https://studymax.org/" target="_blank">教育</a></li>
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
