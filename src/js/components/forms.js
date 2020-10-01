// собрать вес формы и инпуты
// навесить обработчик событий сабмит на формы
// при срабатывании запускать отправку на сервер форм датф через фетч (асинхронность- осторожно!) и подстановку сообщени о загрузке и отчищеть все инпуты
// сделать объект сообщений с разными текстами
// при кетче - выводит сообщение о ошибке

const forms = () => {
    const allForms = document.querySelectorAll('form'),
          allInputs = document.querySelectorAll('input'),
          allPhoneInputs = document.querySelectorAll('input[name="user_phone"]');

    allPhoneInputs.forEach( item => {
        item.addEventListener('input', () => {
            
            item.value = item.value.replace(/[^1-9\+\-]/g, '');
            
        });
    });

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