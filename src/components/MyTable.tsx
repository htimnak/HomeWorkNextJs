export default function MyTable({myData}){
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