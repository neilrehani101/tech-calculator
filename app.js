let screen = document.getElementById('screen');
let btns = document.querySelectorAll('.btn');
let screenVal = "";
for (item of btns) {
    item.addEventListener('click', e => {
        if (e.target.innerText == "÷")
        {
            btnText = "/";
            screenVal += btnText
            screen.value += btnText
        }
        else if (e.target.innerText == "CC")
        {
            screenVal = ""
            screen.value = ""
        }
        else if (e.target.innerText == "⌫")
        {
            screenVal = screen.value.substring(0, screen.value.length - 1);
            screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        else if (e.target.innerText == "="){
            screen.value = eval(screenVal)
        }
        else {
            btnText = e.target.innerText
            screenVal += btnText
            screen.value += btnText
        }

    })
}
