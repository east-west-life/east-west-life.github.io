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
  <div class="container-fluid">
    <div class="navbar-header">
      <ul class="nav navbar-nav">
        <li><a href="index.html"><span class="glyphicon glyphicon-home"></span> 东西生活圈</a></li>
        <li class="dropdown">
          <button class="dropbtn">生活
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
              <li><a href="life/australia.html">澳大利亚</a></li>
              <li><a href="life/canada.html">加拿大</a></li>
              <li><a href="life/japan.html">日本</a></li>
              <li><a href="life/malaysia.html">马来西亚</a></li>
              <li><a href="life/newzealand.html">新西兰</a></li>
              <li><a href="life/singapore.html">新加坡</a></li>
              <li><a href="life/thailand.html">泰国</a></li>
              <li><a href="life/usa.html">美国</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">故事
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
              <li><a href="story/canada.html">加拿大</a></li>
              <li><a href="story/malaysia.html">马来西亚</a></li>
              <li><a href="story/singapore.html">新加坡</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">更多
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="web.html" target="_blank">实用网站</a></li>
            <li><a href="https://studymax.org/" target="_blank">出国留学</a></li>
            <li><a href="about-us.html" target="_blank">关于我们</a></li>
            <li><a href="search.html" target="_blank"><span class="glyphicon glyphicon-search"></span> 搜索</a></li>
          </ul>
        </li>
      </ul>
     <ul class="nav navbar-nav navbar-right">
        <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
        <li><a href="index.html"><span class="glyphicon"></span> English</a></li>
      </ul>
    </div>
  </div>
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
