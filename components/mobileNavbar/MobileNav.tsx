'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer"
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
                href="/"
                className='flex cursor-pointer item-center gap-1 px-4'
            >
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Banking Logo"
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-blank-1">Banking App</h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {
                      sidebarLinks.map(item => {
                          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                          return (
                            <SheetClose asChild key={item.route}>
                              <Link
                                  className={cn('mobilenav-sheet_close w-full', {
                                      'bg-bank-gradient': isActive
                                  })}
                                  href={item.route}
                                  key={item.label}
                              >
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    width={20}
                                    height={20}
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                /> 
                                <p className={cn("text-16 font-semibold text-black-2", {
                                    "!text-white": isActive
                                })}>{item.label}</p>
                              </Link>
                            </SheetClose>
                          )
                        }
                      )
                    }
                </nav>
              </SheetClose>
              USER
            </div>
        </nav>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
