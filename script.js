let slider=document.querySelector(".pass-length input");
let clickbtn=document.querySelector(".div-btn");
let options=document.querySelectorAll(".option input");
let inputfield=document.querySelector(".input-wrapper input");
let passindi=document.querySelector(".pass-indicator");
let copyicon=document.querySelector(".input-wrapper .copy-icon")
const characters={
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    Uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Numbers:"0123456789",
    Symbols:"!@#$%^&*()_+[]{}~`",

}

let generatepassword = () => {
    let staticpassword = "";
    let passlen = slider.value;
    let random = "";
    let anyChecked = false;

    options.forEach(option => {
        if (option.checked) {
            staticpassword += characters[option.id];
            anyChecked = true;
        }
    });

    if (!anyChecked) {
        document.getElementById('customAlert').style.display = 'flex';
        return; 
    }

    for (let i = 1; i <= passlen; i++) {
        random += staticpassword[Math.floor(Math.random() * staticpassword.length)];
    }

    inputfield.value = random;
};


document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('customAlert').style.display = 'none';
});

let updatepassiindi = () => {
    passindi.id = slider.value <= 8 ? "Weak" : slider.value <= 16 ? "Medium" : "Strong";
};

let updateslide = () => {
    document.querySelector(".pass-length span").innerText = slider.value;
    generatepassword(); 
    updatepassiindi(); 
};

updateslide();

let copypass = () => {
    navigator.clipboard.writeText(inputfield.value);
    copyicon.classList.remove("fa-copy"); 
    copyicon.innerText = "✓"; 
    setTimeout(() => {
        copyicon.innerText = ""; 
        copyicon.classList.add("fa-copy"); 
    }, 2000); 
};

copyicon.addEventListener("click", copypass);
slider.addEventListener("input", updateslide);
clickbtn.addEventListener("click", generatepassword);



