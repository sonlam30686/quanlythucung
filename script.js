"use strict";
const petID = document.getElementById("input-id");
const petName = document.getElementById("input-name");
const petAge = document.getElementById("input-age");
const petType = document.getElementById("input-type");
const petWeight = document.getElementById("input-weight");
const petLength = document.getElementById("input-length");
const petColor = document.getElementById("input-color-1");
const petBreed = document.getElementById("input-breed");
const petVaccin = document.getElementById("input-vaccinated");
const petDewormed = document.getElementById("input-dewormed");
const petSterilized = document.getElementById("input-sterilized");
const btnSubmit = document.getElementById("submit-btn");
const tbody = document.getElementById("tbody");
const deleteBtn = document.querySelector(".btn btn-danger");
const btnHealthy = document.getElementById("healthy-btn");
const btnCalculate = document.getElementById("calBMI-btn");

//Clear dữ liệu
const clearInput = () => {
  petID.value = "";
  petName.value = "";
  petAge.value = "";
  petType.value = "Select Type";
  petWeight.value = "";
  petLength.value = "";
  petColor.value = "#000000";
  petBreed.value = "Select Breed";
  petVaccin.checked = false;
  petDewormed.checked = false;
  petSterilized.checked = false;
};

//lấy dữ liệu từ form
const getDate = function () {
  const dateStare = new Date();
  let day = dateStare.getDay();
  let month = dateStare.getMonth() + 1;
  const year = dateStare.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return day + "/" + month + "/" + year;
};

//hàm check dữ liệu
function validateCheck(data) {
  // let check = true;
  if (petID.value == "") {
    alert("Bạn hãy nhập ID cho thú cưng");
    petID.focus();
    petID.style.borderColor = "red";
    return false;
  } else {
    petID.style.borderColor = "green";
  }

  for (let i = 0; i < petArr.length; i++) {
    if (data.id === petArr[i].id) {
      alert("ID thú cưng không được trùng nhau");
      petID.focus();
      petID.style.borderColor = "red";
      return false;
    } else {
      petID.style.borderColor = "green";
    }
  }

  if (petName.value == "") {
    alert("Bạn hãy nhập tên cho thú cưng");
    petName.focus();
    petName.style.borderColor = "red";
    return false;
  } else {
    petName.style.borderColor = "green";
  }
  if (
    petAge.value == "" ||
    isNaN(petAge.value) ||
    Number(petAge.value) > 15 ||
    Number(petAge.value) < 1
  ) {
    alert("Bạn hãy nhập chính xác tuổi của thú cưng");
    petAge.focus();
    petAge.style.borderColor = "red";
    return false;
  } else {
    petAge.style.borderColor = "green";
  }
  if (petType.value == "Select Type") {
    alert("Bạn hãy chọn loại thú cưng");
    petType.focus();
    petType.style.borderColor = "red";
    return false;
  } else {
    petType.style.borderColor = "green";
  }
  if (
    petWeight.value == "" ||
    isNaN(petWeight.value) ||
    Number(petWeight.value) > 15 ||
    Number(petWeight.value) < 1
  ) {
    alert("Bạn hãy nhập cân nặng của thú cưng");
    petWeight.focus();
    petWeight.style.borderColor = "red";
    return false;
  } else {
    petWeight.style.borderColor = "green";
  }
  if (
    petLength.value == "" ||
    Number(petLength.value) > 100 ||
    Number(petLength.value) < 1
  ) {
    alert("Bạn hãy nhập chiều cao của thú cưng");
    petLength.focus();
    petLength.style.borderColor = "red";
    return false;
  } else {
    petLength.style.borderColor = "green";
  }
  if (petBreed.value == "Select Breed") {
    alert("Bạn hãy chọn giống của thú cưng");
    petBreed.focus();
    petBreed.style.borderColor = "red";
    return false;
  } else {
    petBreed.style.borderColor = "green";
  }

  return true;
}

