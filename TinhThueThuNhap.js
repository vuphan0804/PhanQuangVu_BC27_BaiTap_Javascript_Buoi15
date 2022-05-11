function totalTaxOfCustomer() {
  var nameCustomer = document.getElementById("nameCustomer").value;
  var totalIncome = document.getElementById("totalIncome").value;
  var dependantPeople = document.getElementById("dependantPeople").value;
  var showTaxEl = document.getElementById("showTax");
  var showTotalTaxEl = document.getElementById("showTotalTax");

  var annualSalaryTax = totalIncome - 4e6 - dependantPeople * 16e5;
  if (totalIncome <= 0) {
    showTaxEl.style.display = "block";
    showTotalTaxEl.style.color = "red";
    showTotalTaxEl.innerHTML = `Nhập vào không hợp lệ. Vui lòng nhập lại!`;
  } else {
    showTaxEl.style.display = "block";
    showTotalTaxEl.style.color = "blue";
    showTotalTaxEl.innerHTML = `Họ tên: ${nameCustomer}. Tiền thuế thu nhập cá nhân: ${totalTax(
      annualSalaryTax
    ).toLocaleString()} VND`;
  }
}

function totalTax(annualSalaryTax) {
  if (annualSalaryTax <= 60e6) {
    return 0.05 * annualSalaryTax;
  } else if (annualSalaryTax <= 120e6) {
    return 0.1 * annualSalaryTax;
  } else if (annualSalaryTax <= 210e6) {
    return 0.15 * annualSalaryTax;
  } else if (annualSalaryTax <= 384e6) {
    return 0.2 * annualSalaryTax;
  } else if (annualSalaryTax <= 624e6) {
    return 0.25 * annualSalaryTax;
  } else if (annualSalaryTax <= 960e6) {
    return 0.3 * annualSalaryTax;
  } else {
    return 0.35 * annualSalaryTax;
  }
}
