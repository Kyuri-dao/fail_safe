'use client'

import { Input } from "./ui/input"
import { z } from "zod";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectItemProps } from "@radix-ui/react-select";
import { number } from "zod/v4-mini";

const formSchema = z.object({
    firstScore: z.number().min(1, {
        message: "User's test score must be at least 1 characters.",
    }),
    secondScore: z.number().min(1, {
        message: "User's test score must be at least 1 characters.",
    }),
    thirdScore: z.number().min(1, {
        message: "User's test score must be at least 1 characters.",
    }),
    fourthScore: z.number().min(1, {
        message: "User's test score must be at least 1 characters.",
    })
})

export default function CalScore(){
    const [ scores, setScores ] = useState({
        firstScore: "",
        secondScore: "",
        thirdScore: "",
        fourthScore: "",
    })

    const [ report, setReport ] = useState<string>("");

    const [ res, setRes ] = useState<number | null>(null);
    const [ scoringSys, setScoringSys ] = useState<string>("seven-three");

    const [ final, setFinal ] = useState<number | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setScores({
            ...scores,
            [e.target.name]: e.target.value,
        });
    }

    function handleCalc(e: React.FormEvent){
        e.preventDefault();
        const sum = 
            Number(scores.firstScore || 0) +
            Number(scores.secondScore || 0) +
            Number(scores.thirdScore || 0) +
            Number(scores.fourthScore || 0);
        setRes(sum / 4);
        console.log(`${scores.firstScore} + ${scores.secondScore} + ${scores.thirdScore} + ${scores.fourthScore} / 4 = ${sum / 4}`)
    }

    function handleReport(e: React.ChangeEvent<HTMLInputElement>){
        setReport(e.target.value);
    }

    function handleGenCalc(){
        console.log("Pushed handleGenCalc");
        handleCalc;
        console.log(scoringSys);

        let reportNum = Number(report || 0);
        switch(scoringSys){
            case "seven-three":
                const finalSevenThree = (res || 0 ) * 0.7 + (reportNum || 0) * 0.3;
                setFinal(finalSevenThree);
                console.log(`${res} * 0.7 + ${report} * 0.3 = ${finalSevenThree}`)
                break;

            case "eight-two":
                const finalEightTwo = (res || 0) * 0.8 + (reportNum || 0) * 0.2;
                setFinal(finalEightTwo);
                console.log(`${res} * 0.8 + ${report} * 0.2 = ${finalEightTwo}`);
                break;

            case "six-four":
                const finalSixFour = (res || 0) * 0.6 + (reportNum || 0) * 0.4;
                setFinal(finalSixFour);
                console.log(`${res} * 0.6 + ${report} * 0.4 = ${finalSixFour}`);
                break;

            case "all-in":
                setFinal(res);
                console.log(res);
                break;
        }
    }

    function borderCheck(){
        if(final === null){
            return "border-cyan-500";
        }else if(final < 60){
            return "border-red-600";
        }else{
            return "border-cyan-500";
        }
    }

    return(
        <div className={`flex flex-col md: m-4 justify-center items-center p-4 rounded-2xl border-4 ${borderCheck()}`}>
            <div className="flex flex-col p-2 justify-center items-center">
                <p className="text-xl font-bold">配点</p>
                <div className="p-2">
                    <Select
                        value={scoringSys}
                        onValueChange={setScoringSys}
                    >
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="配点方式を設定"/>
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectGroup defaultValue="seven-three">
                                <SelectLabel>配点方式</SelectLabel>
                                <SelectItem value="seven-three">テスト7割 : 平常点3割</SelectItem>
                                <SelectItem value="eight-two">テスト8割 : 平常点2割</SelectItem>
                                <SelectItem value="six-four">テスト6割 : 平常点4割</SelectItem>
                                <SelectItem value="all-in">テスト10割</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <p className="text-xl p-2 font-bold">平常点</p>
            <div className="flex justify-center items-center">
                <Input type={"number"} name="reportScore" placeholder="平常点" value={report} onChange={handleReport}/>
            </div>

            <p className="text-xl p-2 font-bold">テスト点</p>
            <div className="flex justify-center items-center">
                <form className="flex justify-center items-center gap-2" onSubmit={handleCalc}>
                    <Input type={"number"} name="firstScore" placeholder="前期中間" value={scores.firstScore} onChange={handleChange}/>
                    <Input type={"number"} name="secondScore" placeholder="前期末" value={scores.secondScore} onChange={handleChange}/>
                    <Input type={"number"} name="thirdScore" placeholder="後期中間" value={scores.thirdScore} onChange={handleChange}/>
                    <Input type={"number"} name="fourthScore" placeholder="学期末" value={scores.fourthScore} onChange={handleChange}/>

                    
                    <Button type="submit" variant={"outline"}>確定</Button>
                </form>
            </div>

            <div className="p-2">
                <p className="text-xl">
                    {res !== null ? `テスト点 : ${res}点` : "テスト点 : ?点"}
                </p>
            </div>

            <div className="flex justify-center items-center gap-4">
                <Button variant={"outline"} onClick={() => handleGenCalc()}>最終成績を算出</Button>
                <p className="text-xl font-bold">
                    {final !== null ? `最終成績 : ${final}点` : "最終成績 : ?点"}
                </p>
            </div>
        </div>
       
    )
}