export const hasAdded = (id)=> {
    const item = localStorage.getItem('watchlist');
    if (item) {
        let arr = JSON.parse(item);
        if (arr.includes(id)) {
          return true;
        } else {
          return false;
        }
      }
      return false;
}