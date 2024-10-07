import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-5 md:px-10 lg:px-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-20 animate-bounce">
        Visit Us
      </h1>
      <div className=" items-center mb-10 text-center px-20 py-20 md:px-10 lg:px-10 rounded-full" style={{background: 'url(/images/stra.jpg)'}}>
        <p>
          <span className="text-lg font-semibold mb-10"> Tel: </span> (042) 9999
          8888
        </p>
        <p>
          <span className="text-lg font-semibold"> Email: </span>{" "}
          LusciousLicks@hotmail.com
        </p>
        <p>
          <span className="text-lg font-semibold">Address:</span> LusciousLicks,
          123 Main Street, Johar Town Lahore
        </p>

        <p>
          <span className="text-lg font-semibold"> Opening Hours: </span>{" "}
          Mon-Fri: 9am-9pm, Sat: 10am-7pm, Sun: Closed
        </p>
        <p>
          <span className="text-lg font-semibold"> For more information,</span>{" "}
          please contact our customer service team at (042) 9999 8888
        </p>
      </div>

      <div className=" w-full max-w-lg ">
        <h1 className="text-lg font-semibold  mb-2">Our Location</h1>
        <iframe
          title="google location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091597!2d144.9537353153189!3d-37.81627997975146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f99f%3A0x5045675218ce6f0!2sYour%20Location%20Here!5e0!3m2!1sen!2sus!4v1619201949671!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
