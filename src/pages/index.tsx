import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "@/components/MyTable";
import {useState} from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counterState ,setCounterState]=useState(1);

let product =[
  {ID:"1",name:"product1",price:"3000"},
  {ID:"2",name:"product2",price:"1500"},
  {ID:"3",name:"product3",price:"500"},
  {ID:"4",name:"product4",price:"2000"},
]
  let product2 =[
    {ID:"5",name:"product5",price:"3000"},
    {ID:"6",name:"product6",price:"1500"},
    {ID:"7",name:"product7",price:"500"},
    {ID:"8",name:"product8",price:"2000"},
  ]


  return (

    <main
      className={`flex min-h-screen flex-col items-center bg-green-50 p-24 ${inter.className}`}
    >
    <MyTable myData={product} caption={"product1"}/>
      <button className={"bg-pink-200 text-gray-600 border border-pink-400  px-4 py-4 rounded"} onClick={()=>{ setCounterState(prevState => prevState +1);}} >inc Counter</button>



    </main>
  )
}
