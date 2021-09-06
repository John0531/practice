//上層家電原型
function HomeAppliance(kind){
    this.name = '家電';
    this.kind = kind||'一般家電';
  }
  HomeAppliance.prototype.usePower = function(){
    console.log(this.name+''+'耗電中');
  }
  
  //底層冰箱原型
  function Refrigerator(name,color,size){
    HomeAppliance.call(this,'食物儲藏')
    this.name = name;
    this.color = color;
    this.size = size;
  }
  
  
  //底層電視原型
  function Television(name,color,size){
    HomeAppliance.call(this,'休閒娛樂');
    this.name = name;
    this.color = color;
    this.size = size;
  }
  
  //冰箱的原型會繼承於家電的原型之下
  Refrigerator.prototype = Object.create(HomeAppliance.prototype);
  //把原本冰箱的constructor加回來
  Refrigerator.prototype.constructor = Refrigerator;
  
  //電視的原型會繼承於家電的原型之下
  Television.prototype = Object.create(HomeAppliance.prototype);
  //把原本電視的constructor加回來
  Television.prototype.constructor = Television;
  
  Refrigerator.prototype.cold = function(){
    console.log(this.name+'冷藏');
  }

  Television.prototype.watch = function(){
    console.log(this.name+'觀看');
  }
  

  var refri1 = new Refrigerator("冰箱一","白色","小型");
  console.log(refri1);
  refri1.cold();
  refri1.usePower();
  
  var tele1 = new Television("電視一","黑色","大型");
  console.log(tele1);
  tele1.watch();
  tele1.usePower();