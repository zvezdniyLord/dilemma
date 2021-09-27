const addWorkspace = document.querySelector('.right-block-p');
const allBlocks = document.querySelector('.right-blocks');

let count = 0;

addWorkspace.addEventListener('click', () => {
    const newWorkspace = document.createElement('div');
    newWorkspace.classList.add('right-block');
    allBlocks.append(newWorkspace);
});