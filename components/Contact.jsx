'use client';
import { useState } from "react";
import {toast} from 'react-hot-toast';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email:'',
        subject:'',
        message:'',
    });
    const [loading, setLoading] = useState(false);

    if(loading) return toast.loading("Sending Message...");
  
    const sendEmail = async (e) => { 
      e.preventDefault();
      if (!data.name) {
        return toast.error("Please enter your name");
      }
      if (!data.email) {
        return toast.error("Please enter your email");
      }
      if (!data.subject) {
        return toast.error("Please enter a subject");
      }
      if (!data.message) {
        return toast.error("Please enter a message");
      }
  
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.status === 200) {
        setData({});
        setLoading(false);
        toast.success(`Hey ${data.name}, your message was sent successfully! Check your inbox!`);
       
      }
    }

    return ( 
      <div className='pt-20 pb-[20%] mx-[10%]' id="contact">
          <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <div className=" lg:w-1/2 md:w-full sm:w-full bg-slate-900 rounded-xl flex flex-col mt-20 min-w-1/2">
              <div className="mx-6 my-4">
                  <sub className="text-lg font-light text-slate-400 ml-1">LETS CONNECT.</sub>
                  <h2 className="text-6xl mt-1">Contact.</h2>
              </div>
              <form className="mx-6 my-4" onSubmit={sendEmail}>
                  <div className="pb-4">
                      <h3 className="m-2 text-lg">Your Name</h3>
                      <input type="text" placeholder="What's your name?" className=" rounded-lg w-full bg-slate-800 h-10 pl-8"value={data.name}
                    onChange={(e) =>
                      setData({ ...data, name: e.target.value })
                    }
                    />
                  </div>
                  <div className="pb-4">
                      <h3 className="m-2 text-lg">Your Email</h3>
                      <input type="text" placeholder="What's your email?" className=" rounded-lg w-full bg-slate-800 h-10 pl-8"value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                      />
                  </div>
                  <div className="pb-4">
                      <h3 className="m-2 text-lg">Subject</h3>
                      <input type="text" placeholder="What's your email?" className=" rounded-lg w-full bg-slate-800 h-10 pl-8"value={data.subject}
                    onChange={(e) =>
                      setData({ ...data, subject: e.target.value })
                    }
                      />
                  </div>
                  <div className="pb-4">
                      <h3 className="m-2 text-lg">Your Message</h3>
                      <textarea  placeholder="Whats your message?" className="w-full rounded-md bg-slate-800 min-h-[200px] pl-8 pt-2"value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                      ></textarea>
                  </div>
                  <button className="w-1/2 bg-blue-950 rounded-lg my-4 h-10 text-xl hover:bg-blue-700 drop-shadow-md hover:scale-105">Send</button>
              </form>
          </div>
          </div>
      </div>
   );
};
 
export default Contact;