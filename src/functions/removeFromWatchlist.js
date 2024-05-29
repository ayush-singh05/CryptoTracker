export const removeFromWatchlist = (id) => {
    const list = JSON.parse(localStorage.getItem('watchlist'));
    const filterList = list.filter((item) => (item !== id));
    localStorage.removeItem('watchlist');
    localStorage.setItem('watchlist',JSON.stringify(filterList));

}