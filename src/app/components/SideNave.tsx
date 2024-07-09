'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LockIcon from '@mui/icons-material/Lock';

const navLinks = [
    { name: "Main Dashboard", icon: HomeIcon, href: "/admin/default" },
    { name: "NFT Marketplace", icon: ShoppingCartOutlinedIcon, href: "/admin/nft-marketplace" },
    { name: "Data Tables", icon: BarChartIcon, href: "/admin/data-tables" },
    { name: "Profile", icon: PersonIcon, href: "/admin/profile" },
    { name: "Sign In", icon: LockIcon, href: "/auth/sign-in" },
    { name: "RTL Admin", icon: HomeIcon, href: "/rlt/rlt-admin" },
]

export default function SideNav() {

    const path = usePathname()

    return (
        <div className="py-4 px-8 bg-white w-64 border fixed left-0 top-0 h-full hidden lg:flex flex-col items-center shadow-xl">
            <h2 className="text-2xl font-bold p-2 mt-8">HORIZON <span className="font-normal">FREE</span></h2>
            <div className="border-[1px] w-full my-8"></div>
            <div className="w-full flex flex-col gap-4">
                {navLinks.map((link) => {
                    const isOpen = path.startsWith(link.href);

                    return (
                        <Link className="text-gray-400 text-sm flex items-center gap-4" href={link.href} key={link.name}>
                            <link.icon style={{ fontSize: 20 }} className={isOpen ? "text-[#422afb]" : "text-gray-400"} />
                            {link.name}
                            <div className={isOpen ? "ml-auto h-8 w-1 bg-[#422afb] rounded-xl" : ""}></div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}