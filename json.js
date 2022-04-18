//jsonオブジェクト概念の理解
let jsondata = { Name : "JsonData", Test : "This is an object json file test text.", Number :65536};
console.log(jsondata.Name);//jsオブジェクトの呼び出し

let jsontext = JSON.stringify(jsondata);//jsonテキストファイル
console.log(jsontext);

let javascript_object = JSON.parse(jsontext);//テキスト=>オブジェクト
console.log(jsondata.Number);//jsオブジェクトの呼び出し
