import { produce } from "immer"
import _ from "lodash"
import {
	START,
	SUCCESS,
	FAIL,
	LOAD_SMALL_DATA,
	SORT,
	GET_CARD,
	FIND_DATA,
	FIND_AS,
	ADD_PERSON,
	LOAD_BIG_DATA,
} from "../constants"

const stateProducts = {
	entities: [],
	bigEntities: [],
	loaded: false,
	loading: false,
	error: null,
	dir: "asc",
	activeCard: {},
	findAs: "",
	findValue: "",
}

const fetchData = (state = stateProducts, action) => {
	const { type, payload, response, error } = action

	return produce(state, (draft) => {
		switch (type) {
			case LOAD_SMALL_DATA + START:
				draft.loading = true
				break
			case LOAD_BIG_DATA + START:
				draft.loading = true
				draft.entities = []
				break
			case LOAD_SMALL_DATA + SUCCESS:
				draft.entities = _.orderBy([...response], ["id"], [draft.dir])
				draft.loading = false
				break
			case LOAD_BIG_DATA + SUCCESS:
				draft.entities = _.orderBy([...response], ["id"], [draft.dir])
				draft.loading = false
				break
			case SORT:
				draft.dir === "asc" ? (draft.dir = "desc") : (draft.dir = "asc")
				draft.entities = _.orderBy(state.entities, [payload.value], [draft.dir])
				break
			case LOAD_SMALL_DATA + FAIL:
				draft.error = { ...error }
				break
			case GET_CARD:
				draft.activeCard = { ...payload.card }
				break
			case FIND_DATA:
				draft.findValue = payload.value
				break
			case FIND_AS:
				draft.findAs = payload.as
				break
			case ADD_PERSON:
				draft.entities.unshift(payload.obj)
				break
			default:
				break
		}
	})
}

export default fetchData
