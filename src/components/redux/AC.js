import { LOAD_SMALL_DATA, SORT, GET_CARD, FIND_DATA, FIND_AS, ADD_PERSON, LOAD_BIG_DATA } from "./constants"

export function loadSmallData() {
	return {
		type: LOAD_SMALL_DATA,
		callAPI:
			"http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
	}
}

export function loadBigData() {
	return {
		type: LOAD_BIG_DATA,
		callAPI:
			"http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
	}
}

export function sortBy(value) {
	return {
		type: SORT,
		payload: { value },
	}
}

export function activeCard(card) {
	return {
		type: GET_CARD,
		payload: { card },
	}
}

export function findData(value, as) {
	return {
		type: FIND_DATA,
		payload: { value, as },
	}
}

export function findAs(as) {
	return {
		type: FIND_AS,
		payload: { as },
	}
}

export function addPerson(obj) {
	return {
		type: ADD_PERSON,
		payload: { obj },
	}
}
