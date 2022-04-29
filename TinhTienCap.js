function totalMoneyForService() {
  var chooseCustomer = document.getElementById("chooseCustomer").value;
  var nameCustomer = document.getElementById("nameCustomer").value;
  var totalChannel = +document.getElementById("totalChannel").value;
  var totalMoney = +document.getElementById("totalMoney").value;
  var showMoneyEl = document.getElementById("showMoney");
  var totalConnector = +document.getElementById("totalConnector").value;
  console.log(chooseCustomer);

  function showTextResult() {
    showMoneyEl.style = "display:block";
    document.getElementById("totalMoney").style = "color:green";
    document.getElementById(
      "totalMoney"
    ).innerHTML = `Mã khách hàng: ${nameCustomer}. Tiền cáp: ${new Intl.NumberFormat(
      "en-US",
      { style: "currency", currency: "USD" }
    ).format(totalMoney)}`;
  }

  function showTextError() {
    showMoneyEl.style = "display:block;";
    document.getElementById("totalMoney").style = "color:red";
    document.getElementById(
      "totalMoney"
    ).innerHTML = `Nhập không hợp lệ. Vui lòng nhập lại!`;
  }

  function calcPersonal() {
    totalMoney = 4.5 + 20.5 + 7.5 * totalChannel;
    showTextResult();
  }

  function calcCorporation() {
    if (totalConnector <= 10) {
      totalMoney = 15 + 75 + 50 * totalChannel;
    } else {
      totalMoney = 15 + 75 + (totalConnector - 10) * 5 + 50 * totalChannel;
    }
    showTextResult();
  }

  if (
    chooseCustomer == 0 ||
    chooseCustomer == "" ||
    nameCustomer == "" ||
    totalChannel == ""
  ) {
    showTextError();
  } else if (chooseCustomer == 2) {
    calcCorporation();
  } else {
    calcPersonal();
  }
}
function appearConnecter() {
  var showConnecterEl = document.getElementById("showConnecter");
  var valueConnecter = +document.getElementById("chooseCustomer").value;

  if (valueConnecter == 2) {
    showConnecterEl.style = "display:block";
  } else {
    showConnecterEl.style = "display:none";
  }
  console.log(valueConnecter);
}
