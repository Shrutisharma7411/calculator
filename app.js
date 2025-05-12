let inputvalue = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let result = "";

let buttonsArr = Array.from(buttons);

buttonsArr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML.trim();

        if (btnText === "=") {
            try {
                result = eval(result);
                inputvalue.value = result;
            } catch {
                inputvalue.value = "Error";
                result = "";
            }
        } else if (btnText === "AC") {
            result = "";
            inputvalue.value = result;
        } else if (btnText === "DEL") {
            result = result.slice(0, -1);
            inputvalue.value = result;
        } else {
            result += btnText;
            inputvalue.value = result;
        }
    });
});
