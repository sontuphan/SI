var fs = require('fs');
var data = require('./../Data/data_7200.json');

var price = [];
var temp = [];
console.log('Step 1 is running... Assign data to a variable');
for(var i = 0; i < data.length; i++){
    temp.push(data[i]['close']);
}
console.log("____Amount:", temp.length);


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


            // Create label
            var fee = 0.26/100;
            if (temp[i+j+1] > temp[i+j]) {
                if (1/((1-fee)*(1-fee)) <= temp[i+j+1]/temp[i+j]) {
                    item.push(1)
                }
                else{
                    item.push(0)
                }
            }
            else{
                item.push(-1)
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
console.log("____Amount after reduced:",result.length)

console.log('Step 4 is running... Count label to show to you')
var up_profit = 0;
var up_nonprofit = 0;
var down = 0;
for(var i=0; i<result.length; i++){
    if(result[i][12] == 1){
        up_profit = up_profit + 1;
    }
    else if(result[i][12] == 0){
        up_nonprofit = up_nonprofit + 1;
    }
    else{
        down = down + 1;
    }
}
console.log("____Up - Profit:", up_profit);
console.log("____Up - Non Profit:", up_nonprofit);
console.log("____Down:", down);

console.log('Step 5 is running... Write to file');
var file = fs.createWriteStream('./../Data/data_7200.txt');
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
