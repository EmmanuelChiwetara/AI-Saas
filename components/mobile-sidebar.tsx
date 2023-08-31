"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from '@/components/sidebar'

interface MobileSideBarProps {
    apiLimitCount: number
}


const MobileSideBar = ({
    apiLimitCount
}: MobileSideBarProps) => {
    const [isMounted, setisMounted] = useState(false)

    useEffect( () => {
        setisMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className='p-0'>
            <SideBar apiLimitCount={apiLimitCount} />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar