import React, { useState } from 'react'

function CoinInfo({ heading, desc}) {
    const [flag,setFlag] = useState(false);
    const sortDesc = desc.slice(0,350) + "<span style='color: var(--gray)' > Read more...</span>";
    const longDesc = desc+ "<span style='color: var(--gray)' > Read Less...</span>";


  return (
    <div className='mx-auto w-11/12 px-4 py-2 bg-darkgrey m-6 rounded-xl'>
        <h2 className='m-4 text-2xl font-semibold '>{heading}</h2>
        <p
        className='m-4 desc-info'
        onClick={() => setFlag(!flag)}
        dangerouslySetInnerHTML={{__html: !flag ? sortDesc:longDesc}}
        />
    </div>
  )
}

export default CoinInfo