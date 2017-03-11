var fs = require('fs');
var data = require('./../Data/data.json');

var price = [];
var temp = [];
console.log('Step 1 is running... Assign data to a variable');
for(var i = 0; i < data.length; i++){
    temp.push(data[i]['close']);
}
console.log('Step 2 is running... Mine data');
for(var i = 0; i < temp.length - 10; i++){
    var item = [];
    for(var j = 0; j < 10; j++){
        item.push(temp[i+j])
        if(j == 9){
            var high;
            var low;
            var current;
            var last;
            Array.prototype.max = function() {
                return Math.max.apply(null, this);
            };

            Array.prototype.min = function() {
                return Math.min.apply(null, this);
            };
            high = item.max();
            low = item.min();
            current = item[9];
            last = item[0];
            var so;
            var roc;
            if(high - low == 0){
                so = 50;
            }
            else{
                so = (current - low)/(high - low) * 100;
            }
            item.push(so);
            roc = (current - last)/last;
            item.push(roc);
            if (temp[i+j] < temp[i+j+1]) {
                item.push(1)
            }
            else{
                item.push(0)
            }
        }
    }
    price.push(item)
}
console.log('Step 3 is running... Remove redundant row in data');
var result = [];
for(var i = 0; i < price.length; i++){
    var flag = true;
    for(var j = 0; j < result.length; j++){
        if(JSON.stringify(price[i]) ==  JSON.stringify(result[j])){
            flag = false;
        }
    }
    if(flag){
        result.push(price[i]);
    }
}


var up = 0;
var down = 0;
for(var i=0; i<result.length; i++){
    if(result[i][12] == 1){
        up = up + 1;
    }
    else{
        down = down + 1;
    }
}
console.log("____Up:", up);
console.log("____Down:", down);



console.log('Step 4 is running... Write to file');
var file = fs.createWriteStream('./../Data/data.txt');
file.on('error', function(err){
    console.log(err);
})
for(var r = 0; r < result.length; r++){
    for(var c = 0; c < result[0].length; c ++){
        if(c != 12){
            file.write(result[r][c]+ " ");            
        }
        else{
            file.write(result[r][c]+"\n");
        }
    }
}
file.end();
