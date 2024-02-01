import React from 'react';

export default function AddForm({SetMyDataState}) {
    const formData={
        ID:"",
        name:"",
        price:""
    }
    const ChangeNameHandler =(e)=>{
        formData.name= e.target.value;
    }
    const ChangePriceHandler=(e)=>{
        formData.price= e.target.value;
    }
    const SubmitHandler = (e)=>{
        e.preventDefault();

        console.log(formData);
        //SetMyDataState(formData);
    }
    return (
       <form className={"mb-4 p-4 bg-gray-50 shadow"} onSubmit={SubmitHandler}>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent hover:border-green-200 hover:shadow  focus:outline-none focus:ring focus:ring-green-200"}
                  type={"text"} name={"name"} placeholder={"name"} onChange={ChangeNameHandler}/>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent hover:border-green-200  hover:shadow focus:outline-none focus:ring focus:ring-green-200"}
                  type={"number"} name={"price"} placeholder={"3000"} onChange={ChangePriceHandler}/>
           <input className={"bg-pink-200 px-4 py-2 rounded text-gray-500 hover:shadow"}
                  type={"submit"} value={"add product"}/>
       </form>
    );
}

