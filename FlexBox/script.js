const box = document.getElementById('box');

box.innerHTML = '<h1>Hello World</h1> <button id="button" >Remover</button>'

box.classList.add('new-style')

box.children[1].addEventListener("click", () => {
    // return console.log('funcionou!');
    return box.remove()
})

