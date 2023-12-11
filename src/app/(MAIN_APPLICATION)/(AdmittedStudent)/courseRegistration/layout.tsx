import CourseRegistrationLinks from "@/FRONTEND/COURSE_REGISTRATION/SHARED_COURSE_REG/CourseRegistrationLinks";

export default  function courseRegistrationlayout({ children,}: {children: React.ReactNode; }) {
  
    return(
        <>
            <CourseRegistrationLinks>
            {children}
            </CourseRegistrationLinks>
            
        </>
    )
      
  
  }