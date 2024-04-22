function hasWon(gridItems, value) {
  if (
    (gridItems[0].textContent === value &&
      gridItems[3].textContent === value &&
      gridItems[6].textContent === value) ||
    (gridItems[1].textContent === value &&
      gridItems[4].textContent === value &&
      gridItems[7].textContent === value) ||
    (gridItems[2].textContent === value &&
      gridItems[5].textContent === value &&
      gridItems[8].textContent === value) ||
    (gridItems[0].textContent === value &&
      gridItems[1].textContent === value &&
      gridItems[2].textContent === value) ||
    (gridItems[3].textContent === value &&
      gridItems[4].textContent === value &&
      gridItems[5].textContent === value) ||
    (gridItems[6].textContent === value &&
      gridItems[7].textContent === value &&
      gridItems[8].textContent === value) ||
    (gridItems[0].textContent === value &&
      gridItems[4].textContent === value &&
      gridItems[8].textContent === value) ||
    (gridItems[2].textContent === value &&
      gridItems[4].textContent === value &&
      gridItems[6].textContent === value)
  ) {
    return true;
  } else {
    return false;
  }
}
