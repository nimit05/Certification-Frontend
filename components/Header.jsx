import React from 'react';
import Button from "../components/Button"

const Header = () => {
    return (
        <div className='border-solid flex p-4 content-center justify-between text-3xl border-2 border-black'>
           <div>
               Certification
           </div>
           <div>
               <Button >
                   Login/SignUp
                </Button>
           </div>
        </div>
    );
};

export default Header;