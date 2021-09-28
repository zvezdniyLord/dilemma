const addWorkspace = document.querySelector('.right-block-plus');
const allBlocks = document.querySelector('.right-blocks');
const pkm = document.querySelector('.PKM');

let count = 0;

addWorkspace.addEventListener('click', () => {
    const newWorkspace = document.createElement('div');
    newWorkspace.classList.add('right-block');
    allBlocks.append(newWorkspace);
});


    pkm.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log(count++);
    });


