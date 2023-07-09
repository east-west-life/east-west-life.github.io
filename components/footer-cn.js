const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <style>
    footer {
      padding: 20px;
    }
  </style>
  <footer class="container-fluid" style="max-width:900px">
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7 text-center">
            <p style="font-size:60%;">微信公众号</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7 text-center">
            <img src="img/about/wechat.jpg" style="width:60px">
          </div>
        </div>
      </div>

      <div class="col-sm-6 text-center">
        <div class="row">
          <a href="index.html">
            <img src="img/about/logo.png" style="width:80px">
          </a>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="row">
          <div class="col-sm-7 text-center">
            <p style="font-size:60%;">微信公众号</p>
          </div>
          <div class="col-sm-5">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-7 text-center">
            <img src="img/about/wechat.jpg" style="width:60px">
          </div>
          <div class="col-sm-5">
          </div>
        </div>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="col-sm-4 text-center">
        <div class="row">
          <a href="https://www.youtube.com/@east-west-life" target="_blank" class="fa fa-youtube"></a>
          <a href="https://www.instagram.com/east.west.life/" target="_blank" class="fa fa-instagram"></a>
          <a href="https://www.facebook.com/east2west2life" target="_blank" class="fa fa-facebook"></a>
          <a href="https://www.linkedin.com/company/east-west-life/" target="_blank" class="fa fa-linkedin"></a>
        </div>
      </div>
      <div class="col-sm-4 text-center">
        <div class="row">
          <a href="about-us.html">关于我们</a>&nbsp;&nbsp;
          <a href="about-us.html">联系方式</a>&nbsp;&nbsp;
          <a href="faq.html">常见问题</a>&nbsp;&nbsp;
          <a href="index.html">English</a>
        </div>
        <div class="row">
          <p style="font-size:12px;">&copy; 2018-2023 East-West-Life.&nbsp;All rights reserved.</p>
        </div>
      </div>
      <div class="col-sm-4 text-center">
        <div class="row">
          <a href="https://twitter.com/east2west2life" target="_blank" class="fa fa-twitter"></a>
          <a href="https://space.bilibili.com/456297680" target="_blank" class="fa fa-play-circle"></a>
          <a href="https://www.weibo.com/seemuch" target="_blank" class="fa fa-weibo"></a>
          <a href="https://www.xiaohongshu.com/user/profile/5d1dc4da000000001201a282?xhsshare=CopyLink&appuid=5d1dc4da000000001201a282&apptime=1576370943" target="_blank" class="fa fa-book"></a>
        </div>
      </div>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);