import Link from 'next/link';
import Image from 'next/image';
export default function NavMenu(){
    return (
        <nav className="flex items-center justify-between w-full h-16 px-8 bg-blue-800 shadow-md">
            <Link href="/">
                <Image
                src="/logo.png"
                alt="NextSpace Logo"
                width={216}
                height={30}
                priority
                />
            </Link>
            <div className="flex space-x-4">
                <Link href="/about" className="text-sm font-medium text-white underline hover:text-gray-400">
                        About
                </Link>
                <Link href="/blog" className="text-sm font-medium text-white underline hover:text-gray-400">
                        Blog
                </Link>
                <Link href="/users" className="text-sm font-medium text-white underline hover:text-gray-400">
                        Users
                </Link>
            </div>
        </nav>
    )
}