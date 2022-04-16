import React, { useEffect, useState } from 'react';
import { getStoredCart, removeFromDb } from '../othersFile/Fakedbs';
import nuture from '../../image/nature.jfif'
import proparty from '../../image/proparty.jfif'
import wadding from '../../image/wedding.jfif'
import eventphoto from '../../image/event.jpg'
import CheckoutCard from './CheckoutCard';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Checkout = () => {
    const [cart, setCart] = useState([]);
    const servies = [{id:"1",price:'49', servieName: "Nature Photography",Image:`${nuture}`, about:"You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"},
                         {id:"2",price:'89', servieName: "Property Tours",Image:`${proparty}`, about:"You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"}, 
                         {id:"3",price:'79', servieName: "Eventy Coverage",Image:`${eventphoto}`, about:"You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"}, 
                         {id:"4", price:'99',servieName: "Weeding Photography",Image:`${wadding}`, about:"You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"}, 

                    ]
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = servies.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, []);

        const removebtn=(id)=>{
            const rest = cart.filter(pd => pd.id !== id);
            setCart(rest);
            removeFromDb(id);
        }
    return (
        <div className='bg-zinc-900 min-h-screen py-11'>
           {
               cart.map(cd=> <CheckoutCard cd={cd} removebtn={removebtn}></CheckoutCard>)
           }
           <div className='flex justify-center container mr-5 mt-16  '><button className='border-2 px-7 py-1 rounded-md text-white'>Place Order</button></div>
        </div>
    );
};

export default Checkout;