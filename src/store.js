import { fakeArray, arrayToMap } from "./fakedata";

export const updateItem = itemId => ({ itemId, type: "UPDATE_ITEM" });

const items = fakeArray(100);
const byId = arrayToMap(items);
const allIds = Object.keys(byId);
const INIT_STATE = {
  items: { byId, allIds }
};

function updateItemReducer(state, { itemId }) {
  const { items } = state;
  const { byId } = items;
  const newState = {
    ...state,
    items: {
      ...items,
      byId: {
        ...byId,
        [itemId]: { id: itemId, value: "updated" }
      }
    }
  };
  return newState;
}

export function exampleState(state = INIT_STATE, action) {
  switch (action.type) {
    case "UPDATE_ITEM":
      return updateItemReducer(state, action);
    default:
      return state;
  }
}
