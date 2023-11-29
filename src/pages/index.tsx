import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "../components/MyTable"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let product = [
    {ID: 1,name: "product 1",price: 3000},
    {ID: 2,name: "product 2",price: 1000},
    {ID: 3,name: "product 3",price: 500},
    {ID: 4,name: "product 4",price: 2000},
];
  let product2 = [
    {ID: 7,name: "product 11",price: 3000},
    {ID: 8,name: "product 22",price: 1000},
    {ID: 9,name: "product 33",price: 500},
    {ID: 10,name: "product 44",price: 2000},
  ];
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <MyTable myData={product} caption={"product 1 list"}/>
      <MyTable myData={product2} caption={"product 2 list"}/>
    </main>
  )
}
