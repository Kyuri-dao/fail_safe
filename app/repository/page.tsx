import { Button } from "@/components/ui/button";
import { ubuntu } from "@/utils/fonts";
import { Separator } from "@/components/ui/separator";
import { BsGithub } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import Link from "next/link";

export default function Repository(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div>
                <p className={`${ubuntu.className} text-2xl p-4`}>Repository | リポジトリ</p>
                <Separator className="bg-black"/>
            </div>
            
            <div className="flex flex-col gap-4 p-4 items-center">
                <p className="text-xl">開発リポジトリ</p>
                <Link href={"https://github.com/Kyuri-dao/fail_safe"}>
                    <Button variant={"outline"} className="w-[250px]">
                        <BsGithub size={50} />
                        <p className="text-lg">fail_safe/Kyuri-dao</p>
                    </Button>
                </Link>

                <p className="text-xl">開発者サイト</p>
                <Link href={"https://kyuri-dao.github.io/"}>
                    <Button variant={"outline"} className="w-[250px]">
                        <AiOutlineGlobal size={50}/>
                        <p className="text-lg">Homepage</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}