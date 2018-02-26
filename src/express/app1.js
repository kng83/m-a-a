var express = require('express')
var serveStatic = require('serve-static')
var querystring = require('querystring');
var db1 = new Map();
var gArray=[];
var siemensArray = [0,0,0];
var bigData = {
    name:'Bobo',
    age: '4',
    type: 'kot'
}
db1.set('postedSiemens',0);
var counter = require('./quick');
db1.set('data',bigData);
db1.set('gArray',gArray);
db1.set('simensArray',siemensArray);
counter.count();
counter.count();
console.log(counter.count());

let ccc =function(){

    var i =0;
    return function(){
      i = i+ 1;
      console.log(i);
     
        
    }();
    return i;
}

ccc()
ccc()
ccc()
console.log(ccc());



var app = express()
// Set header to force download
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//app.use(serveStatic('dist', {'index': ['index.html']}))
app.use(serveStatic('../../public',{'index': 'index.html'}))
console.log(__dirname)



var bodyParser = require('body-parser')
app.use( bodyParser.json() );  

app.listen(3000, function(){
    console.log("Listening on :3000");
  // getGenderData();
   getIntervalData();
})

app.get('/hello', function(req, res){
  res.send(db1.get('gArray'));
  //  res.send(db1.get('data'));
 });

 app.get('/siemens', function(req, res){
   console.log(db1.get('siemensArray'));
  res.send(db1.get('siemensArray'));
  //  res.send(db1.get('data'));
 });

 app.post('/hello', function(req, res){
    db1.set('data',req.body);
    res.send(db1.get('data'));
    console.log(db1.get('data'));
 });
 app.put('/put',function(req,res){
     console.log(req.body);
    db1.set('data',req.body);
    res.send(req.body);
        console.log(db1.get('data'))
});
app.post('/spost',function(req,res){
  db1.set('postedSiemens',req.body);
 // console.log('Posted');
 // console.log(req.body);
  res.send(req.body);

});
app.get('/spost',function(req,res){

  var some =db1.get('siemensArray');
  console.log(some);
})



var http = require('http');

var options = {
  host: '172.27.22.203',
  path: '/dane3.xml'

};

function getGenderData(){
  var req = http.get(options,(res) => {
    
      var bodyChunks = [];
    
      res.on('data',(chunk) => {
        bodyChunks.push(chunk);
    
      }).on('end', () => {
    
        var body = Buffer.concat(bodyChunks);
        var out = body.toString();
        var xmlJson = require('xml2js');
        var obj3;
         var hArray=[];
       // var hArray=new Array();
        
        var obj =  xmlJson.parseString(out,(error, result)=>{    
          
            obj3= result['table']['div'];
            //console.log(obj3);
            for (let key in obj3){
              let pattern={
                description :'',
                value: ''
              }
              pattern.description=obj3[key]['b'][0];
              pattern.value=obj3[key]['b'][1]
              // console.log(pattern);
              // hArray.push({description:obj3[key]['b'][0],value:obj3[key]['b'][1]});
             hArray.push(pattern);
    
            }
            db1.set('gArray',hArray);
         //  console.log( db1.get('gArray'));
        
    
        });
    
      })
    })
    req.on('error',(error) => {
     // console.log('ERROR: ' + error.message);
    });

}

function getIntervalData(){
  setInterval(() =>{
    getGenderData();
    getSiemensData();
    sendSiemens();

  },1000);
}


// pobranie danych z 1200
var httpSiemens = require('http');

var optionsSiemens = {
  host: '172.27.20.214',
  path: '/awp/bobo/dane_plc_out.html'

};


function getSiemensData(){
  var req = httpSiemens.get(optionsSiemens,(res) => {
    
      var bodyChunks = [];
    
      res.on('data',(chunk) => {
        bodyChunks.push(chunk);
    
      }).on('end', () => {
    
      var body = Buffer.concat(bodyChunks);
     
      var out1= body.toString();
   //   console.log(out1);
      var outStart = out1.indexOf('<div>') -2;
      var outEnd = out1.indexOf('</div>') +8;
      var out = body.toString().slice(outStart,outEnd);

     // var out = body.toString();//
     // out = out.slice(body.toString().indexOf('<div>'),body.toString().indexOf('</div>'))
     // out.slice(indexOf('div'),indexOf('/div'));
     //  console.log(out1.indexOf('<div>'),'start')
     //  console.log(out1.indexOf('</div>')+10,'end')
        var xmlJson = require('xml2js');
        var obj3;
        var hArray=[];
       // var hArray=new Array();
       //console.log(out);
        
        var obj =  xmlJson.parseString(out,(error, result)=>{    
         // console.log(out)
           obj3 = result['div']['p'];
          db1.set('siemensArray',obj3);
      // console.log(   db1.get('siemensArray'));
         //  console.log(obj3,'dadada');
  
        });
    
      })
    })
    req.on('error',(error) => {
    //  console.log('ERROR: ' + error.message);
    });

}

var sendSiemens= function(){
var httpS = require('http');

// var data = `<!-- AWP_In_Variable Name='"Flowrate"' --> 
// <form method="put" action="" >
// <input type="text" name='"Flowrate"'>
// <input type="submit" value="44">
// </form>` 
var valueToPlc = db1.get('postedSiemens');
var alph =valueToPlc.value;
// console.log(alph);
var data = `%22Flowrate%22=${valueToPlc.value}&%22speed%22=1&%22machineNr%22=22&%22elementHigh%22=100`;

var optionsS = {
  host: '172.27.20.214',
  path: '/awp/bobo/dane_plc_in.html',
  port: '80',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

var callbackS = function(response) {
//   var str = ''
//   response.on('data', function (chunk) {
//     str += chunk;
//     console.log(str);
//   });

//   response.on('end', function () {
//  //  console.log(str);
//   });
}

var req = httpS.request(optionsS, callbackS);
//This is the data we are posting, it needs to be a string or a buffer
req.write(data);
req.end();
}













// var req = http.get(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));

//   // Buffer the body entirely for processing as a whole.
//   var bodyChunks = [];
//   res.on('data', function(chunk) {
//     // You can process streamed parts here...
//     bodyChunks.push(chunk);
//   }).on('end', function() {
//     var body = Buffer.concat(bodyChunks);
//     console.log('BODY: ' + body);
//     // ...and/or process the entire body here.
//   })
// });

// req.on('error', function(e) {
//   console.log('ERROR: ' + e.message);
// })