const boxes = document.querySelectorAll(".boxx");
const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((boxx) => {
        const boxTop = boxx.getBoundingClientRect().top;
        if (boxTop < triggerBottom) boxx.classList.add("show");
        else boxx.classList.remove("show");
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()