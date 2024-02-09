import React, {useEffect, useState} from 'react';
import AddForm from "@/components/AddForm";
import Product from "@/types/Product";

interface Props {
    caption ?: string
}

export default  function MyTable({caption}:Props) {
    let product :any[] = [];
    console.log("1");
    useEffect(()=>{
        console.log("useEffect");
         product =[
            {ID:"1",name:"product1",price:"3000"},
            {ID:"2",name:"product2",price:"1500"},
            {ID:"3",name:"product3",price:"500"},
            {ID:"4",name:"product4",price:"2000"},
        ]
    },[])
    console.log("2");
    console.log(" table component body ....");
    const [MyDataState,SetMyDataState ]=useState<Product[]|Array<any>>(product);
    const [refreshState ,setRefreshState] =useState(false)
    const deleteHandler = (ID:number)=>{
        let  result= MyDataState?.filter((item)=>{
            if(item.ID != ID) {
                return true;
             }
            }

        )
        SetMyDataState(result);
    }
    const refresh=()=>{
        setRefreshState(prevState =>  !prevState)
    }
   // console.log(myData);
    return (
        <>
            <button className={"bg-pink-200 text-gray-600 border border-pink-400  px-4 py-4 rounded"} onClick={refresh} >refresh</button>

            <AddForm MyDataState={MyDataState} SetMyDataState={SetMyDataState}/>
            <table className={"w-full mb-24 "}>
                {
                    caption && <caption className={"bg-green-200 text-gray-600"} style={{captionSide:"bottom"}}>{caption}</caption>
                }

                <tbody >
                {
                    MyDataState?.map((item,index)=> {

                            return (
                                <tr key={index}>
                                    <td className={"border border-gray-200 text-gray-400 "} >{item.ID}</td>
                                    <td className={"border border-gray-200 text-gray-400"}>{item.name}</td>
                                    <td className={"border border-gray-200 text-gray-400"} >{item.price}</td>
                                    <td className={"border border-gray-200 text-gray-400"}>
                                        <button className={" text-pink-500"} onClick={()=>{deleteHandler(item.ID)}}>delete</button>

                                    </td>
                                </tr>
                            )


                    })
                }

                </tbody>
            </table>
        </>

    );
}

