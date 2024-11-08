import React from 'react'
import {CourseTable} from "@/components/DataTable/CourseTable"

import { Button } from '@/components/ui/button'
import { CourseDialog } from '@/components/Dialogs/CourseModels'
// import { CourseDialog } from '@/components/Dialogs/CourseModels'

function Courses() {
  return (
    <div className="container h-full mx-auto">
      <div className='flex justify-between '>
        <h1 className='text-3xl'>
        Courses
        </h1>
        <CourseDialog/>

      </div>
      
      <CourseTable/>
      {/* <CourseDialog/> */}
    </div>
  )
}

export default Courses