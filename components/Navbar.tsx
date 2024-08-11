"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    function handleShowNav(){
        setShowMenu(!showMenu)
    }

  return (
    <nav className="flexBetween max-container padding-container lg:justify-center lg:space-x-8 w-full fixed top-5 left-0 right-0 z-30">
        <Link href="/" className="lg:absolute lg:left-8">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className={`flex flex-col fixed bg-white top-20 w-full left-0 right-0 lg:flex-row gap-6 border-t border-cyan-300 py-8 scale-50 opacity-0 invisible transition-all duration-500 ease-in-out lg:visible lg:opacity-100 lg:scale-100 lg:border-0 lg:gap-12 lg:static lg:w-auto ${showMenu? 'showNav':''}`}>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden lg:flex lg:absolute lg:right-8">
            <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
            />
        </div>
        <Image 
            src={showMenu ? "/close.svg" : "/menu.svg"}
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={handleShowNav}
        />
    </nav>
  )
}

export default Navbar