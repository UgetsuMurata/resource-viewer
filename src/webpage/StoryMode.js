import React, { useEffect, useState } from 'react';
import { images } from '../GLOBAL_VARIABLES';
import Sidebar from '../components/Sidebar';
import { MdOutlineContentCopy } from "react-icons/md";

export default function StoryMode() {
    const [item, setItem] = useState(images.CHARACTERS[0]);
    const [body, setBody] = useState(null);
    const [face, setFace] = useState(null);
    const [pose, setPose] = useState(null);
    const [characterProp, setCharacterProp] = useState(null);

    return (
        <Sidebar setItem={setItem} resetValues={[setBody, setFace, setPose, setCharacterProp]}>
            <div className="flex flex-grow">
                <div className="flex-grow p-4 flex justify-center items-center relative">
                    <div className="relative h-full w-full flex justify-center items-center me-96">
                        <img src={item.POSES[pose]?.BODIES[body]?.src} alt={item.POSES[pose]?.BODIES[body]?.alt} className="absolute inset-0 h-full w-auto max-w-full ms-auto me-auto object-cover" />
                        <img src={item.POSES[pose]?.FACES[face]?.src} alt={item.POSES[pose]?.FACES[face]?.alt} className="absolute inset-0 h-full w-auto max-w-full ms-auto me-auto object-cover" />
                    </div>
                </div>
                <RightBar item={item} setBody={setBody} setFace={setFace} setCharacterProp={setCharacterProp} setPoseOuter={setPose} />
            </div>
        </Sidebar>
    )
}

function RightBar({ item, setBody, setFace, setPoseOuter, setCharacterProp }) {
    const [position, setPosition] = useState(1);
    const [pose, setPose] = useState(0);
    const [costume, setCostume] = useState(0);
    const [facialExpression, setFacialExpression] = useState(0);
    const [codeBlock, setCodeBlock] = useState(`[
    {
        "image": "",
        "placement": "",
        "toShow": true
    }
]`);

    useEffect(() => {
        setPoseOuter(pose);
        setCostume(0);
        setFacialExpression(0);
    }, [pose]);

    useEffect(() => {
        setBody(costume);
        setFace(facialExpression);
        setCodeBlock(`[
    {
        "image": "${item.code}${item.POSES[pose].POSE_NUMBER}_b_${item.POSES[pose].BODIES[costume].code}",
        "placement": "${position};BODY",
        "toShow": true
    },
    {
        "image": "${item.code}${item.POSES[pose].POSE_NUMBER}_f_${item.POSES[pose].FACES[facialExpression].code}",
        "placement": "${position};FACE",
        "toShow": true
    }
]`)
    }, [costume, facialExpression, position, pose]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeBlock)
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy text to clipboard');
            });
    };

    return (
        <div className="h-auto min-h-screen relative bg-white">
            <div className="h-full w-96 text-lg text-black fixed right-0 shadow-xl bg-white pt-8 pl-4 z-10 overflow-y-auto">
                <div>
                    <p className='text-sm'>Position</p>
                    {
                        [1, 2, 3, 4, 5].map((item) => {
                            return <NumberValueHolder key={item} number={item} valueSetter={setPosition} value={item} activeValue={position} />;
                        })
                    }
                </div>
                <div className='mt-2'>
                    <p className='text-sm'>Pose</p>
                    {
                        item.POSES.map((item, index) => {
                            return <NumberValueHolder key={index} number={index + 1} lowerValueResetter={[setCostume, setFacialExpression]} valueSetter={setPose} value={index} activeValue={pose} />;
                        })
                    }
                </div>
                <div className='mt-2'>
                    <p className='text-sm'>Costume</p>
                    {
                        item.POSES[pose].BODIES.map((item, index) => {
                            return <NumberValueHolder key={index} number={item.alt} valueSetter={setCostume} value={index} activeValue={costume} />;
                        })
                    }
                </div>
                <div className='mt-2'>
                    <p className='text-sm'>Facial Expressions</p>
                    {
                        item.POSES[pose].FACES.map((item, index) => {
                            return <NumberValueHolder key={index} number={item.alt} valueSetter={setFacialExpression} value={index} activeValue={facialExpression} />;
                        })
                    }
                </div>
                <div className='mt-2'>
                    <p className='text-sm'>Code Block</p>
                    <div className='px-8 relative'>
                        <MdOutlineContentCopy className='absolute top-0 right-0 z-10 me-10 mt-2 text-blue-500 hover:text-blue-200' onClick={copyToClipboard}/>
                        <div className='relative'>
                            <div className='w-full min-h-32 bg-black text-white text-xs p-2 mb-20 rounded-lg'>
                                <pre>{codeBlock}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NumberValueHolder({ number, lowerValueResetter, valueSetter, value, activeValue }) {
    return (
        <div className={'min-w-8 text-xs h-8 p-2 mb-2 ' + (activeValue == value ? "bg-yellow-100" : "bg-yellow-200") + ' text-black me-2 rounded-md align-middle inline-flex items-center justify-center cursor-pointer hover:brightness-90'}
            onClick={() => {
                valueSetter(value);
                if (Array.isArray(lowerValueResetter)) {  // Check if it's an array of functions
                    lowerValueResetter.forEach(resetFunc => {
                        if (typeof resetFunc === 'function') {
                            resetFunc(0);
                        }
                    });
                } else if (typeof lowerValueResetter === 'function') {  // Check if it's a single function
                    lowerValueResetter(0);
                }
                }}>
            {number}
        </div>
    );
}
