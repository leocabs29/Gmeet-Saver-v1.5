const gmeetLink = document.getElementById("gmeet-link");
const subCode = document.getElementById("subject-code");
const list = document.getElementById("list-container");

function add() {
    let link = gmeetLink.value;
    let code = subCode.value;

    if (link === '' || code === '') {
        alert("Invalid");
    } else {
        let codeList = document.createElement("li");
        let removeBtn = document.createElement("button");
        codeList.innerHTML = code;
        codeList.dataset.link = link;

        codeList.addEventListener("click", function () {
            let link = codeList.dataset.link;
            if (link) {
                window.open(link, "_blank"); 
            }
        });

        removeBtn.textContent = "Remove";
        list.appendChild(codeList);
        list.appendChild(removeBtn);

        removeBtn.addEventListener("click", function () {
            codeList.remove();
            removeBtn.remove();
            saveData();
        });

        gmeetLink.value = '';
        subCode.value = '';
        saveData();
    }
}


function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");

    let removeButtons = document.querySelectorAll("ul#list-container button");
    removeButtons.forEach(function (removeBtn) {
        removeBtn.addEventListener("click", function () {
            let codeList = removeBtn.previousElementSibling;
            codeList.remove();
            removeBtn.remove();
            saveData();
        });
    });
 
}



