const addWorkspace = document.querySelector('.right-block-plus');
const allBlocks = document.querySelector('.right-blocks');
const levelsBlock = document.querySelector('.levels-block');
const allTabs = document.querySelector('.right-tabs');
const addTabInput = document.querySelector('.right-tab-input');
const btnAddTab = document.querySelector('.right-tab-custom');
const titleText = document.querySelector('.title-text');   
const levelsItems = document.querySelector('.levels-items');
const rightBlockInput = document.querySelector('.right-block-input');     
const leftH2Input = document.querySelectorAll('.left-h2-input');
const iconEdit = document.querySelectorAll('.right-title-edit');



iconEdit.forEach(i => {
    i.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const btn = document.createElement('button');
        btn.innerText = 'Добавить';
        i.replaceWith(textarea, btn);
        btn.addEventListener('click', (e) => {
            const test = leftH2Input.innerText = textarea.value;
            textarea.replaceWith(test);
            btn.remove();
        });
    });
});

/*leftH2Input.forEach(i => {
    i.addEventListener('click', function func() {
        const input = document.createElement('input');
        input.value = this.innerHTML;
        leftH2Input.innerHTML = '';
        this.appendChild(input);
        this.removeEventListener('click', func);
        let elem = this;
        console.log(elem.value);
        input.addEventListener('blur', () => {
            elem.innerHTML = this.value;
        });
    })
});*/

/*for(let i = 0; i < leftH2Input.length; i++) {
    leftH2Input[i].addEventListener('click', (e) => {
        e.target.setAttribute("contenteditable", true);
    });
}*/



addWorkspace.addEventListener('click', () => {
    const newWorkspace = document.createElement('div');
    newWorkspace.classList.add('right-block', 'right-block-text');
    newWorkspace.innerText = rightBlockInput.value;
    allBlocks.append(newWorkspace);
    rightBlockInput.value = '';
});


btnAddTab.addEventListener('click', (e) => {
    /*const emptyStr = newText.trim() === '';*/

    /*if (emptyStr === true) {
        console.log('Не корректный ввод');
        
    }*/
        const newTab = document.createElement('div');
        newTab.classList.add('right-tab');
        const newText = addTabInput.value;
        newTab.innerText = newText;
        addTabInput.value = '';
        allTabs.classList.add('right-tab-text');
        allTabs.append(newTab);
});















