import { useState } from "react";

import { FaCheck } from 'react-icons/fa';

const Toolcard = ({tool, carts, setCarts}) => {
    const [isBuying, setBuying] = useState(false);
    const handleBuying = ()=>{
        setBuying(true)
        setCarts([...carts, tool])
    }
    return (
        <div key={tool.id} className='shadow-lg px-6 py-3 rounded-lg space-y-3 border-[#F2F2F2] border-2'>
            <div className={`float-right badge badge-soft ${tool.tag == "popular" ? "badge-primary" : tool.tag == "best seller" ? "badge-warning" : tool.tag == "new" ? "badge-success" : ""}`}> {tool.tag.toUpperCase()} </div>
            <div className='mt-3'> <span className='border-2 border-gray-300 p-2 rounded-full'>{tool.icon}</span> </div>
            <div>
                <h3 className='text-[#101727] font-bold text-2xl'> {tool.name} </h3>
                <p className='text-[#627382]'> {tool.description} </p>
            </div>
            <div className='text-[#627382]'> <span className='text-[#101727] font-bold text-2xl'> ${tool.price}</span>/{tool.period} </div>
            <div>
                <ul className='space-y-3 mt-2.5'>
                    {
                        tool.features.map(feature => <li className='flex items-center gap-2.5 text-[#627382] '><FaCheck className='text-green-500' /> {feature}</li>)
                    }
                </ul>
            </div>

            <button onClick={handleBuying} className='btn btn-primary block w-full rounded-lg'> {isBuying ? "Add to cart": "Buy Now"} </button>
        </div>
    );
};

export default Toolcard;