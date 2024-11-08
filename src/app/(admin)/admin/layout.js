// app/admin/layout.js
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import Link from "next/link";
export const metadata={
  title:"Admin Dashboard"
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full">
           
              <Link href={"/admin/dashboard"}>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </Link>
              <Link href={"/admin/courses"}>
                <TabsTrigger value="courses">courses</TabsTrigger>
              </Link>
              <Link href={"/admin/batches"}>
                <TabsTrigger value="batches">batches</TabsTrigger>
              </Link>
              <Link href={"/admin/trainers"}>
                <TabsTrigger value="trainers">trainers</TabsTrigger>
              </Link>
              <Link href={"/admin/students"}>
                <TabsTrigger value="students">students</TabsTrigger>
              </Link>
            </TabsList>
            <TabsContent value="admin">{children}</TabsContent>

            <TabsContent value="dashboard">{children}</TabsContent>
            <TabsContent value="courses">{children}</TabsContent>
            <TabsContent value="batches">{children}</TabsContent>
            <TabsContent value="trainers">{children}</TabsContent>
            <TabsContent value="students">{children}</TabsContent>
          </Tabs>
          
        </div>
      </body>
    </html>
  );
}
