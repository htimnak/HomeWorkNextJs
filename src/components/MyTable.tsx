import React, {useState} from 'react';
import AddForm from "@/components/AddForm";
import Product from "@/types/Product";

interface Props {
    myData :Array<Product>,
    caption ?: string
}
export default  function MyTable({myData , caption}:Props) {
    const [MyDataState,SetMyDataState ]=useState(myData);
    const deleteHandler = (ID:number)=>{
        let  result= MyDataState.filter((item)=>{
            if(item.ID != ID) {
                return true;
             }
            }

        )
        SetMyDataState(result);
    }
   // console.log(myData);
    return (
        <>
            <AddForm MyDataState={MyDataState} SetMyDataState={SetMyDataState}/>
            <table className={"w-full mb-24 "}>
                {
                    caption && <caption className={"bg-green-200 text-gray-600"} style={{captionSide:"bottom"}}>{caption}</caption>
                }

                <tbody >
                {
                    MyDataState.map((item,index)=> {

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

