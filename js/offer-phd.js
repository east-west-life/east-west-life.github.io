function offerphd() {
  //define valid grades and their values
  var gr = new Array(6);
  var cr = new Array(6);
  var ingr = new Array(6);

  // define valid grades and their values
  var grcount = 6;
  gr[0] = 80;
  cr[0] = 0.65;
  gr[1] = 75;
  cr[1] = 0.6;
  gr[2] = 1;
  cr[2] = 0.9;
  gr[3] = 1;
  cr[3] = 0.7;
  gr[4] = 5.5;
  cr[4] = 0.8;
  gr[5] = 80;
  cr[5] = 0.8;
  // retrieve user input
  ingr[0] = document.OfferPercentPhD.gr1.value;
  ingr[1] = document.OfferPercentPhD.gr2.value;
  ingr[2] = document.OfferPercentPhD.gr3.value;
  ingr[3] = document.OfferPercentPhD.gr4.value;
  ingr[4] = document.OfferPercentPhD.gr5.value;
  ingr[5] = document.OfferPercentPhD.gr6.value;

  // Calculate Percent
  var allgr = 0;
  var allcr = 0;
  var offer = 0;
  for (var x = 0; x < 6; x++)
          {
          if (ingr[x] == "") continue;
          if (isNaN(parseFloat(ingr[x]))) {
            alert("请输入正确的格式，例如：平均分为80、数量为2、雅思为6.0");
            return 0;
          }
          if (ingr[x] >= gr[x])
            {
              allgr = allgr + cr[x];
              allcr = allcr + 1;
            }
          }

  // this if-check prevents a divide by zero error
  if (allcr == 0)
          {
          alert("请输入相应的数值！");
          return 0;
          }

  offer = allgr / allcr;
  alert("你能被马来西亚公立大学录取的成功率为：" + eval(offer));
  return 0;
}


// When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('offer-phd');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
