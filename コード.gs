/*メモ欄
  ["福井","敦賀市","632632","26012578"]
  ["長野","松本市","7232235","56793"]
  ["岐阜","岐阜市","59125","2512512"]

*/


function appendRecords() {
  var mySheet = SpreadsheetApp.getActiveSheet();
  var arrData = mySheet.getDataRange().getValues();
  
  arrData.splice(2, 4);
  
  var rows = arrData.length;
  var cols = arrData[0].length;
  mySheet.clearContents();
  mySheet.getRange(1, 1, rows, cols).setValues(arrData);
}



function deleteRecords(){
  var mySheet = SpreadsheetApp.getActiveSheet();
  
  mySheet.deleteRows(3, 2);
}