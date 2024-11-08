"use client"
import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select,SelectTrigger,SelectItem,SelectValue,SelectContent,SelectGroup,SelectLabel} from  "@/components/ui/select"

export function BatchDialog() {
  const [open, setOpen] = useState(false)
  const isDesktop = (true)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">AddCourse</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>AddCourse</DialogTitle>
           
          </DialogHeader>
          <CourseForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">AddCourse</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>AddCourse</DrawerTitle>
          <DrawerDescription>
           you can AddCourse
          </DrawerDescription>
        </DrawerHeader>
        <CourseForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function CourseForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="course">course</Label>
        <Input type="text" id="course" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">duration</Label>
        <Input id="duration" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">description</Label>
        <Input id="description" defaultValue="" />
      </div>
      <div className="grid gap-2">
      <Label htmlFor="Status">Status</Label>

      <Select>
      <SelectTrigger>
        <SelectValue placeholder="Active - Not-Acctive" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>pending</SelectLabel> */}
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="notactive">Not Active</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
