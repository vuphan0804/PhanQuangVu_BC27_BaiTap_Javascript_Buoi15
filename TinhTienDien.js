function totalMoneyUseElectric() {
  var nameCustomer = document.getElementById("nameCustomer").value;
  var kwUse = document.getElementById("kwUse").value;
  var totalMoneyFinal;

  function calcMoney() {
    document.getElementById("showResult").style = "display:block; color:green";
    document.getElementById(
      "totalMoney"
    ).innerHTML = `Họ tên ${nameCustomer}. Tiền điện ${new Intl.NumberFormat(
      "vi-VN",
      { style: "currency", currency: "VND" }
    ).format(totalMoneyFinal)} `;
  }
  function errorText() {
    document.getElementById("showResult").style = "block; color:red";
    document.getElementById(
      "totalMoney"
    ).innerHTML = `Nhập không hợp lệ. Vui lòng nhập lại!`;
  }

  if (kwUse <= 0 || nameCustomer == "") {
    errorText();
  } else if (kwUse > 0 && kwUse <= 50) {
    totalMoneyFinal = kwUse * 500;
    calcMoney();
  } else if (kwUse > 50 && kwUse <= 100) {
    totalMoneyFinal = 50 * 500 + (kwUse - 50) * 650;
    calcMoney();
  } else if (kwUse > 100 && kwUse <= 200) {
    totalMoneyFinal = 50 * 500 + 50 * 650 + (kwUse - 100) * 850;
    calcMoney();
  } else if (kwUse > 200 && kwUse <= 350) {
    totalMoneyFinal = 50 * 500 + 50 * 650 + 100 * 850 + (kwUse - 200) * 1100;
    calcMoney();
  } else {
    totalMoneyFinal =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwUse - 350) * 1300;
    calcMoney();
  }
}
