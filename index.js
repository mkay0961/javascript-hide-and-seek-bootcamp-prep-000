
function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  deep = document.getElementById('grand-node').querySelectorAll('div')
 return deep[deep-2]
}
