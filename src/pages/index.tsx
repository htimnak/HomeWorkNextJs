import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "@/components/MyTable";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
let product =[
  {ID:"1",name:"product1",price:"3000"},
  {ID:"2",name:"product2",price:"1500"},
  {ID:"3",name:"product3",price:"500"},
  {ID:"4",name:"product4",price:"2000"},
]


  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-green-50 p-24 ${inter.className}`}
    >
    <MyTable myData={product} caption={"product1"}/>


    </main>
  )
}
