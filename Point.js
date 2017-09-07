var Point =function (xcor,ycor){
  let x = xcor;
  let y = y cor;
  function get x() {returnx;}
  function get y() {returny;}
  function magnitude (); {
      let dist= Math.sqrt(x*x+y*y)
      return dist;
  }
  function distanceTo(p2){
    let xsquared=(x-P2.getx()) *(x-P2.getx());
    let ysquared=(y-P2.gety()) *(y-P2.gety());
      return Math.sqrt(xsquared+ysquared);
  }
  function direction (){
    return Math.atan (y/x)*180/Math.PI;
  }
  return{getx,getymagnitude,distanceTo,direction};
}
Module.exports=Point;
