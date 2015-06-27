var gameCanvas;
var chartCanvas;

var basesData = [ 
	{"x": 95, "y": 120, "owner": ""}, 
	{"x": 330, "y": 200, "owner": "PF"},
	{"x": 50, "y": 290, "owner": "TB"},
	{"x": 550, "y": 22, "owner": "TB"},
	{"x": 440, "y": 260, "owner": "LZ"}
];

var basesMap = {
	0: [1],
	1: [2,3],
	2: [],
	3: [4]
};

var shipData = [
	{"team": "Pink Floyd", "x": 12, "y": 24},
	{"team": "The Beatles", "x": 120, "y": 200},
	{"team": "The Doors", "x": 560, "y": 99},
	{"team": "Led Zeppelin", "x": 300, "y": 300}
];

var bombData = [
	{"team": "TD", "x": 530, "y": 80}
];

var bombMap = {
	0: [],
	1: [],
	2: [0],
	3: []
};

function loadUI () {
    time    =  0;
    gameCanvas.width  = 625;
    gameCanvas.height = 325;
    chartCanvas.width  = 1170;
    chartCanvas.height = 225;
}

function drawBases() {
	var ctx = gameCanvas.getContext("2d");
	
	for (var i = 0; i < basesData.length; i++) {
		var curr = basesData[i];
		ctx.beginPath();
		ctx.arc(curr["x"], curr["y"], 5, 0, 2*Math.PI);
		ctx.stroke();
	};
}

function drawBombs() {
	var ctx = gameCanvas.getContext("2d");
	
	for (var i = 0; i < bombData.length; i++) {
		var curr = bombData[i];
		ctx.beginPath();
		ctx.moveTo(curr["x"] + 5, curr["y"] + 5);
		ctx.lineTo(curr["x"] - 5, curr["y"] - 5);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(curr["x"] + 5, curr["y"] - 5);
		ctx.lineTo(curr["x"] - 5, curr["y"] + 5);
		ctx.stroke();
	};
}

function drawBots() {
	var ctx = gameCanvas.getContext("2d");
	
	for (var i = 0; i < shipData.length; i++) {
		var curr = shipData[i];
		ctx.beginPath();
		ctx.moveTo(curr["x"], curr["y"] - 18);
		ctx.lineTo(curr["x"] - 6, curr["y"]);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(curr["x"] - 6, curr["y"]);
		ctx.lineTo(curr["x"] + 6, curr["y"]);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(curr["x"], curr["y"] - 18);
		ctx.lineTo(curr["x"] + 6, curr["y"]);
		ctx.stroke();
	};
}

function drawChart(data, options) {
	if (options === undefined) {
		options = {};
	}
	var ctx = chartCanvas.getContext("2d");
	var myNewChart = new Chart(ctx).Line(data, options);
}

function onBodyLoad() {
    gameCanvas = document.getElementById("game-field");
    chartCanvas = document.getElementById("chart-field");

    loadUI();
    drawBases();
    drawBombs();
    drawBots();
}

function clearField() {
    var context = gameCanvas.getContext('2d');
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function clearChart() {
    var context = chartCanvas.getContext('2d');
    context.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
}

function selectCanvasElems(k) {
	clearField();
	onBodyLoad();
	var ctx = gameCanvas.getContext("2d");
	ctx.strokeStyle = "#2D22F3";

	// Bases
	for (var i = 0; i < basesMap[k].length; i++) {
		var curr = basesData[basesMap[k][i]];
		ctx.beginPath();
		ctx.arc(curr["x"], curr["y"], 5, 0, 2*Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(curr["x"], curr["y"], 10, 0, 2*Math.PI);
		ctx.stroke();
	};

	// Bots
	var curr = shipData[k];
	ctx.beginPath();
	ctx.moveTo(curr["x"], curr["y"] - 18);
	ctx.lineTo(curr["x"] - 6, curr["y"]);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(curr["x"] - 6, curr["y"]);
	ctx.lineTo(curr["x"] + 6, curr["y"]);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(curr["x"], curr["y"] - 18);
	ctx.lineTo(curr["x"] + 6, curr["y"]);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(curr["x"], curr["y"] - 24);
	ctx.lineTo(curr["x"] - 8, curr["y"]);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(curr["x"] - 8, curr["y"]);
	ctx.lineTo(curr["x"] + 8, curr["y"]);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(curr["x"], curr["y"] - 24);
	ctx.lineTo(curr["x"] + 8, curr["y"]);
	ctx.stroke();

	// Bombs
	for (var i = 0; i < bombMap[k].length; i++) {
		var curr = bombData[bombMap[k][i]];
		ctx.beginPath();
		ctx.moveTo(curr["x"] + 5, curr["y"] + 7);
		ctx.lineTo(curr["x"] - 5, curr["y"] - 3);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(curr["x"] + 5, curr["y"] - 7);
		ctx.lineTo(curr["x"] - 5, curr["y"] + 3);
		ctx.stroke();
	};
}

function selectBomb(k) {
	clearField();
	onBodyLoad();
	var ctx = gameCanvas.getContext("2d");
	ctx.strokeStyle = "#2D22F3";

	var curr = bombData[k];
	ctx.beginPath();
	ctx.moveTo(curr["x"] + 5, curr["y"] + 7);
	ctx.lineTo(curr["x"] - 5, curr["y"] - 3);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(curr["x"] + 5, curr["y"] - 7);
	ctx.lineTo(curr["x"] - 5, curr["y"] + 3);
	ctx.stroke();
}

function selectBase(k) {
	clearField();
	onBodyLoad();
	var ctx = gameCanvas.getContext("2d");
	ctx.strokeStyle = "#2D22F3";

	var curr = basesData[k];
	ctx.beginPath();
	ctx.arc(curr["x"], curr["y"], 5, 0, 2*Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(curr["x"], curr["y"], 10, 0, 2*Math.PI);
	ctx.stroke();
}