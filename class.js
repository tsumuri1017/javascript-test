//Class概念の理解

class nyaa {
    constructor( 名前,役職,番号,セリフ) {
        this.name = 名前;
          this.position = 役職;
        this.number = 番号;
          this.speak = セリフ;
    }
    Speaks() {
        return this.name+'：'+this.speak;
    }
    Number() {
        return this.name+'の出席番号は'+this.number+'です！';
    }
}
let tsumuri = new nyaa('名前','0001',1,'test');
let args = new nyaa('Name','1024',2,'text');
console.log(tsumuri.Speaks());
console.log(args.Number());
