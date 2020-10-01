const modals = () =>{
    
    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    function bindModal(triggerSelector, modalSelector, closeSelector){
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        
        triggers.forEach( item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
    
            });
        });


        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                closeModal(modal);
            }
        });

    }

    const modalTimer = (modalSelector, closeSelector) => {
        setTimeout( () => {
            const modal = document.querySelector(modalSelector);
            modal.style.display = 'block';
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
    bindModal('.popup_calc_btn', '.popup_calc_profile', '.popup_calc_profile_close');
    modalTimer('.popup', '.popup .popup_close');


    //popup_calc_btn
};

export default modals;