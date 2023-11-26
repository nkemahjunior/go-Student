

export enum maritalStatus {
    single ="single",
    married = "married"
}

export enum faculty{
    FacultyOfScience = "FacultyOfScience" ,
    FacultyOfArts = "FacultyOfArts",
    FacultyOfEducation = "FacultyOfEducation",
    FacultyOfEngineeringAndTechnology = "FacultyOfEngineeringAndTechnology",
    FacultyOfHealthSciences = "FacultyOfHealthSciences"
}

export enum gender{
    male = "male",
    female = "female",
    other = "other"
}

export interface formLabels {

    name:string
    dateOfBirth:string
    nationality:string
    photo:File
    faculty:faculty
    gender:gender
    maritalStatus:maritalStatus
    programChosen:any
  
  }