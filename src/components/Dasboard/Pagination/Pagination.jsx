import {useState} from 'react';
import Pagination from '@mui/material/Pagination';


export default function PaginationControlled({page,handleChange}) {

  

 
  const style = {
        color: 'var(--white)',
        "& .Mui-selected":{
            backgroundColor: "var(--blue)  !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)"
        },
   
  }
  return (
    <div className='flex justify-center items-center m-4  mb-10'>
      
      <Pagination 
      count={10} 
      page={page} 
      onChange={(event,value) => handleChange(event,value)}
      sx={style}
      />
    </div>
  );
}
