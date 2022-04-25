function handlePassUni() {
  var trueMark = +document.getElementById("trueMark").value;
  var areaPlus = +document.getElementById("areaPlus").value;
  var objectPlus = +document.getElementById("objectPlus").value;
  var firstMark = +document.getElementById("firstMark").value;
  var secondMark = +document.getElementById("secondMark").value;
  var thirdMark = +document.getElementById("thirdMark").value;

  //   Tính tổng điểm đạt được
  var sumMark = firstMark + secondMark + thirdMark + areaPlus + objectPlus;

  // So sánh với điểm chuẩn
  if (
    firstMark > 10 ||
    secondMark > 10 ||
    thirdMark > 10 ||
    trueMark === 0 ||
    trueMark === "" ||
    firstMark === "" ||
    secondMark === "" ||
    thirdMark === ""
  ) {
    document.getElementById("notifyText").style = "block";
    document.getElementById("notifyText").style = "color:red";
    document.getElementById(
      "notifyTextFinal"
    ).innerHTML = `Nhập điểm không hợp lệ. Vui lòng nhập lại`;
  } else if (firstMark === 0 || secondMark === 0 || thirdMark === 0) {
    document.getElementById("result").style = "block";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã rớt. Do có điểm liệt nhỏ hơn hoặc bằng 0`;
  } else if (sumMark >= trueMark) {
    document.getElementById("result").style = "block";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${sumMark}`;
    document.getElementById("result").style = "color:green";
  } else {
    document.getElementById("result").style = "block";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${sumMark}`;
    document.getElementById("result").style = "color:orange";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã rớt. Tổng điểm: ${sumMark}`;
  }
}
