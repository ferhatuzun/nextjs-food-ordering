import { createSlice } from "@reduxjs/toolkit";


export type dataType={
    cardItems:{
        id:string,
        foodId:string,
        foodName:string,
        desc:string,
        removedIngredients:string[],
        price:number,
        quantity:number,
        subTotal:number
    }[],
    total:number
}

const initialState:dataType = {
    cardItems:[],
    total:0
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.cardItems.push(action.payload)
            state.total+=action.payload.subTotal
        },
        removeItem:(state,action)=>{
            state.cardItems.map((item)=>{
                if(item.id==action.payload){
                    return state.total-=item.subTotal
                }
            })
            state.cardItems =state.cardItems.filter((item)=>item.id!=action.payload)
        },
        addQuantity: (state,action)=>{
            state.cardItems.map((item)=>{
                if(item.id==action.payload){
                     item.quantity+=1
                     state.total+=item.price
                     item.subTotal=item.price*item.quantity
                }
            })
        },
        removeQuantity: (state,action)=>{
            state.cardItems.map((item)=>{
                if(item.id==action.payload){
                     item.quantity-=1
                     state.total-=item.price
                     item.subTotal=item.price*item.quantity
                }
            })
        }

    }
})

export const {addItem,removeItem,addQuantity,removeQuantity} = cardSlice.actions
export default cardSlice.reducer