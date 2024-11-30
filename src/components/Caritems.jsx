import { Separator } from "@/components/ui/separator"
import React from 'react'
import { LuFuel } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";


function Caritems({car}) {
  return (
    <div className='rounded-xl border cursor-pointer hover:shadow-md bg-white'>
        <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">New</h2>
        <img src={car.image} width={'100%'} height={250} className='rounded-t-xl'/>
        <h2 className='font-bold text-black text-lg mt-4 mb-2'>{car.name}</h2>
        <Separator/>
        <div className='grid grid-cols-3 mt-5'>
            <div className='flex flex-col items-center'>
                <LuFuel className='text-lg mb-2'/>
                <h2>{car.miles} miles</h2>          
            </div>
            <div className='flex flex-col items-center'>
               <MdSpeed className='text-lg mb-2'/>
               <h2>{car.fuelType}</h2>          
            </div>
            <div className='flex flex-col items-center'>
               <GiGearStickPattern className='text-lg mb-2' />
               <h2>{car.gearType}</h2>          
            </div>
        </div>
        <Separator className='my-2'/>
        <div className='flex items-center justify-between mt-2'>
            <h2>${car.price}</h2>
            <h2 className="text-primary text-sm flex items-center gap-2">
                View Details 
                <MdOpenInNew />
            </h2>
        </div>
    </div>
  )
}

export default Caritems