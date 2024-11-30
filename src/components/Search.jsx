import React from 'react'
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import data from '@/Shared/data'
  

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full
     flex-col md:flex md:flex-row gap-10 px-5 items-center
     w-[60%]'>
        <Select>
  <SelectTrigger  className="outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
    <SelectItem value="blue">Rent</SelectItem>
  </SelectContent>
</Select>
  <Separator orientation="vertical" className="hidden md:block" />
<Select>
  <SelectTrigger className="outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Car Company" />
  </SelectTrigger>
  <SelectContent>
    {data.carCompany.map((maker,index)=>(
        <SelectItem value={maker.name}>{maker.name}</SelectItem>
    ))} 
  </SelectContent>
</Select>
  <Separator orientation="vertical" className="hidden md:block" />
<Select>
  <SelectTrigger  className="outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {data.carPricing.map((price,index)=>(
          <SelectItem value={price.amount}>{price.amount}</SelectItem>
    ))}
  </SelectContent>
</Select>
<div>
<CiSearch className='text-[50px] text-white p-3
 bg-primary rounded-full hover:scale-105 cursor-pointer transition-all'/>
</div>

    </div>
  )
}

export default Search