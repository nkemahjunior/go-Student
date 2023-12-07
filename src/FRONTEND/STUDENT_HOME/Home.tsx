import Image from "next/image";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { getStudentInfo } from "@/BACKEND/StudentDetails/getStudentInfo";
import { departments } from "@/BACKEND/CourseRegistrationDetails/departments";

async function Home() {
  const data = await getStudentInfo();
  console.log(data);

  const {
    created_at,
    name,
    email,
    dateOfBirth,
    nationality,
    gender,
    maritalStatus,
    photo,
    faculty,
    department,
  } = data;
  const date = created_at.substring(0, 10);

  return (
    <>
      <div className="   px-2 bg-stone-100 md:px-16 md:flex">
        <div className=" md:p-16  md:-mt-[3rem] bg-white border-[0.7px] border-solid border-stone-300 ">
          <div
            className=" -mt-[2rem] bg-white md:-mt-[0rem] h-fit   border-[1px] border-solid border-stone-300 
                    md:grid   md:grid-cols-[20fr,80fr]
                    "
          >
            <div className=" md:flex md:justify-center md:bg-stone-100 pl-[1rem] pr-[1rem]  md:pr-[0rem] pt-[1rem] space-x-2  ">
              <div className=" bg-stone-800 md:bg-stone-100   md:flex md:justify-center md:pb-8  p-4">
                <div className="">
                  <div className=" flex justify-center md:flex-none md:justify-normal ">
                    <div className="relative h-[10rem] w-[10rem] rounded-[50%] md:rounded-none overflow-hidden md:overflow-visible md:w-[15rem] md:h-[15rem]    border-4 border-solid border-white md:border-none">
                      <Image src={photo?.trim()} alt="student's picture" fill />
                    </div>
                  </div>

                  <div className="flex justify-center md:flex-none  md:w-[15rem]  p-2 md:p-4 uppercase italic md:bg-yellow-500 text-center text-white">
                    <p>hi {name?.split(" ").at(0)}!</p>
                  </div>

                  <div className=" w-[10rem] md:w-[15rem]  overflow-hidden mt-4 space-y-3 hidden md:block">
                    <p>Contact</p>
                    <p className="flex space-x-2 items-center font-extralight">
                      <span>
                        <MdEmail />
                      </span>
                      &nbsp;{email}
                    </p>
                    <p className="flex space-x-2 items-center font-extralight">
                      <span>
                        <FaLocationDot />
                      </span>
                      &nbsp;Zustaland
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-0 w-0  md:ml-[30rem] md:-mt-[1rem] bg-stone-400 md:h-[25rem] md:w-1">
                &nbsp;
              </div>
            </div>

            <div className=" md:px-[4rem] pl-[1rem] pr-[1rem]  ">
              <div className="">
                <div className="mt-4 space-y-4">
                  <p className="flex items-center font-light">
                    <span>
                      <FaChartSimple />
                    </span>
                    &nbsp;Summary
                  </p>

                  <div className=" px-[1rem] md:px-[1rem] space-y-4">
                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Foreign Status </p>
                      <p className=" font-extralight capitalize">
                        Admitted as {nationality}
                      </p>
                    </div>

                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Admission Date</p>
                      <p className=" font-extralight">{date}</p>
                    </div>
                  </div>

                  <p className="px-[1rem] text-xs text-blue-800">
                    Report to your faculty record&apos;s office if your
                    information below is not correct
                  </p>
                </div>

                <div className="mt-4 space-y-4">
                  <p className="flex items-center font-light">
                    <span>
                      <FaUser />
                    </span>
                    &nbsp;Basic Information{" "}
                  </p>

                  <div className=" md:px-[1rem] space-y-4 px-[1rem]">
                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Name</p>
                      <p className=" font-extralight capitalize">{name}</p>
                    </div>

                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Degree Program</p>
                      <p className=" font-extralight capitalize">
                        {departments[department]}
                      </p>
                    </div>

                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Gender</p>
                      <p className=" font-extralight capitalize">{gender}</p>
                    </div>

                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Date of Birth</p>
                      <p className=" font-extralight">{dateOfBirth}</p>
                    </div>

                    <div className="md:grid md:grid-cols-2 lg:-space-x-40">
                      <p>Maritus Status</p>
                      <p className=" font-extralight capitalize">
                        {maritalStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

//className="bg-[#0293DB]  pt-[2rem] md:pt-[3rem]  pb-[4rem] md:pb-[6rem] px-[1rem] md:px-[3rem] space-y-4"
