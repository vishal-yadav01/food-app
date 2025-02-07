export function filertData(searchText, restaurant) {
  const fidata = restaurant.filter((item) =>
    item?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return fidata;
}
