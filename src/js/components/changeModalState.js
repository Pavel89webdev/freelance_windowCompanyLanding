import inputNumValid from './inputNumValid';

const changeModalState = (state) => {
    const  typeButtons = document.querySelectorAll('[data-type]'),
           width = document.querySelectorAll('#width'),
           height = document.querySelectorAll('#height'),
           viewType = document.querySelectorAll('#view_type'),
           tempCheckboxes = document.querySelectorAll('[name="checkbox-test"]');

    inputNumValid(width);
    inputNumValid(height);

    const bindActionToState = (elems, action, prop) => {
        elems.forEach( (item, i) => {
            item.addEventListener(action, () => {
                switch( item.nodeName){
                    case 'IMG':
                        state[prop] = `Форма балкона: ${++i}`;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('id') === 'width'){
                            state[prop] = item.value;
                        } else 
                        if(item.getAttribute('id') === 'height'){
                            state[prop] = item.value;
                        } else 
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elems.forEach( (box ,j) => {
                                box.checked = false;
                                if( j === i){
                                    box.checked = true;
                                }
                            });
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }   
            });
        });
    };

    bindActionToState(typeButtons, 'click', 'form');
    bindActionToState(width, 'input', 'width');
    bindActionToState(height, 'input', 'height');
    bindActionToState(viewType, 'change', 'type');
    bindActionToState(tempCheckboxes, 'click', 'cold/warm');
};

export default changeModalState;