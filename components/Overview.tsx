import SkillCard from "./SkillCard";
import Image from "next/image";

const Overview = () => {
    return ( 
        <div className=' pt-20 pb-[10%] mx-[10%]'id="about">
            <div>
                <sub className="text-lg font-light text-slate-400" >INTRODUCTION.</sub>
                <h2 className="text-6xl" id="#about">Overview.</h2>
            </div>
            <p className="font-light text-slate-400">
                I am a skilled Software Engineer, I love learning new programming languages and frameworks. In my free time I enjoy building web applications, making video games and much more. I also enjoy watching horror movies, hiking and solving treasure hunts.
             </p>
            <div className="flex flex-cols-5 gap-2 mt-6">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
             </div>

        </div>
     );
}
 
export default Overview;