import React from 'react'
import { IoMdPeople } from "react-icons/io";

export default function Header({ className }) {
    return (
        <div className={'h-12 w-full bg-yellow-400 align-middle py-2 ps-6 flex font-quicksand ' + className}>
            <IoMdPeople color='white' className='h-8 w-8' />
            <span className='text-white leading-8 ms-2 select-none'>Story Mode - Character </span>
        </div>
    )
}