//render data
function renderTableData(petArr) {
  //tbody.innerHTML = "";
  //lấy Icon check
  tbody.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    //render
    const row = document.createElement(`tr`);
    row.innerHTML = `
  <th scope="row">${petArr[i].id}</th>
<td>${petArr[i].name}</td>
<td>${petArr[i].age}</td>
<td>${petArr[i].type}</td>
<td>${petArr[i].weight} kg</td>
<td>${petArr[i].length} cm</td>
<td>${petArr[i].breed}</td>
<td>
<i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
</td>
<td><i class="${
      petArr[i].vaccinated ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
    } "></i></td>
<td><i class="${
      petArr[i].dewormed ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
    }"></i></td>
<td><i class="${
      petArr[i].sterilized ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
    }"></i></td>
    <td>${petArr[i].bmi}</td>
<td>${petArr[i].date}</td>
<td>
<button type="button" class="btn btn-danger" onclick="deleteRow(this)
    ">Delete</button>
</td>`;
    tbody.appendChild(row);
  }
}

const petArr = new Array();
const data1 = {
  id: "P001",
  name: "Tom",
  age: 3,
  type: "Cat",
  weight: 5,
  length: 50,
  color: "red",
  breed: "Tabby",
  vaccinated: true,
  sterilized: true,
  dewormed: true,
  bmi: "?",
  date: getDate(2022, 3, 2),
};

const data2 = {
  id: "P002",
  name: "Tyke",
  age: 5,
  type: "Dog",
  weight: 3,
  length: 40,
  color: "green",
  breed: "Mixed Breed",
  vaccinated: false,
  sterilized: false,
  dewormed: false,
  bmi: "?",
  date: getDate(2022, 3, 2),
};

const data3 = {
  id: "P003",
  name: "Mike",
  age: 3,
  type: "Cat",
  weight: 6,
  length: 70,
  color: "plum",
  breed: "Mixed Breed",
  vaccinated: true,
  sterilized: false,
  dewormed: true,
  bmi: "?",
  date: getDate(2022, 3, 2),
};

petArr.push(data1);
petArr.push(data2);
petArr.push(data3);

renderTableData(petArr);
function deleteRow(r) {
  //lấy vị trí của thú cưng trong Array
  let i = r.parentElement.parentElement.rowIndex - 1;
  if (
    //confirm xóa thú cưng
    confirm(
      `Bạn chắc chắn xóa thú cưng có ID: ${petArr[i].id} tên là: ${petArr[i].name}`
    )
  ) {
    //tiến hành xóa thú cưng đúng vị trí trong Array
    petArr.splice(i, 1);
    renderTableData(petArr);
  }
}

let healthyCheck = true;
btnHealthy.addEventListener("click", function () {
  if (healthyCheck === true) {
    let healthyPetArr = petArr.filter((petArr) => {
      return petArr.vaccinated && petArr.dewormed && petArr.sterilized;
    });
    console.log(healthyPetArr);
    renderTableData(healthyPetArr);
    btnHealthy.textContent = "Show All Pets";
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    btnHealthy.textContent = "Show Healthy Pets";
    healthyCheck = true;
  }
});

btnSubmit.addEventListener("click", function (e) {
  let data = {
    id: petID.value.toUpperCase(),
    name: petName.value,
    age: parseInt(petAge.value),
    type: petType.value,
    weight: parseInt(petWeight.value),
    length: parseInt(petLength.value),
    breed: petBreed.value,
    color: petColor.value,
    vaccinated: petVaccin.checked,
    dewormed: petDewormed.checked,
    sterilized: petSterilized.checked,
    bmi: "?",
    date: getDate(),
  };

  const validate = validateCheck(data);
  if (validate) {
    petArr.push(data);
    // renderTable(petArr);
    const renderTable = renderTableData(petArr);
    //clear form
    clearInput();
  }
});

//Hàm tính BMI
btnCalculate.onclick = function () {
  for (let i = 0; i < petArr.length; i++) {
    petArr[i].bmi =
      petArr[i].type === "Dog"
        ? ((petArr[i].weight * 703) / petArr[i].length ** 2).toFixed(2)
        : ((petArr[i].weight * 886) / petArr[i].length ** 2).toFixed(2);
  }
  renderTableData(petArr);
};
