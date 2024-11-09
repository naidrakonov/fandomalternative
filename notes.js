/*
ЭТО НУЖНО ВСТАВИТЬ В HTML
==================================================================================
<input type="text" id="userInput" placeholder="Введите команду...">
<button id="myButton">Отправить</button>
<p id="output"></p>

<script src="notes.js"></script> <!-- Подключаем внешний JavaScript файл -->
==================================================================================
*/

const button = document.getElementById('myButton');
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');

button.addEventListener('click', function() {
	const userInputValue = userInput.value; // Получаем значение из текстового поля
	const trimmedValue = userInputValue.trim(); // Удаляем пробелы в начале и в конце строки
	const command = trimmedValue.toLowerCase(); // Преобразуем строку в нижний регистр

	// Результат в зависимости от введенной команды
	switch (command) {
		case 'справка':
			output.textContent = 'команд пока нету';
			break;
		case 'сайт':
			output.textContent = 'сайт';
			break;
		case 'вариант':
			output.textContent = 'нет';
			break;
		default:
			output.textContent = 'Неизвестная команда. Попробуйте снова.';
	}

	userInput.value = ''; // Очищаем поле ввода после нажатия кнопки
});