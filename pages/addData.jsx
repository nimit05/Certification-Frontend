import React , {useState} from 'react';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';
import Link from 'next/link';
import Select from 'react-select'

const addData = () => {

    const [sem , setSem] = useState([1])

    const gender = [
        {value: "male" , label : "Male"},
        {value: "female" , label : "Female"},
        {value: "others" , label : "Others"},
    ]

    const program = [
        {value: "btech" , label : "btech"},
        {value: "bsc" , label : "bsc"},
        {value: "Mba" , label : "Mba"},
    ]

    const uni = [
        {value: "dcrust" , label : "DCRUST"},
        {value: "du" , label : "DU"},
        {value: "ipu" , label : "IPU"},
    ]

    const college = [
        {value: "a" , label : "College A"},
        {value: "b" , label : "College B"},
        {value: "c" , label : "College C"},
    ]

    const handleClick = () => {
        let a = parseInt(sem[sem.length - 1]) + 1;
        let arr = [...sem, a];
        setSem(arr)
        console.log(arr);
    }

    return (
        <Layout login={true} head="Search">
            <div className="w-1/3 m-auto p-4">
                <div className='text-center	text-4xl font-bold mb-2'>
                    Add Data
                </div>

                <div className='w-3/4 m-auto mt-2'>

                    <Input child={"Enter your name"} type="text" name="Name" />
                    <Input child={"Enter your roll no"} type="number" name="Roll No" />

                    <div className='text-xl mt-4 mb-2'>Gender</div>
                    <Select options={gender} />
                    
                    <div className='text-xl mt-6 mb-2'>University</div>
                    <Select options={uni} />

                    <div className='text-xl mt-6 mb-2'>College</div>
                    <Select options={college} />

                    <div className='text-xl mt-6 mb-2'>Program</div>
                    <Select options={program} />

                    <div className='text-xl mt-6'>Marks</div>
                    
                    {sem.map((s) => (
                        <>
                            <Input key = {sem} child={`Enter your sem${s} result`} type="number" />
                       </>
                     )
                    )}
                    <div
                        className='text-blue-500 cursor-pointer'
                    onClick={handleClick}                        
                    >
                        Add next sem result
                    </div>
                </div>

                <div className='w-1/4 m-auto p-4'>
                    <Button  width="w-full">
                        Add
                    </Button>
                </div>

         
                
            </div>
        </Layout>
    );
};

export default addData;