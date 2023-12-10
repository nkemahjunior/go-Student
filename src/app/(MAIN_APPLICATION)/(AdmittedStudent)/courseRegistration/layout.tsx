import CourseRegistrationLinks from "@/FRONTEND/MAJOR_COURSE_REGISTRATION/CourseRegistrationLinks";

export default  function courseRegistrationlayout({ children,}: {children: React.ReactNode; }) {
  
    return(
        <>
            <CourseRegistrationLinks>
            {children}
            </CourseRegistrationLinks>
            
        </>
    )
      
  
  }