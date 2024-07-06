import { Metadata } from "next"
import SideNav from "../components/SideNave"

export const metadata: Metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <SideNav />
                <div className="ml-64 w-[70%] bg-blue-100">
                    {children}
                </div>
            </body>
        </html>
    )
}
