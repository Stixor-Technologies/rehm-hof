"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

interface InputType {
  type?: string;
  name: string;
  value: string | number;
  placeholder: string;
  touched: boolean | undefined;
  error: string | undefined;
}

const KontaktForm = () => {
  const formik = useFormik({
    initialValues: {
      requestType: [],
      salutation: "",
      firstName: "",
      lastName: "",
      street: "",
      postalCode: "",
      city: "",
      phone: "",
      email: "",
      contactMethod: [],
      message: "",
      roomsFrom: "",
      roomsTo: "",
      areaFrom: "",
      areaTo: "",
      privacyPolicy: false,
    },
    validationSchema: Yup.object({
      salutation: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      postalCode: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      contactMethod: Yup.array()
        .min(1, "Select at least one contact method")
        .required("Required"),
      roomsFrom: Yup.number().integer("Must be an integer").nullable(),
      roomsTo: Yup.number().integer("Must be an integer").nullable(),
      areaFrom: Yup.number().integer("Must be an integer").nullable(),
      areaTo: Yup.number().integer("Must be an integer").nullable(),
      privacyPolicy: Yup.bool()
        .oneOf([true], "You must accept the privacy policy")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputTemplate = ({
    type = "text",
    name,
    value,
    placeholder,
    touched,
    error,
  }: InputType) => (
    <div className="w-full">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full border-b border-black bg-transparent pb-4 ps-3.5 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50"
      />
      {touched && error ? (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      ) : null}
    </div>
  );

  return (
    <div className="mx-auto bg-slate px-4 py-16 sm:px-8 md:pb-[6.107rem] md:pt-[6.25rem] 4xl:mx-0 4xl:px-[11.25rem]">
      <div className="flex justify-between pb-[4.101rem]">
        <h1 className="text-[4.063rem] uppercase leading-[4.688rem] text-primary">
          INTERESSE?
          <br /> LASS DICH BERATEN
        </h1>

        <div className=" text-base leading-8 tracking-[0.025rem] text-secondary md:text-xl">
          <p className="pb-[1.875rem]">
            Gerne beraten wir dich und senden dir weitere Informationen zu.
            <br />
            Zur einfachen Bearbeitung deiner Anfrage nutz’ bitte unser
            Kontaktformular.
          </p>

          <div className="flex gap-[3.75rem]">
            <ul>
              <li>HYEST Real Estate GmbH</li>
              <li>Jungfernstieg 50</li>
              <li>20354 Hamburg</li>
            </ul>

            <ul>
              <li>T 040/34 63 40</li>
              <li>E verkauf@hyest.de</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="text-lg text-secondary">
        <div className="mb-[3.75rem]">
          <label className="pb-7.5 flex items-center">
            <input
              type="checkbox"
              name="requestType"
              value={formik.values.requestType}
              onChange={() => formik.handleChange}
              className="mr-[1.594rem] h-[27.9px] w-[27.5px]"
            />
            Objektbezogene Anfrage und Informationen (insb. Exposé)
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="requestType"
              value="general"
              onChange={formik.handleChange}
              className="mr-[1.594rem] h-[27.9px] w-[27.5px]"
            />
            Allgemeine Kontaktanfrage
          </label>
        </div>

        <div className="mb-[3.75rem] flex gap-16">
          {inputTemplate({
            name: "salutation",
            placeholder: "Anrede*",
            value: formik.values.salutation,
            touched: formik.touched.salutation,
            error: formik.errors.salutation,
          })}

          {inputTemplate({
            name: "street",
            placeholder: "Straße*",
            value: formik.values.street,
            touched: formik.touched.street,
            error: formik.errors.street,
          })}
        </div>

        <div className="mb-[3.75rem] flex gap-16">
          {inputTemplate({
            name: "firstName",
            placeholder: "Vorname*",
            value: formik.values.firstName,
            touched: formik.touched.firstName,
            error: formik.errors.firstName,
          })}

          {inputTemplate({
            name: "postalCode",
            placeholder: "PLZ*",
            value: formik.values.postalCode,
            touched: formik.touched.postalCode,
            error: formik.errors.postalCode,
          })}
        </div>

        <div className="mb-[3.75rem] flex gap-16">
          {inputTemplate({
            name: "lastName",
            placeholder: "Name*",
            value: formik.values.lastName,
            touched: formik.touched.lastName,
            error: formik.errors.lastName,
          })}

          {inputTemplate({
            name: "city",
            placeholder: "Ort*",
            value: formik.values.city,
            touched: formik.touched.city,
            error: formik.errors.city,
          })}
        </div>

        <div className="mb-4">
          <label className="block  ">
            Telefon
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.phone}
              </div>
            ) : null}
          </label>
        </div>

        <div className="mb-4">
          <label className="block  ">
            E-Mail
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </label>
        </div>

        <div className="mb-4">
          <span className="block  ">Bevorzugte Kontaktart</span>
          <label className="block  ">
            <input
              type="checkbox"
              name="contactMethod"
              value="Post"
              onChange={formik.handleChange}
              className="mr-2"
            />
            Post
          </label>
          <label className="block  ">
            <input
              type="checkbox"
              name="contactMethod"
              value="Telefon"
              onChange={formik.handleChange}
              className="mr-2"
            />
            Telefon
          </label>
          <label className="block  ">
            <input
              type="checkbox"
              name="contactMethod"
              value="Email"
              onChange={formik.handleChange}
              className="mr-2"
            />
            E-Mail
          </label>
          {formik.touched.contactMethod && formik.errors.contactMethod ? (
            <div className="mt-1 text-sm text-red-500">
              {formik.errors.contactMethod}
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block  ">
            Nachricht (freiwillig)
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
        </div>

        <div className="mb-4">
          <div className="flex space-x-4">
            <label className="block w-full  ">
              Zimmer von
              <input
                type="number"
                name="roomsFrom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.roomsFrom}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <label className="block w-full  ">
              Zimmer bis
              <input
                type="number"
                name="roomsTo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.roomsTo}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex space-x-4">
            <label className="block w-full  ">
              Fläche von (qm)
              <input
                type="number"
                name="areaFrom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.areaFrom}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <label className="block w-full  ">
              Fläche bis (qm)
              <input
                type="number"
                name="areaTo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.areaTo}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block  ">
            <input
              type="checkbox"
              name="privacyPolicy"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.privacyPolicy}
              className="mr-2"
            />
            Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.
          </label>
          {formik.touched.privacyPolicy && formik.errors.privacyPolicy ? (
            <div className="mt-1 text-sm text-red-500">
              {formik.errors.privacyPolicy}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-600"
        >
          Absenden
        </button>
      </form>
    </div>
  );
};

export default KontaktForm;
