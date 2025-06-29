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
    <div className="flex flex-col justify-center items-center gap-2">
      <div>
          <p className={`${ubuntu.className} text-2xl p-4`}>Fail Safe | 赤点チェッカー</p>
          <Separator className="bg-black"/>
      </div>
      <p className="text-xl p-4">点数を入力...</p>
      <div className="flex gap-4">
        <Button onClick={addComp} variant={"outline"} className="transition hover:opacity-35">計算する科目を増やす</Button>
        <Button onClick={delComp} variant={"outline"} className="transition hover:opacity-35 text-red-500">計算する科目を減らす</Button>
      </div>
      
        {comp.map((_, idx) => (
          <div key={idx} className="w-full mb-4 px-3">
            <p className="text-lg font-bold p-2">科目 : {idx + 1}</p>
            <CalScore />
          </div>
        ))}
    </div>
  )
}
