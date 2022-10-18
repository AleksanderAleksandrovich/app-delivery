import tabs from "./modules/tabs";
import modal from "./modules/modal";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import timer from "./modules/timer";
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal("[data-modal]",".modal", modalTimerId);
    calc();
    cards();
    forms("form", modalTimerId);
    slider({
        conteiner: ".offer__slider",
        nextArrow: ".offer__slider-next",
        prewArow: ".offer__slider-prev",
        slide:  ".offer__slide",
        totalCounter: "#total",
        curentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });
    timer('.timer', "2022-10-25");
});
