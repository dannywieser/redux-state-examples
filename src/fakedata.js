export function fakeArray(numItems) {
  const items = [];
  for (let id = 1; id <= numItems; id++) {
    items.push({ id, value: "not ready" });
  }
  return items;
}

export function arrayToMap(arr) {
  return arr.reduce((map, { id, value }) => {
    return { ...map, [id]: { id, value } };
  }, {});
}
