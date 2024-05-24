import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BackToTop() {
    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div 
    id='myBtn' 
    className='flex justify-center items-center fixed w-12 h-12 rounded-full m-6 bottom-6 right-6 border-2 border-blue cursor-pointer'
    onClick={() => topFunction()}
    >
        <ArrowUpwardRoundedIcon className='text-blue'/>
    </div>
  )
}

export default BackToTop