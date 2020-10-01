export const words = (c) => c / 5;

export const minutes = (s) => s / 60;

export const wordsPerMinute = (c, s) => Math.round(words(c) / minutes(s)) || 0;

// counts the correct characters
export const nCorrect = (text, input) => {
	const tc = text.replace(' ', '');
	const ic = input.replace(' ', '');

	return ic.split('').filter((c, i) => c === tc[i]).length;
};

// counts the correct charactes vs the paragraph length
export const nCompletion = (text, input) => {
	const tc = text.replace(' ', '');
	const ic = input.replace(' ', '');

	return (ic.split('').filter((c, i) => c === tc[i]).length * 100 / tc.length).toFixed(2);
};
