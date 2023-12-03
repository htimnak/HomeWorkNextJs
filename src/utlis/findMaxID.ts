interface  Data {
        ID: number;
        [key:string]:any;
}
const findMaxID = (dataArray:Array<Data>)=>{
    let maxID:number = 0;
    for (let i:number=0; i<dataArray.length ; i++){
        const data :Data = dataArray[i];
        if(data.ID > maxID){
            maxID = data.ID;
        }

    }
    return maxID ;
}
export default findMaxID ;