import { json } from "react-router-dom";
import { toast } from "react-toastify";

export const addToWatchList = (id) => {
    let item = localStorage.getItem('watchlist');

    if(item) {
        let arr = JSON.parse(item);
        if(!arr.includes(id)) {
            arr.push(id);
            localStorage.setItem('watchlist',JSON.stringify(arr));
        }

    }else {
        localStorage.setItem('watchlist',JSON.stringify([id]));
    }
    
    
}