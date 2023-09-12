import Card from "./Card";

const Projects = () => {
    return ( 
        <div className='pt-20 pb-[20%] mx-[10%]' id="project">
            <div>
                <sub className="text-lg font-light text-slate-400 " >MY WORK.</sub>
                <h2 className="text-6xl">Projects.</h2>
            </div>
            <p className="font-light text-slate-400 w-[60%] py-6 leading-relaxed">
                Below are some of my recent projects. I use various programming languages to create, fun interactive websites. My favorite are scripts to automate my daily tasks. Checkout the code via the Github link and the live site with the REC button.
             </p>
            <div className="flex flex-wrap gap-8 mt-12">
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