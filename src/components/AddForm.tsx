import React from 'react';

export default function AddForm(props) {
    return (
       <form>
           <input type={"text"} name={"name"} placeholder={"name"}/>
           <input type={"number"} name={"price"} placeholder={"3000"}/>
           <input type={"submit"} value={"add product"}/>
       </form>
    );
}

