import { ubuntu } from "@/utils/fonts"
import DocsAcc from "@/components/docsAcc"
import { Separator } from "@/components/ui/separator"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

export default function Docs(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div>
                <p className={`${ubuntu.className} text-2xl p-4`}>Docs | 使い方ガイド</p>
                <Separator className="bg-black"/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-xl p-4">基本的な使い方</p>
                <DocsAcc />
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-xl p-4">免責事項 | Discraimer</p>
                <div className="flex w-3/4 gap-4">
                    <Alert variant={"destructive"}>
                        <AlertCircleIcon color="red"/>
                        <AlertTitle className="text-red-500">免責事項 | Discraimer</AlertTitle>
                        <AlertDescription>
                            <p>本サイト「FailSafe」は、成績情報に基づく簡易的な赤点・進級判定支援ツールです。</p>
                            <ul className="list-inside list-disc">
                                <li>1. 入力された成績データは、ブラウザ上のみで処理され、サーバーには一切保存されません。</li>
                                <li>2. 本サイトの判定結果は参考用のものであり、公式な成績・進級判断を保証するものではありません。</li>
                                <li>3. 万一、入力された情報が第三者に漏洩したことによる損害が発生した場合でも、当方は一切の責任を負いかねます。</li>
                                <li>4. 本サイトの使用により生じたトラブルや損害等についても、当方は責任を負いません。</li>
                                <li>5. 本免責事項は予告なく変更されることがあります。</li>
                            </ul>
                            <p>ご利用の際は、上記の内容に同意したものとみなされます。</p>
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </div>
    )
}