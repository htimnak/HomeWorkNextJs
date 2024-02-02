import React from 'react';
interface Data {
    ID: number,
   [key:string]:any
}
function FindMaxId(dataArray:Array<Data>) {
    let maxID = 0;
    for(let i= 0; i< dataArray.length ; i++){
        const data = dataArray[i];
        if(data.ID > maxID){
            maxID = data.ID;
        }
        return maxID;
    }
}

export default FindMaxId;