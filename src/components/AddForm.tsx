import {useState} from "react";
import findMaxID from "@/utlis/findMaxID";

function AddForm({MyDataState,setMyDataState}) {
    const [nameState,setNameState] = useState("");
    const [priceState,setPriceState] = useState("");

    const changeNameHandler = (e)=>{
       // formData.name =e.target.value;
        setNameState(e.target.value);
     }
     const changePriceHandler = (e)=>{
        // formData.price =e.target.value;
         setPriceState(e.target.value);
     }
     const submiHandler = (e)=>{
        e.preventDefault();
        /*formData.ID= Math.random();
         console.log(formData);*/
         setMyDataState([...MyDataState,{
             name: nameState,
             price: priceState,
             ID : findMaxID(MyDataState) + 1
         }]);
         setNameState("");
         setPriceState("");
     }
    return (
        <form className={"mb-8 mt-8 border p-12"} onSubmit={submiHandler}>
            <input className={"border mr-3"} type={"text"} value={nameState} name={"name"} placeholder={"name"} onChange={changeNameHandler}/>
            <input className={"border mr-3"} type={"text"} value={priceState} name={"price"} placeholder={"Price"} onChange={changePriceHandler}/>
            <input className={" bg-blue-400 text-white rounded p-2 border mr-3"} type={"submit"} value={"add Product"}/>
        </form>
    );
}

export default AddForm;