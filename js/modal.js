const modal = document.querySelector(".wrap");
const overlay = document.querySelector(".overlay");
const openModalBtns = document.querySelectorAll(".openModal");
const closeModalBtn = document.querySelector(".closeModal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    //document.body.style.marginRight = '17px';
};

openModalBtns .forEach(function(btn) {
    btn.addEventListener("click", openModal);
});

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.marginRight = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

closeModalBtn.addEventListener("click", closeModal);

const submitBtn = document.getElementById("submit");

const Submit = function () {
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var nameWarn = document.getElementById("name_warn");
    var numberWarn = document.getElementById("number_warn");

    if(name.value == ""){
        name.classList.remove("valid");
        name.classList.add("invalid");
        nameWarn.style.display = "block";
    }
    else{
        name.classList.remove("invalid");
        name.classList.add("valid");
        nameWarn.style.display = "none";
    }

    if(number.value == ""){
        number.classList.remove("valid");
        number.classList.add("invalid");
        numberWarn.style.display = "block";
    }
    else{
        number.classList.remove("invalid");
        number.classList.add("valid");
        numberWarn.style.display = "none";
    }
}

submitBtn.addEventListener("click", Submit);