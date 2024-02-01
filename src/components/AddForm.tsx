import React from 'react';

export default function AddForm(props) {
    return (
       <form className={"mb-4"}>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent"} type={"text"} name={"name"} placeholder={"name"}/>
           <input className={"border mr-8 rounded px-4  py-2 bg-transparent"} type={"number"} name={"price"} placeholder={"3000"}/>
           <input className={"bg-pink-200 px-4 py-2 rounded text-white hover:shadow"} type={"submit"} value={"add product"}/>
       </form>
    );
}

