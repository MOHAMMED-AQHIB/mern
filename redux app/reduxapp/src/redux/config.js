import {configurestore } from 'reduxjs/toolkit'

const counterlogic=(state=0,action)=>{

}
export const mystore = configurestore({
    reducer:{
        "counter": counterlogic,
    }
})