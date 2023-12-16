let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {

    navbar.classList.toggle('active');


}

window.onscroll = () => {
    navbar.classList.remove('active');
}


// contactus

const inputs = document.querySelectorAll(".content-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });

    ipt.addEventListener("blur", () => {

        ipt.parentNode.classList.remove("focus");
        if(ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        else{
            ipt.parentNode.classList.add("lbcolor");
        }

    });
});

const ta1 = document.querySelector(".ta1");

ta1.addEventListener("focus", () => {

    ta1.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");

});

ta1.addEventListener("blur", () => {

    ta1.parentNode.classList.remove("focus");
    if(ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
    }
    else{
        ipt.parentNode.classList.add("lbcolor");
    }


});