import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
// import formula1 from "@/public/formula1.png";
// import formula2 from "@/public/formula2.png";

export default function DocsAcc(){
    return(
        <Accordion
            type="single"
            collapsible
            className="w-2/3"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">1.配点方式</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance w-full">
                    <p>
                        標準ではテスト7割、課題（レポートなど）3割で設定されていますが、
                        自分が判定したい教科の配点方式を指定してください。
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">2.平常点</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance w-full">
                    <p>
                        平常点は点をそのまま入力するのではなく、パーセントに換算して入力してください。
                        例）max30点の課題で15点だった→50（50%）を入力
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">3.テスト点</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance w-full">
                    <p>
                        テスト点は、実際に取れた点数をそのまま入力してください。
                        計算式は次の通りです。（前期中間 + 前期末 + 後期中間 + 学期末）/ 4
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">4.最終成績</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance w-full">
                    <p>
                        最終成績の算出をしたい場合は、必ずテスト点を算出したあとにボタンを押してください。
                        内部処理の関係で結果が表示されない場合があります。（後日修正予定）
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">計算式</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance w-full">
                    <p>
                        テスト点の算出に使われる式。Sはスコア（点数）の意。
                    </p>
                    <Image 
                        src={"/formula1.png"}
                        alt="Picture of formula to calculate tests score."
                        width={739}
                        height={189}
                    />
                    <p>
                        最終成績の算出に使われる式。Sは上と同様にスコアの意。Rはレポート点
                        画像の場合は配点方式がテスト点7割、レポート点3割の場合。
                    </p>
                    <Image
                        src={"/formula2.png"}
                        alt="Picture of formula to calculate a final score."
                        width={521}
                        height={191}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}