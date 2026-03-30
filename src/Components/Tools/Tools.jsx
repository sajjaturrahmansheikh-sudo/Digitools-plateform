import React, { use } from 'react';
import Toolcard from '../Toolcard';

const Tools = ({ cartsPromis , carts , setCarts }) => {

    const tools = use(cartsPromis)

    return (
        <div className='py-20 container mx-auto'>  

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 rounded-lg'>
                {
                    tools.map((tool) => (
                        <Toolcard key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></Toolcard>
                    ))}
            </div>



        </div>
    );
};

export default Tools;