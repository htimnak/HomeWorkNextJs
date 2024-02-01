import React from 'react';

export default  function MyTable({myData , caption}) {
    console.log(myData);
    return (
        <table className={"w-full "}>
            <caption className={"bg-green-200 text-gray-600"} style={{captionSide:"bottom"}}>{caption}</caption>
            <tbody >
            {
                myData.map((item,index)=>{
                    return(
                        <tr>
                            <td className={"border border-gray-200 text-gray-400 "}>{item.ID}</td>
                            <td className={"border border-gray-200 text-gray-400"}>{item.name}</td>
                            <td className={"border border-gray-200 text-gray-400"}>{item.price}</td>
                        </tr>
                        )

                })
            }

            </tbody>
        </table>
    );
}

