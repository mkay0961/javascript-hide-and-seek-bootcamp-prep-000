
function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelector('div')
  return deep.legnth
}
