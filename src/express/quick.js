module.exports = {
   count : function (){
       let i =0;
       return function(){
           i=i+1;
           
       }
       return i;
    }
}