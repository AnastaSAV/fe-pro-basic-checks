/**
* Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
* @param {string} string
* @returns {string}
*/
export const capitalizeString = (string) => string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

/**
* Должна быть function declaration
* @param {string} string
* @returns {string}
*/
export function fenceString(string) {
	const array = string.split('')
	for(let i = 0; i < array.length; i++) {
		if (i % 2 !== 0 && array[i] !== " ") {
			array[i] = array[i].toUpperCase();
		}
		else {
			array[i] = array[i].toLowerCase();
		}
	};
	return array.join('');
};
/**
* Должна быть function expression
* @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
* @param {string} string
* @returns {string}
*/
export const reducerIf = (action, string) => {
	if (action) {
		if(action === 'uppercase') {
			return string = string.toUpperCase();
		}
		else if(action === 'lowercase') {
			return string = string.toLowerCase();
		}
		else if (action === 'capitalize') {
			return capitalizeString(string)
		}
		else if (action === 'fence') {
			return fenceString(string);
		}
		else {
			return string;
		}
	}
};

/**
* Стрелочная
* @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
* @param {string} string
* @returns {string}
*/
export const reducerSwitch = (action, string) => {
	switch(action) {
		case 'uppercase':
		return string.toUpperCase();
		case 'lowercase':
		return string.toLowerCase();
		case 'fence':
		return fenceString(string)
		case 'capitalize':
		return capitalizeString(string);
		default:
		return string;
	}
};

/**
Стрелочная
* @param {string} string
*/
export const consoleLoggerWordsForOf = (string) => {
	for (let character of string) {
		console.log(character)
	};
};

/**
Стрелочная
* @param {string} string
*/
export const consoleLoggerWordsFor = (string) => {
	for (let i = 0; i < string.length; i++) {
		console.log(string[i]);
	};
};

/**
Стрелочная
* @param {string} string
*/
export const consoleLoggerWordsWhile = (string) => {
	let i = 0;
	while(true) {
		console.log(string[i])
		i++;
		if (i >= string.length) {
			break
		}
	}
};

/**
Стрелочная
* @param {string} string
*/
export const consoleLoggerWordsSplit = (string) => {
	string.split('').forEach(character => {
		console.log(character)
	});
};
