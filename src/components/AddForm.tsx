import React, { useState} from 'react';
import type {ChangeEvent, FormEvent ,Dispatch, SetStateAction,} from 'react';
import findMaxID from "@/utlis/findMaxID";
import type  Product from "@/types/Product";

interface Prop {
    SetMyDataState : Dispatch<SetStateAction<Product[]>>
}



export default function AddForm({SetMyDataState}:Prop) {
   const [nameState ,setNameState]=useState("");
   const [priceState ,setPriceState]=useState("");

    const ChangeNameHandler = (e:ChangeEvent<HTMLInputElement>) => {

        setNameState(e.target.value)
    };
    const ChangePriceHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setPriceState(e.target.value)
    }
    const SubmitHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       /* SetMyDataState([...MyDataState,{
            ID:findMaxID(MyDataState)+1  ,
            name: nameState,
            price: priceState,
        }]);*/
        SetMyDataState((prevState :Product[])=>{
            let result: Product ={
                ID:findMaxID(prevState)+1  ,
                name: nameState,
                price: Number(priceState),
            };


            return[
                ...prevState,result
            ]
        })

        setNameState("");
        setPriceState("");

    }
    return (
       <form className={"mb-4 p-4 bg-gray-50 shadow"} onSubmit={SubmitHandler}>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent hover:border-green-200 hover:shadow  focus:outline-none focus:ring focus:ring-green-200"}
                  type={"text"} name={"name"} placeholder={"name"} value={nameState} onChange={ChangeNameHandler}/>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent hover:border-green-200  hover:shadow focus:outline-none focus:ring focus:ring-green-200"}
                  type={"number"} name={"price"} placeholder={"3000"} value={priceState} onChange={ChangePriceHandler}/>
           <input className={"bg-pink-200 px-4 py-2 rounded text-gray-500 hover:shadow"}
                  type={"submit"} value={"add product"}/>
       </form>
    );
}

