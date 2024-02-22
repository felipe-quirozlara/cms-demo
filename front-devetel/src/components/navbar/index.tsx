import { cn } from '@/lib/utils'
import React from 'react'
import { getNavbarData } from './get-data'
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Navbar = async () => {
  const info = await getNavbarData();

  if (!info) return <nav>sin info</nav>

  return (
    <nav
      className={cn(
        "w-full h-fit",
      )}
    >
      <div className="flex flex-row items-center justify-between max-w-screen-xl mx-auto">

        <Image
          src={info.img}
          height={70}
          width={284}
          alt={"Logo empresa"}
        />
        <ul
          className={cn(
            "flex flex-row gap-3",
          )}
        >
          {info.enlaces.map((enlace: Enlace) => (
            <li key={enlace.id}>
              <Button
                className={cn("text-lg")}
                variant={enlace.__component.includes('ui.link') ? 'link' : enlace.colores === "azul" ? 'default' : "orange"}
                asChild={enlace.__component.includes('ui.link')}
              >
                <Link
                  href={enlace.enlace}
                  target={enlace.blank ? "_blank" : "_self"}
                >
                  {enlace.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}