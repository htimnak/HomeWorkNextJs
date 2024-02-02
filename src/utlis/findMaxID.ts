import React from 'react';
import {number} from "prop-types";
interface Data {
    ID: number,
   [key:string]:any
}
export default  function FindMaxId(dataArray:Array<Data>) :number {
   // console.log(dataArray);
    let maxID:number = 0 ;
    let i :number= 0;

    for ( i = 0; i < dataArray.length; i++) {
        const data:Data = dataArray[i];
        if(data.ID > maxID){
            maxID = data.ID;
        }
    }
    return maxID++ ;



}

