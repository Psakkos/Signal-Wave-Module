let Signal = function(){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range;
  let period;

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
      for(let p=0;p<numberOfPoints;p++){
        let tempx= transformedPoints[p].getx()+value;
        let tempy= transformedPoints[p].gety();
        let temppoint=new Point(tempx,tempy);
        transformedPoints[p]=temppoint;
      }
  }
  function shiftY(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx=transformedPoints[p].getx();
      let tempy=transformedPoints[p].gety()+value;
      let temppoint=new Point (tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function stretchX(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx= transformedPoints[p].getx()*value;
      let tempy= transformedPoints[p].gety();
      let temppoint=new Point(tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function stretchY(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx= transformedPoints[p].getx();
      let tempy= transformedPoints[p].gety()*value;
      let temppoint=new Point(tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function transformation(value){

  }
  function outputOf(){

  }
  function calculateSpan(){

  }
  return{shiftX,shiftY,stretchY,stretchX,transformation,outputOf}
}
