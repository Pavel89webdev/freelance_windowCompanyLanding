const modals = () =>{
    
    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    const closeAllModal = () => {
        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach( item => {
            item.style.display = 'none';
        });
        document.body.style.overflow = '';
    };

    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverflow = true){
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        
        triggers.forEach( item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }

                closeAllModal();

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
    
            });
        });


        close.addEventListener('click', () => {
            closeAllModal();
        });

        if(closeOverflow){
            modal.addEventListener('click', (e) => {
                if(e.target === modal){
                    closeModal(modal);
                }
            });
        }
    }

    const modalTimer = (modalSelector, closeSelector) => {
        setTimeout( () => {
            const modal = document.querySelector(modalSelector);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
    
            const close = document.querySelector(closeSelector);

            modal.addEventListener('click', (e) => {
                if(e.target === modal){
                    closeModal(modal);
                }
            });

            close.addEventListener('click', () => {
                closeModal(modal);
            });

        }, 60000);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false );
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false );
    

    modalTimer('.popup', '.popup .popup_close');
};

export default modals;