import ListOfAvailablePrograms from "./ListOfAvailablePrograms"


import { motion } from "framer-motion"

function HomeAvailablePrograms():JSX.Element {

    const date = new Date().getFullYear()
    
    return (
        <motion.div layout transition={{duration:5}}>
            

            <div className=" bg-stone-200 p-3 md:p-12 lg:p-16">
                <h1 className="capitalize font-medium text-2xl">programs currently available for admission</h1>

                <div className="bg-white ">
                    <div className="  p-4 md:p-12 lg:p-16  space-y-8">

                        <div className="flex  justify-between bg-stone-100 py-4">
                            <p className="  font-light">✅  Program is availaible for admission</p>
                            <p className=" font-light">❌ Program is not available for admission</p>
                        </div>

                        <div className="mt-8 md:mt-12 bg-stone-100 p-2 md:p-8">
                            <p className="capitalize font-light">- advanced school of translators and interpreters-ASTI</p>
                            <div  className="space-y-6">
                                <ListOfAvailablePrograms title="general studies and promotion of bilingualism" 
                                programs={["❌ certificate in conference interpretation",
                                "❌ certificate in translation"]}/>

                                <ListOfAvailablePrograms title="interpretation" programs={["❌ M.A in interpretation","❌ m.a in interpretation(English,French)","❌ postgraduate diploma in interpretation"]}/>


                                <ListOfAvailablePrograms title="translation" programs={["❌ m.a in translation","❌ m.a in translation(english a, french b)","❌ m.a in translation(english a, french b, spanish c)", "❌ m.a in translation(english a, french b, german)", "❌ phd in translation and intercultural studies"]}/>
                            </div>
                        </div>

                        <div className=" bg-stone-100 p-2 md:p-8">
                            <p className="capitalize font-light">Faculty of science</p>
                            <div className="space-y-6">
                                <ListOfAvailablePrograms title="" programs={["✅ b.sc computer science","✅ b.sc physics" ,"❌ b.sc biology", "❌ b.sc chemistry","❌ b.sc enviromental science" ]} />
                            </div>
                        </div>

                        <div className=" bg-stone-100 p-2 md:p-8">
                            <p className="capitalize font-light">Faculty of art&apos;s</p>
                            <div className="space-y-6">
                                <ListOfAvailablePrograms title="" programs={["✅ bA history","❌ bA geography","❌ bA musical studies","❌ bA literature","✅ bA english"]}/>
                            </div>
                        </div>

                        <div className=" bg-stone-100 p-2 md:p-8">
                            <h2 className="capitalize font-light">-faculty of Engineering and technology-FET</h2>

                            <div className="space-y-6">
                                <ListOfAvailablePrograms title="computer engineering(FET)-ceng" programs={["❌ b.tech computer engineering","❌ b.tech computer engineering(networks)","✅ b.tech computer engineering(software)","❌ hardware maintainance","❌ information and communication technology","❌ m.tech in software engineering","❌ software engineering and computing"]}/>

                                <ListOfAvailablePrograms title="electrical and electronic engineering(FEt)-eeng" programs={["❌ b.tech electrical and electronic engineering","❌ electric power system","❌ telecommunication","❌ m.tech in electrical power system"]} />

                                <ListOfAvailablePrograms title="mechanical engineering-met" programs={["✅ b.tech mechanical engineering","❌ mechanical fabrication","❌ structural and metallic construction","❌ themo fluids engineering","❌ top up master of science in technology in mechanics","❌ welding technology"]} />
                            </div>
                        </div> 

                        <div className="bg-stone-100 p-2 md:p-8">
                            <p className="capitalize font-light">- faculty of health sciences-fhs</p>
                            <div className="space-y-6">

                                <ListOfAvailablePrograms title="biomedical sciences-bms" programs={["❌ b.sc in biomedical science","❌ master in morpholigcal science","❌ master in pharmacology","❌ master in toxicology","❌ phd in pharmacology","❌ phd in pharcology"]}/>

                                <ListOfAvailablePrograms title="medicine" programs={["❌ doctor of dental surgery","❌ doctor of medicine","❌ doctor of pharmacy"]}/>
                            </div>
                        </div>
                    </div>
               </div>

                <footer className="mt-4" >
                    <p className="text-center">powered by <span className=" text-orange-500">zeco junior</span></p>
                    <p className="text-center">&copy;{date}</p>
                </footer>
                
            </div>

        </motion.div>
    )
}

export default HomeAvailablePrograms
