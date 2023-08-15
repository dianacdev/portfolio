import Card from "./Card";

const Projects = () => {
    return ( 
        <div className='pt-10'>
            <div>
                <sub className="text-lg font-light text-slate-400">MY WORK.</sub>
                <h2 className="text-6xl">Projects.</h2>
            </div>
            <p className="font-light text-slate-400">
                The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
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
                <Card 
                    projectName="test"
                    description="description of project"
                    tag1="Python"  tag1Color="text-lime-300"
                    tag2="Typescript" tag2Color="text-blue-400"
                    tag3="Tailwind" tag3Color="text-cyan-300"
                    sourceLink="/"
                    liveLink="/"
                />
            </div>
        </div>
     );
}
 
export default Projects;