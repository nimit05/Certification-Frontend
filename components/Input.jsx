import React from 'react';

const Input = ({child,type,name}) => {
    return (
        <div className='my-4 w-full'>
            <label htmlFor={name} className="text-xl ">
                {name}
            </label>
 
            <input 
                className={`w-full border-solid p-2 border-2 border-["#0A1A54"] my-2`} 
                placeholder={child} 
                type={type} 
                name
                />
        </div>
        
    );
};

export default Input;