import { toast } from "react-toastify";


const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment successful!")
    }
    const handleDelete = (item)=>{
        const filteredArray = carts.filter(i=> i.id !== item.id)
        setCarts(filteredArray);
        toast.success('Item removed!')
    }

    return (
        <div className="container mx-auto">
            <div className="border-[#F2F2F2] border-2 p-5 rounded-lg mb-14">
                <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>

                {
                    carts.length === 0 ? <p className="text-center text-3xl text-[#627382] m-15">Your Cart Is Empty</p> : <>
                        <div className="space-y-4 mt-10">
                            {
                                carts.map((item) => (
                                    <div className="flex justify-between items-center bg-[#F9FAFC] border-[#F2F2F2] border-2 rounded-lg p-5">
                                        <div className="flex gap-3.5 items-center">
                                            <div>
                                                <span className='border-2 border-gray-300 p-2 rounded-full'>{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-[#101727] font-semibold ">{item.name}</h4>
                                                <span className="text-[#627382]">${item.price} </span>
                                            </div>
                                        </div>
                                        <div><span onClick={()=> handleDelete(item)} className="text-red-500 cursor-pointer">Remove</span></div>
                                    </div>
                                ))}
                            <div className="flex justify-between items-center">
                                <div>Total:</div>
                                <div className="text-[#101727] font-bold text-2xl">${totalPrice}</div>
                            </div>
                            <button onClick={handlePayment} className="btn text-xl w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-white rounded-full">Proceed To Checkout</button>
                        </div>
                    </>
                }


            </div>
        </div>
    );
};

export default Cart;