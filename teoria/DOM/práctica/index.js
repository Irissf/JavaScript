const color = document.getElementById("color__selector");
const nameColor = document.querySelector(".show__name");


const button = document.querySelector(".show__button");
button.addEventListener(("click"),()=>{
    console.log(color.value);
    nameColor.textContent= color.value;
    document.documentElement.style.setProperty("--color-primary",color.value)
});