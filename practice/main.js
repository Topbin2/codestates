let aElement = document.createElement('a')
aElement.setAttribute('id', 'javascript')
aElement.textContent = 'awesome'

console.log(aElement);

document.getElementById('world').appendChild(aElement);