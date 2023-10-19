import React from "react";

const Contact = () => {
  const labelStyle = "text-[18px] text-slate-700";
  const inputStyle =
    " w-full md:w-1/2 rounded-md border border-black p-2 placeholder:text-[18px] mb-4 focus:outline-none";
  return (
    <div id="contact" className="mx-auto w-[70%] overflow-auto pt-16 ">
      <h1 className="text-[48px] font-thin">Contact</h1>
      <div>
        <h2 className=" mt-4 text-[28px]">Contact Us</h2>
        <form className="mt-4 flex flex-col gap-2">
          <label className={labelStyle}>Your Name</label>
          <input type="text" placeholder="Enter Name" className={inputStyle} />

          <label className={labelStyle}>Youe Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className={`${inputStyle} mb-0 `}
          />
          <p className="mb-4 text-[14px] text-slate-600">
            We'll nerver share your email with anyone else.
          </p>

          <label className={labelStyle}>Your Mobile</label>
          <input type="text" className={inputStyle} />
          <label className={labelStyle}>Subject</label>
          <input
            type="text"
            placeholder="Select Complaint Subject"
            className={inputStyle}
          />
          <label className={labelStyle}>Message</label>
          <textarea type="text" className={inputStyle} rows="6" />
          <button className="w-fit rounded-md border border-black px-4  py-1 text-[18px] text-slate-700 hover:bg-slate-600 hover:text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
