import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search,onSearchChange}) {
 
  return (
    <div className='flex justify-start items-center gap-6 text-xl text-grey py-2 px-4 bg-darkgrey w-10/12 mx-auto rounded-3xl'>
      <SearchRoundedIcon />
      <input 
      className='w-full bg-darkgrey text-xl text-grey outline-none' 
      type="text" 
      value={search} 
      onChange={(e) => onSearchChange(e)} 
      placeholder='Search' />
    </div>
  )
}

export default Search