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
    const clickHandler = ()=>{
        alert("clicked");
    }
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
                                    <td className={"border"}><button onClick={clickHandler}>Click</button></td>
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>



    )

}
//export default MyTable;