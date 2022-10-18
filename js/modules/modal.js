const openModal = (modalSelector, modalTimerId) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
    
};
const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

function modal(triggerSelector, modalSelector, modalTimerID) {
    //modal

    const btnShow = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    

    btnShow.forEach((btn) => {
        btn.addEventListener("click", () => openModal(modalSelector, modalTimerID));
    });

    

    modal.addEventListener("click", (event) => {
        if (
            event.target === modal ||
            event.target.getAttribute("data-close") == ""
        ) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });
    

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
}
export default modal;
export {closeModal, openModal};
