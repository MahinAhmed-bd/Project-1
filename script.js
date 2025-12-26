// let age;
// age = Number(window.prompt("Enter your age :"));
// if (age <= 18) {
//     console.log("You cannot enter here.")
//     false;
// } else {
//     console.log("Welcome");
//     true;
// }
// document.getElementById("webhead").textContent = "hi";
document.getElementById("btn1").onclick = function () {
    let text = document.getElementById("inp1").value;
    document.getElementById("webhead").innerText = text;
}