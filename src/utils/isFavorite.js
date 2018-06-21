export default (id) => {
  if ("localStorage" in window) {
    let favoritePedalsStorageKey = "favoritePedals";
    let favoritePedals = localStorage.getItem(favoritePedalsStorageKey);
    let favoritePedalsArr;

    if (favoritePedals !== null) {
      favoritePedalsArr = JSON.parse(favoritePedals);

      if (favoritePedalsArr.filter(pedal => pedal.id === id).length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return false;
};
