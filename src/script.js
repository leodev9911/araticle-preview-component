const shareButton = document.querySelector('figure');
const shareSectionToggle = document.querySelector('.active-share-container');



const toggleShareButton = () => {
    shareSectionToggle.classList.toggle('hide');
}
shareButton.addEventListener('click', toggleShareButton);

