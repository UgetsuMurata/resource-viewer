import React from 'react'
import Header from './Header'
import { images } from '../GLOBAL_VARIABLES';

export default function Sidebar({ children, setItem, resetValues }) {
    return (
        <div className='h-auto min-h-screen relative bg-white'>
            <Header className={"fixed top-0 left-0 z-20"} />
            <div className={"h-full w-60 fixed shadow-xl bg-white pt-20 z-10"}>
                {
                    images.CHARACTERS.map((item) => {
                        return <SidebarItems itemName={item.NAME} itemLink={item} setItem={setItem} resetValues={resetValues}/>;
                    })
                }
            </div>
            <div className='w-full h-full min-h-max pt-12 ps-60'>
                {children}
            </div>
        </div>
    )
}

function SidebarItems({ itemName, itemLink, setItem, resetValues }) {
    return (
        <div
            className={'w-full p-2 ps-10 text-base text-black font-quicksand hover:bg-slate-100 cursor-pointer'}
            onClick={()=>{
                if (Array.isArray(resetValues)) {  // Check if it's an array of functions
                    resetValues.forEach(resetFunc => resetFunc(0));
                }
                setItem(itemLink);
                }}>
            {itemName}
        </div>
    )
}