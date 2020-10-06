const inputNumValid = (inputs) => {
    inputs.forEach( item => {
        item.addEventListener('input', () => {
            
            item.value = item.value.replace(/[^1-9\+\-]/g, '');
            
        });
    });
};

export default inputNumValid;