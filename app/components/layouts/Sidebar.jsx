import Link from "next/link";
import { TbHome2 } from "react-icons/tb";
import { GiFalconMoon } from "react-icons/gi";
import { CiImageOff,CiText  } from "react-icons/ci";

const style = {
    box:"p-2 bg-indigo-500 w-full rounded-md text-white font-bold block text-2xl flex flex-col place-items-center active:scale-95",
    text:'text-xs text-center ',
}


export default function Sidebar() {

    return (
        <aside className="min-h-screen sticky top-0 bg-indigo-600 p-2 flex flex-col gap-2 place-items-center">
            <div className=" p-2 text-3xl text-white ">
              <GiFalconMoon />
            </div>
            <div className="w-full flex flex-col place-items-center gap-2">
                <Link href={"/"} className={style.box}>
                    <TbHome2 />
                    <p className={style.text}>Home</p>
                </Link>
                <Link href={"/"} className={style.box}>
                    <CiImageOff />
                    <p className={style.text}>Image Converter</p>
                </Link>
                <Link href={"/"} className={style.box}>
                    <CiText />
                    <p className={style.text}>Image To</p>
                </Link>
            </div>
        </aside>
    )
}
