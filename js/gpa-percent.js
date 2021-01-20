function gpapercent() {
  //define valid grades and their values
  var gr = new Array(12);
  var cr = new Array(12);
  var ingr = new Array(12);
  var incr = new Array(12);

  // define valid grades and their values
  var grcount = 12;
  gr[0] = 90;
  cr[0] = 4;
  gr[1] = 80;
  cr[1] = 4;
  gr[2] = 75;
  cr[2] = 3.7;
  gr[3] = 70;
  cr[3] = 3.3;
  gr[4] = 65;
  cr[4] = 3;
  gr[5] = 60;
  cr[5] = 2.7;
  gr[6] = 55;
  cr[6] = 2.3;
  gr[7] = 50;
  cr[7] = 2;
  gr[8] = 45;
  cr[8] = 1.7;
  gr[9] = 40;
  cr[9] = 1.3;
  gr[10] = 35;
  cr[10] = 1;
  gr[10] = 0;
  cr[10] = 0;
  // retrieve user input
  ingr[0] = document.GPAPercent.gr1.value;
  ingr[1] = document.GPAPercent.gr2.value;
  ingr[2] = document.GPAPercent.gr3.value;
  ingr[3] = document.GPAPercent.gr4.value;
  ingr[4] = document.GPAPercent.gr5.value;
  ingr[5] = document.GPAPercent.gr6.value;
  ingr[6] = document.GPAPercent.gr7.value;
  ingr[7] = document.GPAPercent.gr8.value;
  ingr[8] = document.GPAPercent.gr9.value;
  ingr[9] = document.GPAPercent.gr10.value;
  incr[0] = document.GPAPercent.cr1.value;
  incr[1] = document.GPAPercent.cr2.value;
  incr[2] = document.GPAPercent.cr3.value;
  incr[3] = document.GPAPercent.cr4.value;
  incr[4] = document.GPAPercent.cr5.value;
  incr[5] = document.GPAPercent.cr6.value;
  incr[6] = document.GPAPercent.cr7.value;
  incr[7] = document.GPAPercent.cr8.value;
  incr[8] = document.GPAPercent.cr9.value;
  incr[9] = document.GPAPercent.cr10.value;

  // Calculate GPA
  var allgr =0;
  var allcr = 0;
  var gpa = 0;
  for (var x = 0; x < 10; x++)
          {
          if (ingr[x] == "") break;
          if (isNaN(parseInt(incr[x]))) {
            alert("您输入的学分格式有错误！请输入正确的格式，例如：4.5、3 或 2.0");
            return 0;
          }
          var validgrcheck = 0;
          for (var xx = 0; xx < grcount; xx++)
                  {
                  if (ingr[x] >= gr[xx])
                          {
                          allgr = allgr + (parseInt(incr[x],10) * cr[xx]);
                          allcr = allcr + parseInt(incr[x],10);
                          validgrcheck = 1;
                          break;
                          }
                  }
          if (validgrcheck == 0)
                  {
                  alert("科目" + eval(x +  1) + "输入的分数格式有误！ 请输入标准的分数，例如：95、88或75");
                  return 0;
                  }
          }

  // this if-check prevents a divide by zero error
  if (isNaN(allcr) || allcr == 0)
          {
          alert("错误！您没有输入学分，GPA值为空！");
          return 0;
          }

  gpa = allgr / allcr;
  alert("GPA值为：" + eval(gpa));
  return 0;
}


// When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('gpa-percent');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
