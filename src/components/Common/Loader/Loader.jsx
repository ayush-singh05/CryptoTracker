
import CircularProgress from '@mui/material/CircularProgress';


export default function Loader() {
  return (
    <div className='flex justify-center items-center bg-black text-blue absolute z-50 w-screen h-screen '>
      <CircularProgress />
    </div>
  );
}