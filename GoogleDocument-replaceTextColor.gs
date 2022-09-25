function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('置換')
    .addItem('文字変換（赤→黄）', 'replaceTextColor')
    .addToUi();
}

function replaceTextColor(){
  const org_color = "#ff0000"; // red
  const replace_color = "#ffff00" // yellow
  let app = DocumentApp.getUi();
  let body = DocumentApp.getActiveDocument().getBody();
  let obj = body.editAsText();
  const text = body.getText();

  for(let i=0; i < text.length; i++){
    if( obj.getForegroundColor(i) == org_color){
      obj.setForegroundColor(i, i, replace_color);
      Logger.log("Change color: "+i);
    }
  }
}
