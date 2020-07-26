import { createSelector } from "reselect"
import _ from "lodash"

export const findSelector = (state) => state.data.findAs
export const entitiesSelector = (state) => state.data.entities
export const valueSelector = (state) => state.data.findValue

export const filterEntitiesSelector = createSelector(
	findSelector,
	entitiesSelector,
	valueSelector,
	(findAs, entities, value) => {
		if (value) value = value[0].toUpperCase() + value.slice(1)

		if (value === "") return entities
		else {
			return [{ ..._.find(entities, [findAs, value]) }]
		}
	}
)
