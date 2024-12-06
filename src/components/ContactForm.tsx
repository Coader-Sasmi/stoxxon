"use client";
/* eslint-disable @next/next/no-img-element */
import { LoadingButton } from "@mui/lab";

import {
  InputAdornment,
  SelectProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { CountrySelector } from "../core";
import { East, Email, Message, Person, Phone } from "@mui/icons-material";
// import { database } from "configs";
// import { normalMailBody } from "helpers/MailTemplate";
// import { COUNTRIES } from "utils";

const ContactForm = () => {
  const CONTACT_FORM_SCHEMA = [
    {
      key: "1",
      label: "Enter Name",
      name: "name",
      type: "text",
      validationSchema: Yup.string().required("Name is required!"),
      required: true,
      icon: <Person />,
      initialValue: "",
    },
    {
      key: "2",
      label: "Enter Email",
      name: "email",
      type: "email",
      validationSchema: Yup.string()
        .email("Email is not valid!")
        .required("Email is required!"),
      required: true,
      icon: <Email />,
      initialValue: "",
    },
    {
      key: "3",
      label: "Enter Phone Number",
      name: "phoneNumber",
      type: "number",
      validationSchema: Yup.number().required("Phone number is required!"),
      required: true,
      icon: <Phone />,
      initialValue: "",
    },
    {
      key: "4",
      label: "Message",
      name: "message",
      type: "text",
      multiline: true,
      validationSchema: Yup.string().required("Message is required!"),
      required: true,
      icon: <Message />,
      initialValue: "",
    },
  ];

  //? initial value & validation set
  const initialValues = CONTACT_FORM_SCHEMA.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  // const validationSchema = CONTACT_FORM_SCHEMA.reduce(
  //   (accumulator:any, currentValue:any) => {
  //     accumulator[currentValue.name] = currentValue.validationSchema;
  //     return accumulator;
  //   },
  //   {} as { [key: string]: Yup.StringSchema }
  // );

  const handleSubmit = async () => {
    // try {
    //   const contactData = {
    //     name: values?.name,
    //     email: values?.email,
    //     message: values?.message,
    //     phoneNumber: values?.phoneNumber,
    //     country: countryDetails?.label,
    //     updatedAt: new Date().toString(),
    //   };
    //   await database.ref("/contact").push(contactData);
    //   const res = await fetch("/api/send-mail", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       to: values.email,
    //       subject:
    //         "Thanks for contacting us. Our team will get back to you soon.",
    //       html: normalMailBody(
    //         "Thanks for contacting us. Our team will get back to you soon.",
    //         values.name
    //       ),
    //     }),
    //   });
    //   Swal.fire({
    //     icon: "success",
    //     title: "Success",
    //     text: "Your request has been submitted successfully",
    //   });
    // } catch (error) {
    // } finally {
    //   props.resetForm();
    // }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={Yup.object(validationSchema)}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="w-full flex flex-col gap-4 edit-lead-form">
          {CONTACT_FORM_SCHEMA.map((inputItem) => (
            <Field name={inputItem.name} key={inputItem.key}>
              {(props: {
                field: JSX.IntrinsicAttributes & TextFieldProps & SelectProps;
              }) => {
                if (inputItem.type === "number") {
                  return (
                    <div className="w-full space-y-4">
                      <div className="w-full">
                        <TextField
                          fullWidth
                          variant="outlined"
                          label={inputItem.label}
                          required={inputItem?.required}
                          name={inputItem.name}
                          value={formik.values[inputItem.name]}
                          onChange={(e) => {
                            formik.setFieldValue(
                              inputItem.name,
                              e.target.value.replace(/[^0-9]/g, "")
                            );
                          }}
                          onBlur={formik.handleBlur}
                          // error={Boolean(
                          //   props.meta.touched && props.meta.error
                          // )}
                          // helperText={props.meta.touched && props.meta.error}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {inputItem.icon}
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{
                            minLength: "5",
                            maxLength: "15",
                          }}
                        />
                      </div>
                    </div>
                  );
                }
                //? Automatically fetched current country details

                // eslint-disable-next-line react-hooks/rules-of-hooks

                return (
                  <div
                    className={`w-full ${
                      inputItem?.multiline ? "mui-message-box" : ""
                    }`}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label={inputItem.label}
                      required={inputItem?.required}
                      type={inputItem.type}
                      multiline={inputItem?.multiline}
                      rows={inputItem?.multiline ? 4 : 0}
                      // error={Boolean(props.touched && props.error)}
                      // helperText={props.touched && props.error}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {inputItem.icon}
                          </InputAdornment>
                        ),
                      }}
                      {...props.field}
                    />
                  </div>
                );
              }}
            </Field>
          ))}
          <div className="w-full flex justify-center items-center">
            <LoadingButton
              fullWidth
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              loading={formik.isSubmitting}
              loadingPosition="end"
              endIcon={
                <East className="common-transition group-hover:translate-x-2" />
              }
              className={`group !rounded-lg !bg-primary !h-12 !w-full !text-base !capitalize !tracking-wide !text-white hover:focus:!border-none disabled:!cursor-not-allowed  disabled:!bg-gray-300 !font-semibold`}
            >
              Send
            </LoadingButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
