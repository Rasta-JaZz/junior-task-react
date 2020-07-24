import { produce } from "immer"
import { START, SUCCESS, FAIL, LOAD_SMALL_DATA } from "../constants"

const stateProducts = {
	entities: [],
	loaded: false,
	loading: false,
	error: null,
}

const fetchData = (state = stateProducts, action) => {
	const { type, payload } = action

	return produce(state, (draft) => {
		switch (type) {
			case LOAD_SMALL_DATA + START:
				draft.loading = true
				return draft
			default:
				break
		}
	})
}

export default fetchData
