
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex w-full h-14 mb-14">
            <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-slate-900">
                <Link href='/' className="w-full pl-6 flex items-center hover:scale-105 hover:text-green-600">
                    <Image src={"DianaCLogo.svg"} alt="Diana Cervantes Logo/Home Logo" width={64} height={64}/>
                    <span >| SOFTWARE ENGINEER</span>
                </Link>
                <div className="flex justify-items-end pr-10">
                    <Link className="m-2 pr-2 hover:scale-110 hover:text-green-600" href='#project'> PROJECTS </Link>
                    <Link className="m-2 pr-2 hover:scale-110 hover:text-green-600" href='#about'> ABOUT </Link>
                    <Link className="m-2  hover:scale-110 hover:text-green-600" href='#contact'> CONTACT </Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;