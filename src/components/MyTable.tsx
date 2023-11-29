interface product{
    ID:number,
    name:string,
    price:number
}
interface props{
    myData : Array<product>,
    caption ?: string
}
export default function MyTable({myData,caption}: props){
    console.log(myData);
    return (

            <table className={"w-full bg-white text-black text-center  "}>
                <caption style={{backgroundColor:"BurlyWood",captionSide:"bottom"}}>{caption}</caption>
                <tbody>

                    {
                        myData.map((item,index)=>{
                            return(
                                <tr>
                                    <td className={"border"}>{item.ID}</td>
                                    <td className={"border"}>{item.name}</td>
                                    <td className={"border"}>{item.price}</td>
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>



    )

}
//export default MyTable;