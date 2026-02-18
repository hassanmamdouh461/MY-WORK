
function setText(val){
  var enteredText = val;
  keyText = enteredText;
  keyArray = enteredText.match(/[^\r\n]+/g);

  if(keyArray == null){
    keyArray = "";
  }

  selector = 0;
  pickScene();
}

function setSceneLength(val){
  sceneLength = int(val);
}