
function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  deep = document.getElementById('grand-node').querySelectorAll('div')
console.log(deep.length)
 return deep[deep-1]
}
