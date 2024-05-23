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
      salutation: Yup.string().required("Erforderlich"),
      firstName: Yup.string().required("Erforderlich"),
      lastName: Yup.string().required("Erforderlich"),
      street: Yup.string().required("Erforderlich"),
      postalCode: Yup.string()
        .required("Erforderlich")
        .max(5, "Es sind maximal 5 Zeichen zulässig"),
      city: Yup.string().required("Erforderlich"),
      phone: Yup.string()
        .required("Erforderlich")
        .matches(
          /^\+?(\d[-\s]?){10,14}$/,
          "Ungültige Telefonnummer. Bitte nur Zahlen, Leerzeichen und Bindestriche verwenden.",
        ),
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("Erforderlich"),
      contactMethod: Yup.array()
        .min(1, "Wählen Sie mindestens eine Kontaktmethode aus")
        .required("Erforderlich"),
      roomsFrom: Yup.number().integer("Muss eine Nummer sein").nullable(),
      roomsTo: Yup.number().integer("Muss eine Nummer sein").nullable(),
      areaFrom: Yup.number().integer("Muss eine Nummer sein").nullable(),
      areaTo: Yup.number().integer("Muss eine Nummer sein").nullable(),
      privacyPolicy: Yup.bool()
        .oneOf([true], "Sie müssen die Datenschutzerklärung akzeptieren")
        .required("Erforderlich"),
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
      <div className="flex flex-col justify-between gap-5 pb-8 sm:pb-[4.101rem] lg:flex-row">
        <h1 className="text-3xl uppercase leading-10 text-primary md:text-[4.063rem] md:leading-[4.688rem]">
          INTERESSE?
          <br /> LASS DICH BERATEN
        </h1>

        <div className="text-base leading-8 tracking-[0.025rem] text-secondary md:text-xl">
          <p className="pb-5 sm:pb-[1.875rem]">
            Gerne beraten wir dich und senden dir weitere Informationen zu.
            <br />
            Zur einfachen Bearbeitung deiner Anfrage nutz’ bitte unser
            Kontaktformular.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-[3.75rem]">
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

      <form
        onSubmit={formik.handleSubmit}
        className="text-lg leading-8 text-secondary placeholder:leading-[1.875rem]"
      >
        <div className="mb-10 text-base sm:mb-[3.75rem] md:text-xl">
          <label className="flex items-center pb-7.5">
            <input
              type="checkbox"
              name="requestType"
              value="Objektbezogene Anfrage und Informationen (insb. Exposé)"
              onChange={formik.handleChange}
              className="custom-checkbox"
            />
            Objektbezogene Anfrage und Informationen (insb. Exposé)
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="requestType"
              value="Allgemeine Kontaktanfrage"
              onChange={formik.handleChange}
              className="custom-checkbox"
            />
            Allgemeine Kontaktanfrage
          </label>
        </div>

        <div className="mb-10 flex flex-col gap-10 sm:mb-[3.75rem] sm:flex-row sm:gap-16">
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

        <div className="mb-10 flex flex-col gap-10 sm:mb-[3.75rem] sm:flex-row sm:gap-16">
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

        <div className="mb-10 flex flex-col gap-10 sm:mb-[3.75rem] sm:flex-row sm:gap-16">
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

        <div className="mb-10 flex flex-col-reverse gap-10 sm:mb-[3.75rem] sm:flex-row sm:gap-16">
          <div className="w-full text-xl">
            <span>Bevorzugte Kontaktart</span>

            <label className="flex items-center pb-[2.076rem] pt-11">
              <input
                type="checkbox"
                name="contactMethod"
                value="Post"
                onChange={formik.handleChange}
                className="custom-checkbox"
              />
              Post
            </label>

            <label className="flex items-center pb-[2.076rem]">
              <input
                type="checkbox"
                name="contactMethod"
                value="Telefon"
                onChange={formik.handleChange}
                className="custom-checkbox"
              />
              Telefon
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="contactMethod"
                value="Email"
                onChange={formik.handleChange}
                className="custom-checkbox"
              />
              E-Mail
            </label>
            {formik.touched.contactMethod && formik.errors.contactMethod ? (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.contactMethod}
              </div>
            ) : null}
          </div>

          <div className="flex w-full flex-col gap-[3.75rem]">
            {inputTemplate({
              name: "phone",
              placeholder: "Telefon*",
              value: formik.values.phone,
              touched: formik.touched.phone,
              error: formik.errors.phone,
            })}

            {inputTemplate({
              name: "email",
              placeholder: "E-Mail*",
              value: formik.values.email,
              touched: formik.touched.email,
              error: formik.errors.email,
            })}
          </div>
        </div>

        <div className="mb-10 flex flex-col items-end gap-10 text-xl sm:mb-[3.75rem] sm:flex-row sm:gap-16">
          <div className="w-full">
            <h2 className="pb-[2.188rem]">NACHRICHT (FREIWILLIG)</h2>

            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[9.688rem]"
            />
          </div>

          <div className="flex w-full flex-col gap-[1.688rem] sm:gap-[2.063rem] sm:ps-2">
            <div className="flex flex-col gap-[1.688rem] sm:flex-row">
              <div className="grid items-center gap-4 sm:grid-cols-2 sm:gap-[1.125rem] md:max-w-[15.75rem]">
                <label>Zimmer von</label>
                <input
                  type="number"
                  name="roomsFrom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.roomsFrom}
                  className="w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[3.813rem] 3xl:w-[7.5rem]"
                />
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[1.563rem] md:max-w-[10.75rem]">
                <label className="w-[1.688rem]">bis</label>
                <input
                  type="number"
                  name="roomsTo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.roomsTo}
                  className="colspan-2 w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[3.813rem] 3xl:w-[7.5rem]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[1.688rem] sm:flex-row">
              <div className="grid items-center gap-4 sm:grid-cols-2 sm:gap-[1.125rem] md:max-w-[15.75rem]">
                <label>Fläche von</label>
                <input
                  type="number"
                  name="areaFrom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaFrom}
                  className="w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[3.813rem] 3xl:w-[7.5rem]"
                />
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[1.563rem] md:max-w-[10.75rem]">
                <label className="w-[1.688rem]">bis</label>
                <input
                  type="number"
                  name="areaTo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaTo}
                  className="colspan-2 w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[3.813rem] 3xl:w-[7.5rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 text-xl lg:flex-row lg:items-end lg:gap-16">
          <div>
            <label className="flex !w-full items-center text-xl leading-8 lg:items-start">
              <input
                type="checkbox"
                name="privacyPolicy"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.privacyPolicy}
                className="custom-checkbox"
              />
              Datenschutzrichtlinie*
              <br />
              Ich bin mit den Erklärungen der DATENSCHUTZRICHTLINIE
              einverstanden.
            </label>

            {formik.touched.privacyPolicy && formik.errors.privacyPolicy ? (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.privacyPolicy}
              </div>
            ) : null}
          </div>

          <h2 className="lg:ps-2">* Pflichtfelder</h2>
        </div>
      </form>
    </div>
  );
};

export default KontaktForm;
