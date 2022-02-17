const foo = () => {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

document.getElementById("demo").addEventListener("click", foo);