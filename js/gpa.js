function gpacalc() {
  //define valid grades and their values
  var gr = new Array(12);
  var cr = new Array(12);
  var ingr = new Array(12);
  var incr = new Array(12);

  // define valid grades and their values
  var grcount = 12;
  gr[0] = "A+";
  cr[0] = 4;
  gr[1] = "A";
  cr[1] = 4;
  gr[2] = "A-";
  cr[2] = 3.7;
  gr[3] = "B+";
  cr[3] = 3.3;
  gr[4] = "B";
  cr[4] = 3;
  gr[5] = "B-";
  cr[5] = 2.7;
  gr[6] = "C+";
  cr[6] = 2.3;
  gr[7] = "C";
  cr[7] = 2;
  gr[8] = "C-";
  cr[8] = 1.7;
  gr[9] = "D+";
  cr[9] = 1.3;
  gr[10] = "D";
  cr[10] = 1;
  gr[11] = "F";
  cr[11] = 0;
  // retrieve user input
  ingr[0] = document.GPACalculator.gr1.value;
  ingr[1] = document.GPACalculator.gr2.value;
  ingr[2] = document.GPACalculator.gr3.value;
  ingr[3] = document.GPACalculator.gr4.value;
  ingr[4] = document.GPACalculator.gr5.value;
  ingr[5] = document.GPACalculator.gr6.value;
  ingr[6] = document.GPACalculator.gr7.value;
  ingr[7] = document.GPACalculator.gr8.value;
  ingr[8] = document.GPACalculator.gr9.value;
  ingr[9] = document.GPACalculator.gr10.value;
  incr[0] = document.GPACalculator.cr1.value;
  incr[1] = document.GPACalculator.cr2.value;
  incr[2] = document.GPACalculator.cr3.value;
  incr[3] = document.GPACalculator.cr4.value;
  incr[4] = document.GPACalculator.cr5.value;
  incr[5] = document.GPACalculator.cr6.value;
  incr[6] = document.GPACalculator.cr7.value;
  incr[7] = document.GPACalculator.cr8.value;
  incr[8] = document.GPACalculator.cr9.value;
  incr[9] = document.GPACalculator.cr10.value;

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
                  if (ingr[x] == gr[xx])
                          {
                          allgr = allgr + (parseInt(incr[x],10) * cr[xx]);
                          allcr = allcr + parseInt(incr[x],10);
                          validgrcheck = 1;
                          break;
                          }
                  }
          if (validgrcheck == 0)
                  {
                  alert("科目" + eval(x +  1) + "输入的分数格式有误！ 请输入标准的分数等级，例如：A+、A 或 B+");
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
// var modal = document.getElementById('gpa-calculator');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
