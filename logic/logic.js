const addWorkspace = document.querySelector('.right-block-plus');
const allBlocks = document.querySelector('.right-blocks');
const addOneLevel = document.querySelector('.title-add');
const oneLevel = document.querySelector('.one-level');


addWorkspace.addEventListener('click', () => {
    const newWorkspace = document.createElement('div');
    newWorkspace.classList.add('right-block');
    allBlocks.append(newWorkspace);
});

addOneLevel.addEventListener('click', () => {
    const newOneLevel = document.createElement('p');
    newOneLevel.classList.add('one-level');
    oneLevel.append(newOneLevel);
});








