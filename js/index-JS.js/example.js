var x = document.getElementById("btn-change-text").addEventListener("click", changeText);
function changeText() {
    console.log(x);
    if (document.getElementById("btn-change-here").innerHTML === "Remove") {
        document.getElementById("btn-change-here").innerHTML = "Show More";
    } else {
        document.getElementById("btn-change-here").innerHTML = "Remove";
    }
};