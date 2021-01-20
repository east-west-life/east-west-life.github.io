const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../../css/styles.css">
  <script src="../../js/jquery.min.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <style>
    .affix {
        top: 0;
        width: 100%;
        z-index: 9999 !important;
    }

    .affix + .container-fluid {
      padding-top: 50px;
    }

    .navbar {
      font-size: 16px !important;
      background-color: #e7717d;
      z-index: 9999;
      text-align: center;
      border: 0;
      margin-bottom: 0;
      border-radius: 0;
    }

    .navbar-nav li a, .navbar-brand {
      color: #fff !important;
    }

    .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #e7717d !important;
      background-color: #fff !important;
    }


    .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
    }

    .dropdown {
      float: left;
      z-index: 9999;
    }

    .dropdown .dropbtn {
      font-size: 16px;
      color: #fff;
      background-color: inherit;
      text-align: center;
      padding: 14px 16px;
      border: none;
      outline: none;
      margin: 0;
    }

    .dropdown:hover .dropbtn{
      background-color: #fff;
      color: #e7717d !important;;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #e7717d;
      min-width: 150px;
    }

    .dropdown-content a {
      float: none;
      color: #fff !important;
      padding: 10px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content a:hover {
      background-color: #d8c3a5 !important;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">多看看实验室</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="../../index.html"><span class="glyphicon glyphicon-home"></span> 首页</a></li>
        <li class="dropdown">
          <button class="dropbtn">东南亚
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../se-asia-list/culture.html">社会人文</a>
            <a href="../../se-asia-list/guide.html">攻略指南</a>
            <a href="../../se-asia-list/edu.html">留学移民</a>
            <a href="../../se-asia-list/scene.html">旅游景点</a>
            <a href="../../se-asia-list/food.html">美食小吃</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">东亚
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../east-asia-list/culture.html">社会人文</a>
            <a href="../../east-asia-list/guide.html">攻略指南</a>
            <a href="../../east-asia-list/edu.html">留学移民</a>
            <a href="../../east-asia-list/scene.html">旅游景点</a>
            <a href="../../east-asia-list/food.html">美食小吃</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">西欧
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../west-eu-list/culture.html">社会人文</a>
            <a href="../../west-eu-list/guide.html">攻略指南</a>
            <a href="../../west-eu-list/edu.html">留学移民</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">北美
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../north-ame-list/culture.html">社会人文</a>
            <a href="../../north-ame-list/guide.html">攻略指南</a>
            <a href="../../north-ame-list/edu.html">留学移民</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">大洋洲
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../oceania-list/culture.html">社会人文</a>
            <a href="../../oceania-list/guide.html">攻略指南</a>
            <a href="../../oceania-list/edu.html">留学移民</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">专题
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../topic-list/life.html">生活之南</a>
            <a href="../../topic-list/edu.html">教育之路</a>
            <a href="../../topic-list/pretty.html">世界之美</a>
            <a href="../../topic-list/love.html">爱情之道</a>
            <a href="../../topic-list/tech-art.html">科技人文</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">更多
            <span class="caret"></span>
          </button>
          <div class="dropdown-content">
            <a href="../../about-us.html">关于我们</a>
            <a href="../../search.html"><span class="glyphicon glyphicon-search"></span> 搜索</a>
          </div>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> -->
        <li><a href="../../index-en.html"><span class="glyphicon"></span> English</a></li>
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
