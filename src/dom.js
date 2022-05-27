const body = document.querySelector('body');
const setTitle = (title) =>{
    const header = document.createElement('h1');
    header.textContent = title;
    body.appendChild(header);
}
const setBg = () =>{
    body.style.backgroundColor = 'gray';
}
console.log('this is from the dom.js');


export { setTitle, setBg }