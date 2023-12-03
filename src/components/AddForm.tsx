const formData ={
    ID:"",
    name:"",
    price:""
}
function AddForm({MyDataState,setMyDataState}) {

    const changeNameHandler = (e)=>{
        formData.name =e.target.value;
     }
     const changePriceHandler = (e)=>{
         formData.price =e.target.value;
     }
     const submiHandler = (e)=>{
        e.preventDefault();
        formData.ID= Math.random();
         console.log(formData);
         setMyDataState([...MyDataState,formData]);
     }
    return (
        <form className={"mb-8 mt-8 border p-12"} onSubmit={submiHandler}>
            <input className={"border mr-3"} type={"text"} name={"name"} placeholder={"name"} onChange={changeNameHandler}/>
            <input className={"border mr-3"} type={"text"} name={"price"} placeholder={"Price"} onChange={changePriceHandler}/>
            <input className={" bg-blue-400 text-white rounded p-2 border mr-3"} type={"submit"} value={"add Product"}/>
        </form>
    );
}

export default AddForm;