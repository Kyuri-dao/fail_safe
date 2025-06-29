import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
        </Accordion>
    )
}