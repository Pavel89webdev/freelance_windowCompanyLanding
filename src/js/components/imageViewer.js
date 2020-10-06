const imagesViewer = () => {
    const parentDiv = document.querySelector('.works');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    document.body.appendChild(popup);
    popup.addEventListener('click', (e) => {
        if(e.target.classList.contains('popup')){
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    const img = document.createElement('img');
    img.style.maxHeight = '80%';
    img.style.maxWidth = '80%';

    popup.appendChild(img);

    parentDiv.addEventListener('click', (e) => {
        console.log('click');
        if(e.target && e.target.classList.contains('preview')){
            e.preventDefault();
            const path = e.target.parentNode.getAttribute('href');
            img.setAttribute('src', path);
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
          
};

export default imagesViewer;