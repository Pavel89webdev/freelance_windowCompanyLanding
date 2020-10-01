import "./slider";
import modals from './components/modals';
import tabs from "./components/tabs";
import forms from './components/forms';

document.addEventListener('DOMContentLoaded', () => {
    modals();

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click' );


    forms();
});
