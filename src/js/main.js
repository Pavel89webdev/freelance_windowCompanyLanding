import "./slider";
import modals from './components/modals';
import tabs from "./components/tabs";
import forms from './components/forms';
import changeModalState from './components/changeModalState';
import timer from './components/timer';
import imageViewer from './components/imageViewer';

document.addEventListener('DOMContentLoaded', () => {

    let modalState = {
        form: 'Форма балкона: 1'
    };

    modals();

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click' );
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');


    forms(modalState);

    changeModalState(modalState);

    timer('2020-11-04');

    imageViewer();
});
