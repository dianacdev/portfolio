const Contact = () => {
    return ( 
        <div className='pt-20 pb-[20%] mx-[10%]' id="contact">
            <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <div className="w-1/2 bg-slate-900 rounded-xl flex flex-col mt-20">
                <div className="mx-6 my-4">
                    <sub className="text-lg font-light text-slate-400">LETS CONNECT.</sub>
                    <h2 className="text-6xl">Contact.</h2>
                </div>
                <form action="" className="mx-6 my-4">
                    <div className="pb-4">
                        <h3 className="m-2 text-lg">Your Name</h3>
                        <input type="text" placeholder="What's your name?" className=" rounded-lg w-full bg-slate-800 h-10 pl-8"/>
                    </div>
                    <div className="pb-4">
                        <h3 className="m-2 text-lg">Your Email</h3>
                        <input type="text" placeholder="What's your email?" className=" rounded-lg w-full bg-slate-800 h-10 pl-8"/>
                    </div>
                    <div className="pb-4">
                        <h3 className="m-2 text-lg">Your Message</h3>
                        <textarea  placeholder="Whats your message?" className="w-full rounded-md bg-slate-800 min-h-[200px] pl-8 pt-2"></textarea>
                    </div>
                    <button className="w-1/2 bg-blue-950 rounded-lg my-4 h-10 text-xl hover:bg-blue-700 drop-shadow-md hover:scale-105">Send</button>
                </form>
            </div>
            </div>
        </div>
     );
}
 
export default Contact;