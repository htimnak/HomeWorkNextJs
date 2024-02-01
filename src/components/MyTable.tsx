import React, {useState} from 'react';
interface Product {
    ID:number,
    name:string,
    price:number
}

export default  function MyTable({myData , caption}) {
    const [captionState,SetCaptionState ]=useState(caption);
    function clickHandler(){
        SetCaptionState("update Caption");
        console.log(caption);
    }
   // console.log(myData);
    return (
        <table className={"w-full mb-24 "}>
            {
                caption && <caption className={"bg-green-200 text-gray-600"} style={{captionSide:"bottom"}}>{captionState}</caption>
            }

            <tbody >
            {
                myData.map((item,index)=> {
                     {
                        return (
                            <tr>
                                <td className={"border border-gray-200 text-gray-400 "}>{item.ID}</td>
                                <td className={"border border-gray-200 text-gray-400"}>{item.name}</td>
                                <td className={"border border-gray-200 text-gray-400"}>{item.price}</td>
                                <td className={"border border-gray-200 text-gray-400"}>
                                    <button className={" text-pink-500"} onClick={clickHandler}>change Caption</button>
                                </td>
                            </tr>
                        )

                    }
                })
            }

            </tbody>
        </table>
    );
}

