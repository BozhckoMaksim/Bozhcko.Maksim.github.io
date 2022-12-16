var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Привет! Это мини игра морской бой. В 10 ячейках по горизонтали •••••••••• расположен 3-ёх палубный корабль. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 1-10):");
	if (guess < 1 || guess > 10) {
		alert("Введи валидное значение 1-10");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Поздравляю корабль потоплен");
			}
		} else {
			alert("Мимо(((");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
