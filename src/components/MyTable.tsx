import {useState} from "react";


interface product{
    ID:number,
    name:string,
    price:number
}
interface props{
    myData : Array<product>,
    caption ?: string
}
export default function MyTable({myData,caption}:props){
    const [MyDataState,setMyDataState]=useState(myData);


    const deleteHandler = (id:number)=>{
      let result =  MyDataState.filter((item)=>{
            if( item.ID === id){
                return false;
            }
            else {
                return  true;
            }
        });
        console.log(result);
        setMyDataState(result);
    }

    return (

        <table className={"w-full bg-white text-black text-center  "}>
            {
                /*caption != null ? <caption style={{backgroundColor:"BurlyWood",captionSide:"bottom"}}>{caption}</caption> : ''*/
                caption && <caption style={{backgroundColor:"BurlyWood",captionSide:"bottom"}}>{caption}</caption>
            }

            <tbody>

            {
                MyDataState.map((item,index)=>{
                    return(
                        <tr>
                            <td className={"border"}>{item.ID}</td>
                            <td className={"border"}>{item.name}</td>
                            <td className={"border"}>{item.price}</td>
                            <td className={"border"}><button onClick={()=>{
                                deleteHandler(item.ID);
                            }}>Delete</button></td>
                        </tr>

                    )
                })
            }


            </tbody>
        </table>



    )

}
//export default MyTable;