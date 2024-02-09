import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "@/components/MyTable";
import {useState} from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counterState ,setCounterState]=useState(1);




  return (

    <main
      className={`flex min-h-screen flex-col items-center bg-green-50 p-24 ${inter.className}`}
    >
    <MyTable caption={"product1"}/>
      <button className={"bg-pink-200 text-gray-600 border border-pink-400  px-4 py-4 rounded"} onClick={()=>{ setCounterState(prevState => prevState +1);}} >inc Counter</button>



    </main>
  )
}
