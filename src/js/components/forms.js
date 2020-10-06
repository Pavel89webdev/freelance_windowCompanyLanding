import inputNumValid from './inputNumValid';

const forms = (state) => {
    const allForms = document.querySelectorAll('form'),
          allInputs = document.querySelectorAll('input'),
          allPhoneInputs = document.querySelectorAll('input[name="user_phone"]');
         
    inputNumValid(allPhoneInputs);          

    const sendFormData = async (url, formData) => {
        const res = await fetch(url, {
            method: 'POST',
            body: formData
        })
        .then( response => response.text());

        return res;
    };

    const message = {
        loading: 'Загрузка данных...',
        succes: 'Данные успешно отправленны',
        error: 'Что-то пошло не так'
    };

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('status');

    const removeMessageDiv = () => {
        messageDiv.remove();
    };
    
    const clearAllInputs = () => {
        allInputs.forEach( item => {
        item.value = ''; 
        });
    };
    
    allForms.forEach( item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            item.appendChild(messageDiv);
            messageDiv.textContent = message.loading;

            const formData = new FormData(item);

            if( item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }

            sendFormData('assets/server.php', formData)
                .then( res => {
                    console.log(res);
                    messageDiv.textContent = message.succes;
                    clearAllInputs();

                    setTimeout( () => {
                        removeMessageDiv();
                    }, 3000);

                    })
                .catch( (e) => {
                    console.log(e);
                    messageDiv.textContent = message.error;

                    setTimeout( () => {
                        removeMessageDiv();
                    }, 3000);
                });   
        });
    });
};

export default forms;