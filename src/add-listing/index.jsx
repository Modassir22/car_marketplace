import Header from '@/components/Header'
import React from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from "@/components/ui/separator"
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { carListing } from './../../config/schema'
import TextAreaField from './components/TextAreaField'
import {db} from './../../config'
import IconField from './components/iconField'
import UploadImage from './components/UploadImage'

function AddListing() {

    const [formData,setFormData] = useState([]);
    const [featuresData,setFeaturesData] = useState([]);

    /**
     * Use to capture User Input From form
     * @param {*} name 
     * @param {*} value 
     */
    const handleInputChange = (name,value)=>{
         setFormData((prevData)=>({
             ...prevData,
             [name]:value
         }))
        console.log(formData);
    }


    /**
     * Use to save Selected Features List
     * @param {*} name 
     * @param {*} value 
     */
    const handleFeatureChange = (name,value)=>{
        setFeaturesData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        console.log(featuresData);
    }
    const onSubmit = async (e)=>{
        e.preventDefault();

        const result = await db.insert(carListing).values({
            ...formData,
            features:featuresData
        });
        try{
            if(result){
                console.log("Data Saved");
            }
        }catch(e){
            console.log("Error",e);
        }

    }

  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                     {/* car Detail */}
                     <div>
                        <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {carDetails.carDetails.map((item,index)=>(
                                <div key={index}>
                                    <label className='text-sm flex gap-2 items-center mb-1'>
                                        <IconField icon={item?.icon}/>
                                        {item?.label} {item.required&&<span className='text-red-600'>*</span>}</label>
                                    {item.fieldType=='text' || item.fieldType=='number' ?
                                     <InputField item={item} handleInputChange={handleInputChange}/>
                                    :item.fieldType=='dropdown'?
                                    <DropdownField item={item} handleInputChange={handleInputChange}/>
                                    :item.fieldType=='textarea'?
                                    <TextAreaField item={item} handleInputChange={handleInputChange}/>
                                    : null}
                                </div>   
                            ))}
                        </div>
                     </div>
                     <Separator className="my-6"/>
                     {/* features List */}
                     <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                            {features.features.map((item,index)=>(
                                <div className='flex gap-2 items-center'>
                                    <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)}/> <h2>{item.label}</h2>    
                                </div>
                            ))}
                        </div>
                     </div>
                     <Separator className="my-6"/>
                     {/* car image */}
                     <UploadImage/>
                     <div  className='flex mg-10 justify-end'>
                        <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
                     </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing