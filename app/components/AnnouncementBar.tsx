/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AnnouncementBar() {
  return (
    <div className='w-full bg-black text-white flex justify-evenly sm:h-[40px] md:h-[30px] lg:h-[38px] xl:h-[48px] 2xl:h-[50px]'>
      {/* Left side */}
      <div className='flex items-center gap-2'>
        <h1 className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          {/* Display important words for small screens */}
          <span className="sm:inline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Sign Up and get 20% off to your first order.
          </span>
        </h1>
        <button className='font-bold underline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          Sign Up Now
        </button>
      </div>

      {/* Right side */}
      <div className='flex items-center gap-2'>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>X</p>
        <FontAwesomeIcon icon={faChevronDown} className="down-arrow" />
      </div>
    </div>
  );
}

export default AnnouncementBar;