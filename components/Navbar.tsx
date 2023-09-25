import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const  NavBar = () => {
  
  const navBarTitles = ["Home", "Contact", "Log In", "Sign Up"]
  
  return(

  <nav className="flex justify-between items-center bg-white border-gray-200
  dark:border-gray-700 max-w-full px-4 py-4">
    
    <Link href='/' className='flex items-center'>
      <Image
        src="/food_logo.png"
        alt="logo"
        width={48}
        height={48}
        className="object-contain" />
    </Link>
    
     {/* div wrapper for all the button */}
    <div className="flex flex-row justify-end items-center mx:auto">
     
      { navBarTitles.map((head) =>(
        // each button wraped by Link, 
        //this can be expand to multiple page
        <Link
        href="/">
        <CustomButton 
        title = {head}
        btnType='button'
        containerStyles='text-primary-blue hover:bg-blue-600 hover:text-white rounded-full min-w-[130px]'
      />
        </Link>
        
      ))
        }
       
     
    </div>


  </nav>)


  // <header className='w-full  absolute z-10'>
  //   <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-4 py-2'>
  //     <Link href='/' className='flex justify-center items-center'>
  //       <Image
  //         src='/logo.svg'
  //         alt='logo'
  //         width={118}
  //         height={18}
  //         className='object-contain'
  //       />
  //     </Link>

  //     <CustomButton
  //       title='Sign in'
  //       btnType='button'
  //       containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
  //     />
  //   </nav>
  // </header>
};

export default NavBar;
