let submitFormEle = document.getElementById("submitForm");
let firstNameEle = document.getElementById("firstName");
let lastNameEle = document.getElementById("lastName");
let emailEle = document.getElementById("eMail");
let messageEle = document.getElementById("message");
let checkBoxIdEle = document.getElementById("checkBoxId");
let buttonEle = document.getElementById("button");

let firstNameErrorEle = document.getElementById("firstNameErrorMsg");
let lastNameErrorMsgEle = document.getElementById("lastNameErrorMsg");
let requiredEmailErrorMsgEle = document.getElementById("requiredEmailErrorMsg");
let messageErrorMsgEle = document.getElementById("messageErrorMsg");
let checkBoxIdErrorMsgEle = document.getElementById("checkBoxIdErrorMsg");
let queryErrorMsgEle = document.getElementById("queryErrorMsg");

let generalQueryEle = document.getElementById("generalQuery");
let supportQueryEle = document.getElementById("supportQuery");
let checkBoxSuccessEle = document.getElementById("checkBoxSuccess");

let dataForm = {
  fName: "",
  lName: "",
  email: "",
  query: "",
  message: "",
};
let queryType = null;
firstNameEle.addEventListener("blur", function (e) {
  let val1 = e.target.value;
  if (val1 === "") {
    firstNameErrorEle.textContent = "This field is required";
    firstNameErrorEle.style.color = "red";
    firstNameEle.classList.add("input-error");
  } else {
    firstNameErrorEle.textContent = "";
    firstNameEle.classList.remove("input-error");
  }
  dataForm.fName = e.target.value;
});

lastNameEle.addEventListener("blur", function (e) {
  let val = e.target.value;
  if (val === "") {
    lastNameErrorMsgEle.textContent = "This field is required";
    lastNameErrorMsgEle.style.color = "red";
    lastNameEle.classList.add("input-error");
  } else {
    lastNameErrorMsgEle.textContent = "";
    lastNameEle.classList.remove("input-error");
  }
  dataForm.lName = val;
});

emailEle.addEventListener("blur", function (e) {
  let val2 = e.target.value;
  if (val2 === "") {
    requiredEmailErrorMsgEle.textContent = "This field is required";
    requiredEmailErrorMsgEle.style.color = "red";
    emailEle.classList.add("input-error");
  } else if (val2.endsWith("@gmail.com") === false) {
    requiredEmailErrorMsgEle.textContent = "Please enter a valid email address";
    requiredEmailErrorMsgEle.style.color = "red";
  } else {
    requiredEmailErrorMsgEle.textContent = "";
    emailEle.classList.remove("input-error");
  }
  dataForm.email = val2;
});
generalQueryEle.addEventListener("change", function (e) {
  let val3 = generalQueryEle.value;
  dataForm.query = val3;
  queryType = val3;
});
supportQueryEle.addEventListener("change", function (e) {
  let val4 = supportQueryEle.value;
  dataForm.query = val4;
  queryType = val4;
});

messageEle.addEventListener("blur", function (e) {
  let val5 = e.target.value;
  if (val5 === "") {
    messageErrorMsgEle.textContent = "This field is required";
    messageErrorMsgEle.style.color = "red";
    messageEle.classList.add("input-error");
  } else {
    messageErrorMsgEle.textContent = "";
    messageEle.classList.remove("input-error");
  }
  dataForm.message = val5;
});
console.log(queryType);
let checkBoxVal = false;
checkBoxIdEle.addEventListener("blur", function (e) {
  let val6 = false;
  /*console.log(checkBoxIdEle.checked)*/
  if (val6.checked === true) {
    checkBoxIdErrorMsgEle.textContent = "";
  } else {
    checkBoxIdErrorMsgEle.textContent =
      "To submit this form, please consent to being contacted";
    checkBoxIdErrorMsgEle.style.color = "red";
  }
  checkBoxVal = val6;
});
console.log(checkBoxVal);
function formValidationss(dataForm) {
  let { fName, lName, email, query, message } = dataForm;
  if (fName === "") {
    firstNameErrorEle.textContent = "This field is required";
    firstNameErrorEle.style.color = "red";
    firstNameEle.classList.add("input-error");
  } else {
    firstNameEle.classList.remove("input-error");
  }

  if (lName === "") {
    lastNameErrorMsgEle.textContent = "This field is required";
    lastNameErrorMsgEle.style.color = "red";
    lastNameEle.classList.add("input-error");
  } else {
    lastNameEle.classList.remove("input-error");
  }
  if (email === "") {
    requiredEmailErrorMsgEle.textContent = "This feild is required";
    requiredEmailErrorMsgEle.style.color = "red";
    emailEle.classList.add("input-error");
  } else if (email.endsWith("@gmail.com") !== true) {
    requiredEmailErrorMsgEle.textContent = "Please enter a valid email address";
    requiredEmailErrorMsgEle.style.color = "red";
    emailEle.classList.add("input-error");
  } else {
    emailEle.classList.remove("input-error");
  }
  if (query === "") {
    queryErrorMsgEle.textContent = "Please select a query type";
    queryErrorMsgEle.style.color = "red";
  } else {
    queryErrorMsgEle.textContent = "";
  }
  if (message === "") {
    messageErrorMsgEle.textContent = "This field is required";
    messageErrorMsgEle.style.color = "red";
    messageEle.classList.add("input-error");
  } else {
    messageEle.classList.remove("input-error");
  }
}
checkBoxIdEle.classList.remove("d-none");
checkBoxIdEle.checked = false;
if (checkBoxIdEle.checked === true) {
  checkBoxIdEle.classList.add("d-none");
  checkBoxSuccessEle.classList.remove("d-none");
} else {
  checkBoxIdEle.classList.remove("d-none");
}
function submitFormFun() {
  if (checkBoxIdEle.checked === false) {
    checkBoxIdErrorMsgEle.textContent =
      "To submit this form, please consent to being contacted";
    checkBoxIdErrorMsgEle.style.color = "red";
  } else if (checkBoxIdEle.checked === true) {
    checkBoxIdErrorMsgEle.textContent = "";
    checkBoxIdEle.style.backgroundColor = "green";
  }
}
let successCardEle = document.getElementById("successCard");
let cardContainerEle = document.getElementById("cardContainer");

let valuesss = submitFormEle.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidationss(dataForm);
  submitFormFun();
  console.log(dataForm);
  if (
    firstNameEle.value !== "" &&
    lastNameEle.value !== "" &&
    emailEle.value !== "" &&
    messageEle.value !== "" &&
    checkBoxIdEle.checked === true &&
    (generalQueryEle.checked === true || supportQueryEle.checked === true)
  ) {
    successCardEle.classList.remove("d-none");
    cardContainerEle.classList.remove("mt-5");
    firstNameEle.value = "";
    lastNameEle.value = "";
    messageEle.value = "";
    checkBoxIdEle.checked = false;
    emailEle.value = "";
    generalQueryEle.checked = false;
    supportQueryEle.checked = false;
  }
});
