import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/* eslint-disable jsx-a11y/label-has-associated-control */
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k24cy2a', 'template_dge2i3e', form.current, 'LgGScpM2beXf_hNZB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="container_build">
      <div className="w-[100%]">
        <div className="mx-auto w-[80%] md:w-full md:max-w-[500px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div>
              <input type="submit" value="Send" className="hover:shadow-form rounded-md bg-[#4A87CE] py-3 px-8 text-base font-semibold text-white outline-none" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
