'use client'

import CalScore from "@/components/calScore"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ubuntu } from "@/utils/fonts";

export default function Home(){
  const [ comp, setComp ] = useState([0]);
  function addComp(){
    setComp([...comp, comp.length]);
  }

  function delComp(){
    setComp(comp.slice(0, -1))
  }

  return(
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
          <p className={`${ubuntu.className} text-2xl p-4`}>Fail Safe | 赤点チェッカー</p>
          <Separator className="bg-black"/>
      </div>
      <p className="text-xl p-4">点数を入力...</p>
      <div className="flex">
        <Button onClick={addComp} variant={"outline"} className="m-2 transition hover:opacity-35">計算コンポーネントを増やす</Button>
        <Button onClick={delComp} variant={"outline"} className="m-2 transition hover:opacity-35 text-red-500">計算コンポーネントを減らす</Button>
      </div>
      
        {comp.map((_, idx) => (
          <div key={idx} className="w-fit">
            <p className="text-lg font-bold w-fit px-4">科目 : {idx + 1}</p>
            <CalScore />
          </div>
        ))}
    </div>
  )
}
