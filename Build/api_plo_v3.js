var data = require('./../Data/original_data.json');
var mining = require('./lib/mining.js');

/**
 * Run - params: path to save mining data
 */
main('./../Data/data_[BTC_ETH]_[10]_[nordp]_[fee_25].txt');

function main(path) {
	/**
	 * Initial variables
	 */
	console.log("Step 1: Creating initial vars.")
	var amountOfSession = 10;
	var fee = 0.25 / 100;

	/**
	 * Mining data
	 */
	console.log("Step 2: Mining data.")
	var raw = mining.createRawMatrix(mining.assignData(data), amountOfSession);
	var re = mining.normalizeData(raw, null);
	// var re = mining.normalizeData(raw);

	for (var i = 0; i < re.length; i++) {
		j = i + 1;
		re[i].push(mining.ROC(raw[j]));
		re[i].push(mining.SO(raw[j]));
		if (i + 1 < re.length) {
			re[i].push(mining.isProfit(fee, raw[j][raw[j].length - 1], raw[j + 1][raw[j + 1].length - 1]));
		}
		else if (i + 1 == re.length) {
			re[i].push(mining.isProfit(fee, raw[j][raw[j].length - 1], data[data.length - 1]["close"]));
		}
	}
	console.log("____After Mining:")
	console.log("____Number of element:", re[0].length)
	console.log("____Length of data:", re.length)

	/**
	 * Reduce data
	 */
	console.log("Step 3: Reducing data.")
	var result = mining.removeRedudantData(re);
	console.log("____After Reducing:")
	console.log("____Number of element:", result[0].length)
	console.log("____Length of data:", result.length)

	/**
	 * Count label
	 */
	console.log("Step 4: Counting label of data.")
	var info = mining.countLabel(result);
	console.log("____Info:")
	console.log("____Number of profit row:", info.Profit)
	console.log("____Number of non-profit row:", info.Down)

	/**
	 * Write to file
	 */
	console.log("Step 5: Writing data.")
	mining.writeToFile(result, path);
}