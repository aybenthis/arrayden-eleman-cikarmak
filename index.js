function removeItems(array) {
  if (array.length <= 4) {
    return [];
  }
  array.splice(0, 2);
  array.splice(-2, 2);
  if (array.length % 2 !== 0) {
    array.splice(Math.floor(array.length / 2), 1);
  }

  return array;
}
