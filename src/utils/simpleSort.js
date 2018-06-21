export default function(arr, key, order = "asc") {
  if (Array.isArray(arr) === true) {
    return arr.sort((a, b) => {
      if (order === "asc") {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });
  }

  return false;
};
