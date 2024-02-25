import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.3} dragMomentum={true} className='relative w-60 h-72 rounded-[40px] bg-zinc-100 py-10 px-5 overflow-hidden '>
        <FaRegFileAlt className=''></FaRegFileAlt>
        <p className='text-base mt-5 font-semibold leading-tight'>{data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseCircleOutline /> : <MdOutlineFileDownload size=".8em" color='#000'></MdOutlineFileDownload>}             
                </span>
            </div>

            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }

        </div>
    </motion.div>
  )
}

export default Card