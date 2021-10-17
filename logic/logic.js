const addWorkspace = document.querySelector('.right-block-plus');
const allBlocks = document.querySelector('.right-blocks');
const addOneLevel = document.querySelector('.title-add');
const levelsBlock = document.querySelector('.levels-block');
const allTabs = document.querySelector('.right-tabs');
const addTabInput = document.querySelector('.right-add-tab');
const btnAddTab = document.querySelector('.btn-add-tab');
const titleText = document.querySelector('.title-text');   
const levelsItems = document.querySelector('.levels-items');     




addWorkspace.addEventListener('click', () => {
    const newWorkspace = document.createElement('div');
    newWorkspace.classList.add('right-block');
    allBlocks.append(newWorkspace);
});

addOneLevel.addEventListener('click', () => {
    const newOneLevel = document.createElement('p');
    newOneLevel.classList.add('one-level');
    newOneLevel.innerText = titleText.value;

    levelsBlock.appendChild(newOneLevel);
});

btnAddTab.addEventListener('click', () => {
    const newTab = document.createElement('div');
    newTab.classList.add('right-tab');
    const newText = addTabInput.value;
    const emptyStr = newText.trim() === '';
    if (emptyStr === true) {
        console.log('Не корректный ввод');
    } else {
        newTab.innerText = newText;
        allTabs.classList.add('right-tab-text');
        allTabs.append(newTab);
    }
});












