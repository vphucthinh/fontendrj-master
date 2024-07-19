import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from '../API/api';
import {Constants} from "../Constant/Constant";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([])

    const addToCart = async (itemId) => {
           if (!cartItems[itemId]) {
                setCartItems((prev)=>({...prev, [itemId]: 1 }))
           }
           else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           }
           if (token) {
               await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
           }
    }

    const removeFromCart = async (itemId) => {
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
          if (token) {
             await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
          }
    } 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
                if(cartItems[item]>0) {
                    let itemInfo = food_list.find((product)=>product._id === item);
                    totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
            const token = sessionStorage.getItem('atoken');
            try {
              const response = await api.get(`${Constants.API_URL}${Constants.API_ENDPOINTS.FOOD.LIST}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`, 
                },
              });
              setFoodList(response.data.data);
            } catch (error) {
              console.error('Error fetching food items:', error);
            }
    }

    const loadCartData = async (token) => {
        const sessionStorage = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(sessionStorage.data.cartData);
    }

    useEffect(() => {
       
       async function loadData() {
        await fetchFoodList();
        if (sessionStorage.getItem("atoken")) {
            setToken(sessionStorage.getItem("atoken"));
            await loadCartData(sessionStorage.getItem("atoken"));
        }
       }
       loadData();
    },[])

   
    const contextValue = {
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
         getTotalCartAmount,
         url,
         token,
         setToken
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider