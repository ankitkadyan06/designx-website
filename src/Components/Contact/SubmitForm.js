import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../Assets/CSS/Form.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import { formValidation } from "../../schemas/index";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company_name: "",
      subscribe_news: true,
      remark: "",
    },
    validationSchema: formValidation,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      axios
        .post("/app/api/v3/designx-contact-us", values, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          toast.success(response.data.message);
          resetForm();
        })
        .catch((error) => {
          toast.error("Error occurred while submitting the form.");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <div className="pt-[85px] md:pt-[150px]">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mx-[30px] xl:mx-[150px] 2xl:mx-[250px]">
        <div className="w-full lg:w-[390px]">
          <p className="text-white text-[22px] md:text-[36px] lg:text-[47px] font-poppins font-semibold">
            One-step <br className="hidden lg:block" /> closer to digital
            transformation
          </p>
          <p className="text-[#D4D4D4] text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
            The quest to find an agile solution for your shop floor has come to
            an end. Switch to digital transformation today with DesignX!
          </p>
          <div className="flex justify-center lg:justify-between flex-row mt-[40px]">
            <div className="bookDemo mr-[10px] w-[200px] lg:w-[380px] h-[100px] lg:h-[140px] focus:border-[5px] focus:border-solid focus:border-[#0046FF] pr-[20px]">
              <p className="contactTextGradient text-[16px] lg:text-[22px] font-poppins font-semibold mt-[20px] ml-[17px]">
                Book a Demo
              </p>
              <p className="text-[#D4D4D4] text-[10px] lg:text-[12px] font-poppins ml-[17px]">
                Request a demo to unlock the potential of our best offerings.
                Explore futuristic solutions with us!
              </p>
            </div>
          </div>
        </div>
        <div className="formBackground mx-auto mt-[20px] lg:mt-[0px] lg:ml-[70px] w-[100%] sm:w-[300px] md:w-[300px] lg:w-[414px]">
          <div className=" contactForm">
            <p className="text-white text-[20px] md:text-[32px] font-poppins font-medium">
              <span className="underline underline-offset-8 decoration-[2px]">
                Contact{" "}
              </span>
              Us
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-[10px] font-poppins"
            >
              <TextField
                fullWidth
                id="name"
                label="NAME"
                name="name"
                variant="standard"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className="text-[12px]"
              />
              <TextField
                fullWidth
                id="email"
                label="EMAIL"
                name="email"
                variant="standard"
                autoComplete="off"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="phone"
                label="PHONE (OPTIONAL)"
                name="phone"
                variant="standard"
                autoComplete="off"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                fullWidth
                id="company_name"
                label="COMPANY (OPTIONAL)"
                name="company_name"
                variant="standard"
                autoComplete="off"
                value={formik.values.company_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    id="subscribe_news"
                    name="subscribe_news"
                    checked={formik.values.subscribe_news}
                    onChange={(e) =>
                      formik.setFieldValue("subscribe_news", e.target.checked)
                    }
                  />
                }
                label="Subscribe to our newsletter"
              />
              <div className="mt-[20px]">
                <p className="text-[12px] text-white font-poppins uppercase">
                  Remark
                </p>
                <textarea
                  name="remark"
                  id="remark"
                  value={formik.values.remark}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="It would be great to hear more about your project"
                  className={`w-[94%] h-[100px] text-[12px] sm:text-[14px] bg-transparent border-[1px] font-light text-white font-poppins  border-white rounded-[9px] p-[10px] focus:outline-none ${
                    formik.touched.remark && formik.errors.remark ? "border-red-500" : ""
                  }`}
                ></textarea>
                {formik.touched.remark && formik.errors.remark && (
            <p className="text-red-500 text-[12px] font-poppins mt-1">
              {formik.errors.remark}
            </p>
          )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="submitButtonForForm w-[100px] md:w-[121px] h-[36px] md:h-[42px] text-white text-[14px] md:text-[18px] font-poppins font-medium mt-[22px]"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubmitForm;
