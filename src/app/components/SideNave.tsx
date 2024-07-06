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
        <div className="p-4 w-60 border shadow-xl fixed left-0 top-0 h-dvh flex flex-col items-center">
            <h2 className="text-2xl font-bold p-2 mt-8">HORIZON <span className="font-normal">UI</span></h2>
            <div className="border-[1px] w-full my-8"></div>
            <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                    const isOpen = path.startsWith(link.href);

                    return (
                        <Link className="text-gray-400 text-sm flex gap-4" href={link.href} key={link.name}>
                            <link.icon className={isOpen ? "text-blue-600" : "text-gray-400"} style={{ fontSize: 20 }} /> {link.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}