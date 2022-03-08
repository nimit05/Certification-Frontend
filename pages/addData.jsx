import React from 'react';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';
import Link from 'next/link';
import Select from 'react-select'

const addData = () => {
    const gender = [
        {value: "male" , label : "Male"},
        {value: "female" , label : "Female"},
        {value: "others" , label : "Others"},
    ]
    return (
        <Layout login={true} head="Search">
            <div className="w-1/3 m-auto p-4">
                <div className='text-center	text-4xl font-bold mb-2'>
                    Add Data
                </div>

                <div className='w-3/4 m-auto mt-2'>
                    <Input child={"Enter your name"} type="text" name="Name" />
                    <Input child={"Enter your roll no"} type="number" name="Roll No" />

                    <div className='text-xl mb-2'>Gender</div>
                    <Select options={gender} />
                    
                </div>

                <div className='w-1/4 m-auto p-4'>
                    <Button  width="w-full">
                        Sign Up
                    </Button>
                </div>

                <div className='text-center'>
                    Already have a account ?
                    <Link href="/login">  Login</Link>
                </div>
                
            </div>
        </Layout>
    );
};

export default addData;