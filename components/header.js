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
          <button class="dropbtn">东南亚
            <span class="caret"></span>
          </button>
           <ul class="dropdown-content">
              <li><a href="se-asia-list/culture.html">社会人文</a></li>
              <li><a href="se-asia-list/guide.html">攻略指南</a></li>
              <li><a href="se-asia-list/edu.html">留学移民</a></li>
              <li><a href="se-asia-list/scene.html">旅游景点</a></li>
              <li><a href="se-asia-list/food.html">美食小吃</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">东亚
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="east-asia-list/culture.html">社会人文</a></li>
            <li><a href="east-asia-list/guide.html">攻略指南</a></li>
            <li><a href="east-asia-list/edu.html">留学移民</a></li>
            <li><a href="east-asia-list/scene.html">旅游景点</a></li>
            <li><a href="east-asia-list/food.html">美食小吃</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">西欧
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="west-eu-list/culture.html">社会人文</a></li>
            <li><a href="west-eu-list/guide.html">攻略指南</a></li>
            <li><a href="west-eu-list/edu.html">留学移民</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">北美
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="north-ame-list/culture.html">社会人文</a></li>
            <li><a href="north-ame-list/guide.html">攻略指南</a></li>
            <li><a href="north-ame-list/edu.html">留学移民</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">大洋洲
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="oceania-list/culture.html">社会人文</a></li>
            <li><a href="oceania-list/guide.html">攻略指南</a></li>
            <li><a href="oceania-list/edu.html">留学移民</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">专题
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="topic-list/life.html">生活之南</a></li>
            <li><a href="topic-list/history.html">历史之光</a></li>
            <li><a href="topic-list/pretty.html">世界之美</a></li>
            <li><a href="topic-list/edu.html">教育之路</a></li>
            <li><a href="topic-list/love.html">爱情之道</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <button class="dropbtn">更多
            <span class="caret"></span>
          </button>
          <ul class="dropdown-content">
            <li><a href="about-us.html">关于我们</a></li>
            <li><a href="search.html"><span class="glyphicon glyphicon-search"></span> 搜索</a></li>
          </ul>
        </li>
      </ul>
      <!-- <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
        <li><a href="index-en.html"><span class="glyphicon"></span> English</a></li>
      </ul> -->
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
