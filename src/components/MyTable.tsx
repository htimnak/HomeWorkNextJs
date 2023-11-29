interface product{
    ID:number,
    name:string,
    price:number
}
interface props{
    myData : Array<product>
}
export default function MyTable({myData}: props){
    console.log(myData);
    return (

            <table>
                <tbody>

                    {
                        myData.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.ID}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>



    )

}
//export default MyTable;