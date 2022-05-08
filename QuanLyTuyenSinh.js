function handlePassUni() {
  // check empty string

  strTrueMark = document.getElementById("trueMark").value;
  trueMark = +document.getElementById("trueMark").value;
  areaPlus = +document.getElementById("areaPlus").value;
  objectPlus = +document.getElementById("objectPlus").value;
  strFirstMark = document.getElementById("firstMark").value;
  firstMark = +document.getElementById("firstMark").value;
  strSecondMark = document.getElementById("secondMark").value;
  secondMark = +document.getElementById("secondMark").value;
  strThirdMark = document.getElementById("thirdMark").value;
  thirdMark = +document.getElementById("thirdMark").value;
  if (
    firstMark > 10 ||
    secondMark > 10 ||
    thirdMark > 10 ||
    trueMark > 30 ||
    strTrueMark === "" ||
    strFirstMark === "" ||
    strSecondMark === "" ||
    strThirdMark === ""
  ) {
    return invalidInput();
  }

  console.log("kiki", typeof strTrueMark);
  //   Tính tổng điểm đạt được
  var sumMark = firstMark + secondMark + thirdMark + areaPlus + objectPlus;

  // So sánh với điểm chuẩn
  if (firstMark === 0 || secondMark === 0 || thirdMark === 0) {
    failWithZeroMark();
  } else if (sumMark >= trueMark) {
    passExamUni(sumMark);
    console.log("dau r");
  } else {
    failExamUni(sumMark);
    console.log("rot roi");
  }
}

function invalidInput() {
  document.getElementById("result").style = "block";
  document.getElementById("result").style = "color:red";
  document.getElementById(
    "resultFinal"
  ).innerHTML = `Nhập điểm không hợp lệ. Vui lòng nhập lại`;
}
function passExamUni(sumMark) {
  document.getElementById("result").style = "block";
  document.getElementById(
    "resultFinal"
  ).innerHTML = `Bạn đã đậu. Tổng điểm: ${sumMark}`;
  document.getElementById("result").style = "color:green";
}
function failExamUni(sumMark) {
  document.getElementById("result").style = "block";
  document.getElementById("result").style = "color:orange";
  document.getElementById(
    "resultFinal"
  ).innerHTML = `Bạn đã rớt. Tổng điểm: ${sumMark}`;
}
function failWithZeroMark() {
  document.getElementById("result").style = "block";
  document.getElementById(
    "resultFinal"
  ).innerHTML = `Bạn đã rớt. Do có điểm liệt nhỏ hơn hoặc bằng 0`;
}
