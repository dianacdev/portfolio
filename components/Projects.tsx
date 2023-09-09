import Card from "./Card";

const Projects = () => {
    return ( 
        <div className='pt-10 mx-[10%]'>
            <div>
                <sub className="text-lg font-light text-slate-400 " id="project">MY WORK.</sub>
                <h2 className="text-6xl">Projects.</h2>
            </div>
            <p className="font-light text-slate-400">
                
             </p>
            <div className="flex flex-wrap gap-4 mt-6">
                <Card 
                    projectName="spotify clone"
                    description="This is a clone of Spotify it has the same UI but slightly different features. You can upload Music and use the player to list to your liked songs."
                    tag1="Tailwind" tag1Color="text-cyan-300"
                    tag2="Next.js" tag2Color="text-amber-300"
                    tag3="Typescript" tag3Color="text-blue-400"
                    sourceLink="/"
                    liveLink="/"
                    imageLink="/Images/spotify.png"
                />
                <Card 
                    projectName="DRONI"
                    description="A website that connects shows drones for sale. Has a Google Map integration, dark/light mode and Contact Form."
                    tag1="CSS"  tag1Color="text-cyan-200"
                    tag2="Javascript" tag2Color="text-amber-300"
                    tag3="HTML" tag3Color="text-rose-400"
                    sourceLink="/"
                    liveLink="/"
                    imageLink="/Images/droni.png"
                />
            </div>
        </div>
     );
}
 
export default Projects;