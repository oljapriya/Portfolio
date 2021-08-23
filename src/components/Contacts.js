import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form"; 

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState(""); 
  const { register, handleSubmit, formState: {errors }} = useForm();

  const serviceID = "service_ID"
  const templateID = "template_ID";
  const userID= "user_Wa9b27a0kMQ5RuYsiUxr1";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name:data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
      )
      r.target.reset();

  }

  const sendEmail= (serviceID, templateID, variables, userID) => {

    emailjs.send (serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully!");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        {/* <p>Please fill out the form</p> */}
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" :
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      },
                  })}
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-invalid={errors.phone ? "true" :
                {...register("phone", {
                  required: "Please add your phone number"
                })}}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" :
                {...register("email", {
                  required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                })}}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.email ? "true" :
                {...register("subject", {
                  required: "OOPS, you forget to add the subject.",

                  })}}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  aria-invalid={errors.description ? "true" :
                {...register("description", {
                      required: "Please describe shortly your project needs...",
                    })}
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts; 