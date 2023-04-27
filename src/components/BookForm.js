import React from 'react';
import CheckIn from './CheckIn'
import AdultsDropdown from './AdultsDropdown'
import KidsDropdown from './KidsDropdown'
import CheckOut from './CheckOut'


const BookForm = () => {
  return(
<form className='h-[300px] bg-pink-200  w-full lg:h-[70px]'>
<div className='flex flex-col w-full h-full lg:flex-row '>
  <div className='flex-1 border-r'>
    <CheckIn />
  </div>
  <div className='flex-1 border-r'>
    <CheckOut />
  </div>
  <div className='flex-1 border-r'>
    <AdultsDropdown />
  </div>
  <div className='flex-1 border-r'>
    <KidsDropdown />
  </div>
</div>
</form>
  ) 
};

export default BookForm;
