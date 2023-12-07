import CourseRegistrationLinks from "@/FRONTEND/COURSE_REGISTRATION/CourseRegistrationLinks";

export default  function courseRegistrationlayout({ children,}: {children: React.ReactNode; }) {
  
    return(
        <>
            <CourseRegistrationLinks>
            {children}
            </CourseRegistrationLinks>
            
        </>
    )
      
  
  }