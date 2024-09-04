import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Logo from "../../../public/resourcLogo.png"
import Link from 'next/link'
import Archives from '../../../public/archive.png'
import Bgsmall from '../../../public/bgsmall.png'



type MockArchive = {
    id: number,
    vid: StaticImageData,
    title: string,
    speaker: string,
    time: string,
    type: string,
    date: string
}


const ArchivesesData: MockArchive[] = [
    {
        id:0 ,
        vid: Archives,
        title: "Field Notes from the Trenches: Ensuring High-Availability and Resilience in Blockchain Node Operations",
        speaker: "by: Ukeme David Eseme", 
        time: "8:00Am",
        type: "panel Session",
        date: "17/10/19"
    },
    {
        id: 1 ,
        vid: Archives,
        title: "How to write content that connects with target audience",
        speaker: "by: Victor Fawole",
        time: "9:00am",
        type: "panel Session",
        date: "17/10/19"
    },
    {
        id:2,
        vid: Archives,
        title: "Science on the blockchain - Introduction to Decentralized Science",
        speaker: "by: Scott Itepu",
        time: "10:00Am",
        type: "panel Session",
        date: "17/10/19"
    },
    {
        id:3,
        vid: Archives,
        title: "Field Notes from the Trenches: Ensuring High-Availability and Resilience in Blockchain Node Operations",
        speaker: "by: Ukeme David Eseme",
        time: "12:00PM",
        type: "panel Session",
        date: "17/10/19"
    },
    {
        id:4,
        vid: Archives,
        title: "Field Notes from the Trenches: Ensuring High-Availability and Resilience in Blockchain Node Operations",
        speaker: "by: Ukeme David Eseme",
        time: "8:00",
        type: "panel Session",
        date: "17/10/19"
    },
    {
        id:5,
        vid: Archives,
        title: "Field Notes from the Trenches: Ensuring High-Availability and Resilience in Blockchain Node Operations",
        speaker: "by: Ukeme David Eseme",
        time: "8:00",
        type: "panel Session",
        date: "17/10/19"
    },
]

function Archive() {
    const [ selectedArchive, setSelectedArchive ] = useState<MockArchive | null>(null);
    const [ VidArch, setVidArchive ] =  useState<MockArchive[]>([]);

    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
            // const response = await fetch('/api/archives');
            // const data = await response.json();
            const data = ArchivesesData; // using mockData for now
            setVidArchive(data);
            setSelectedArchive(data[0]); // default to the first item
        };

        fetchData();
    }, []);



  return (
    <div className='px-3 lg:px-16 xl:px-56'>

    <header className="flex flex-col md:flex-row justify-between items-center w-full py-10">
        <div className="flex items-center gap-2">
            <Link href="/" className='flex space-x-3 items-center'>
                    <Image src={Logo} alt="" width={0} height={0} className="w-[50px] md:w-[100px]" />
                    <p className='font-semibold text-xl md:text-2xl'>Web3lagos Event</p>
            </Link>
        </div>
        <div className='flex flex-wrap gap-4 mt-4 md:mt-0'>
            <Link href="#">Live Stream</Link>
            <Link href="#">Archived Stream</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Register Here</Link>
        </div>
    </header>

    <section className='flex flex-col md:flex-row justify-between gap-10 md:gap-20 mt-10 mb-10'>
        {/* First Detail */}
        <div className='flex-1 md:w-[726px] xl:w-[1024px]'>
            <div className='flex items-center text-[#0096FF]'>
                <p>Archived</p>
                <p className='text-black font-bold mx-2'>{'>>'}</p>
                <p>Main Event</p>
            </div>
            <div className='mt-4'>
                <Image src={selectedArchive?.vid || Archives} alt='ghghgh' layout='responsive' width={1000} height={500} />
            </div>
            <div className='space-y-8 mt-5 text-start flex flex-col items-start'>
                <p className='border px-3 py-2 rounded-xl bg-[#EFF4FF] font-semibold'>Detail</p>
                <p className='font-medium text-2xl md:text-4xl leading-8 md:leading-10'>Field Notes from the Trenches: Ensuring High-Availability and Resilience in Blockchain Node Operations</p>
            </div>
            <div className='flex flex-wrap gap-4 mt-5'>
               
                    <div className='flex items-center'>
                        <div className='h-12 w-1 bg-[#A02B2D] mx-4' />
                        <div>
                        <p className='font-medium'>Speaker</p>
                        <p>{selectedArchive?.speaker}</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='h-12 w-1 bg-[#A02B2D] mx-4' />
                        <div>
                        <p className='font-medium'>Type</p>
                        <p>{selectedArchive?.type}</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='h-12 w-1 bg-[#A02B2D] mx-4' />
                        <div>
                            <p className='font-medium'>Date</p>
                            <p>{selectedArchive?.date}</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='h-12 w-1 bg-[#A02B2D] mx-4' />
                        <div>
                            <p className='font-medium'>Time</p>
                            <p>{selectedArchive?.time}</p>
                        </div>
                    </div>
               
            </div>
        </div>

        {/* Second Detail */}
        <section className='flex-1'>
            <div className='mb-4'>
                <h1 className='bg-[#E8ECF4] py-2 px-3 rounded-2xl text-lg md:text-xl'>Hall 1</h1>
            </div>
            <div className='relative overflow-y-auto h-[70vh]' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className='flex flex-col gap-10 mt-5 overflow-y-auto pr-5'>
                    {VidArch.map((arch) => (
                        <div key={arch.id} className={`flex gap-10 flex-wrap lg:flex-nowrap cursor-pointer ${arch.id === selectedArchive?.id ? 'bg-[#EFF4FF]' : ''}`}  onClick={() => setSelectedArchive(arch)}>
                            <div className='lg:w-[40%]'>
                                <Image src={arch.vid} alt='hghsd' className='rounded-3xl'   />
                            </div>
                            <div className='space-y-4 mt-3'>
                                <h1 className='font-semibold'>
                                    {arch.title.split(' ').slice(0, 6).join(' ')}
                                    {arch.title.split(' ').length > 7 && '...'}
                                </h1>
                                <p className='text-[#545454]'>{arch.speaker}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </section>
</div>
  )
}

export default Archive
