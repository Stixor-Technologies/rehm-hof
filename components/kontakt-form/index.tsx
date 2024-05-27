"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

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
      firstName: Yup.string()
        .trim()
        .matches(
          /^[A-Za-z]+(?: [A-Za-z]+)*$/,
          "Ungültiger Vorname: Es sind nur alphabetische Zeichen und ein einzelnes Leerzeichen zwischen den Namen zulässig",
        )
        .required("Erforderlich"),

      lastName: Yup.string()
        .trim()
        .matches(
          /^[A-Za-z]+(?: [A-Za-z]+)*$/,
          "Ungültiger name: Es sind nur alphabetische Zeichen und ein einzelnes Leerzeichen zwischen den Namen zulässig",
        )
        .required("Erforderlich"),
      street: Yup.string()
        .required("Erforderlich")
        .max(100, "Straße darf höchstens 100 Zeichen lang sein"),
      postalCode: Yup.string()
        .required("Erforderlich")
        .matches(/^\d{5}$/, "Es sind genau 5 numerische Zeichen erforderlich"),

      city: Yup.string()
        .trim()
        .matches(
          /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/,
          "Ungültiger Ort: nur alphabetische Zeichen, Leerzeichen und Bindestriche zulässig",
        )
        .required("Erforderlich"),

      phone: Yup.string()
        .required("Erforderlich")
        .matches(
          /^\+?\d{11,13}$/,
          "Ungültige Telefonnummer. Bitte nur Zahlen und maximal ein '+' am Anfang verwenden. Die Gesamtlänge sollte zwischen 11 und 13 Zeichen liegen.",
        ),

      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("Erforderlich"),
      contactMethod: Yup.array()
        .min(1, "Wählen Sie mindestens eine Kontaktmethode aus")
        .required("Erforderlich"),
      roomsFrom: Yup.number()
        .integer("Muss eine Nummer sein")
        .min(1, "Muss größer als 0 sein")
        .nullable(),
      roomsTo: Yup.number()
        .integer("Muss eine Nummer sein")
        .min(1, "Muss größer als 0 sein")
        .nullable()
        .when("roomsFrom", {
          is: (value: number | null) => value != null,
          then: (schema) =>
            schema.min(
              Yup.ref("roomsFrom"),
              "Zimmer 'bis' muss größer oder gleich 'von' sein",
            ),
        }),
      areaFrom: Yup.number()
        .integer("Muss eine Nummer sein")
        .min(1, "Muss größer als 0 sein")
        .nullable(),
      areaTo: Yup.number()
        .integer("Muss eine Nummer sein")
        .min(1, "Muss größer als 0 sein")
        .nullable()
        .when("areaFrom", {
          is: (value: number | null) => value != null,
          then: (schema) =>
            schema.min(
              Yup.ref("areaFrom"),
              "Fläche 'bis' muss größer oder gleich 'von' sein",
            ),
        }),
      privacyPolicy: Yup.bool()
        .oneOf([true], "Sie müssen die Datenschutzerklärung akzeptieren")
        .required("Erforderlich"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const emailTemplate = `<div>
          <h2>${values.requestType.length > 0 ? `Sie haben eine neue Anfrage des Typs erhalten ${values.requestType[0]} aus ${values.firstName} ${values.lastName}` : `Sie haben eine Anfrage von erhalten ${values.firstName} ${values.lastName}`}</h2>

          <h3>Persönliche Daten</h3>
          <p><strong>Name:</strong>${values.firstName} ${values.lastName}</p>
          <p><strong>Anrede:</strong>${values.salutation}</p>
          <p><strong>E-Mail: </strong>${values.email}</p>
          <p><strong>Telefon: </strong>${values.phone}</p>
          <p><strong>Ausgewählte Kontaktmethode: </strong>${values.contactMethod[0]}</p>
          
          <h3>Adresse</h3>
          <p><strong>Straße: </strong>${values.street}</p>
          <p><strong>PLZ: </strong>${values.postalCode}</p>
          <p><strong>Ort: </strong>${values.city}</p>

          ${(values.roomsFrom || values.roomsTo || values.areaFrom || values.areaTo) && `<h3>Raum und Fläche</h3>`}
          ${values.roomsFrom && `<p><strong>Zimmer von: </strong>${values.roomsFrom}</p>`}
          ${values.roomsTo && `<p><strong>Zimmer bis: </strong>${values.roomsTo}</p>`}
          ${values.areaFrom && `<p><strong>Fläche von: </strong>${values.areaFrom}</p>`}
          ${values.areaTo && `<p><strong>Zimmer bis: </strong>${values.areaTo}</p>`}


          ${values.message && `<p><strong>NACHRICHT: </strong> ${values.message}</p></div>`}`;

        const res = await fetch("/api/contact", {
          body: JSON.stringify({
            email: values.email,
            fullname: values.firstName + "" + values.lastName,
            subject: `Anfrage von ${values.firstName} ${values.lastName}`,
            htmlContent: emailTemplate,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const resp = await res.json();

        if (resp?.code ? resp.code === 202 : resp[0].statusCode === 202) {
          resetForm();
          formik.setFieldValue("requestType", []);
          formik.setFieldValue("contactMethod", []);
          formik.setFieldValue("privacyPolicy", false);
          document
            .querySelectorAll(".custom-checkbox")
            .forEach((checkbox: any) => {
              checkbox.checked = false;
            });

          toast.success(
            "Danke, dass Sie uns kontaktiert haben. Unser Team wird Sie bald erreichen",
            {
              position: "top-right",
              progressClassName: "fancy-progress-bar",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            },
          );
        } else {
          toast.error("Bitte versuchen Sie es später noch einmal", {
            position: "top-right",
            progressClassName: "fancy-progress-bar",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error(error);
      }
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
        className="w-full border-b border-black bg-transparent pb-4 ps-3.5 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 4xl:max-h-[35px]"
      />
      {touched && error && (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      )}
    </div>
  );

  return (
    <div className="bg-slate">
      <div className="container py-16 md:pb-[6.107rem] md:pt-[6.25rem]">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-[2.541rem] lg:flex-row">
          <h1 className="text-3xl uppercase leading-10 text-primary md:text-[4.063rem] md:leading-[4.688rem] 4xl:max-h-[9.438rem]">
            INTERESSE?
            <br /> LASS DICH BERATEN
          </h1>

          <div className="text-base leading-8 tracking-[0.025rem] text-secondary md:text-xl">
            <p className="mb-5 sm:mb-[1.875rem]">
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
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          className="text-lg leading-8 text-secondary placeholder:leading-[1.875rem]"
        >
          <div className="mb-10 text-base sm:mb-[3.75rem] md:text-xl">
            <label className="mb-[1.631rem] flex items-center">
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

          <div className="mb-10 flex flex-col gap-10 object-contain sm:mb-[3.75rem] sm:flex-row sm:gap-16 4xl:max-h-[38px]">
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

          <div className="mb-10 flex flex-col gap-10 sm:mb-[3.711rem] sm:flex-row sm:gap-16">
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

              <label className="flex items-center pb-[1.631rem] pt-11">
                <input
                  type="checkbox"
                  name="contactMethod"
                  value="Post"
                  onChange={formik.handleChange}
                  className="custom-checkbox"
                />
                Post
              </label>

              <label className="flex items-center pb-[1.631rem]">
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
                  value="E-Mail"
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
            <div className="w-full 4xl:max-h-[13.375rem]">
              <h2 className="mb-[2.188rem] 4xl:max-h-6">
                NACHRICHT (FREIWILLIG)
              </h2>

              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full border border-black bg-transparent p-2 leading-[1.875rem] tracking-[0.023rem] outline-none placeholder:text-secondary placeholder:text-opacity-50 3xl:h-[9.688rem] 3xl:w-[46.938rem]"
              />
            </div>

            <div className="flex w-full flex-col gap-[1.688rem] sm:gap-[2.063rem] sm:ps-2">
              <div>
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
                {formik.touched.roomsTo && formik.errors.roomsTo ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.roomsTo}
                  </div>
                ) : null}
              </div>

              <div>
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
                {formik.touched.areaTo && formik.errors.areaTo ? (
                  <div className="mt-2 text-sm text-red-600">
                    {formik.errors.areaTo}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mb-10 flex flex-col items-start gap-10 text-xl sm:mb-[3.75rem] lg:flex-row lg:items-end lg:gap-16">
            <div>
              <label className="flex !w-full items-center text-base leading-8 md:text-xl lg:items-start">
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

          <button
            type="submit"
            className="hover flex w-full items-center justify-center border border-secondary bg-transparent px-16 py-2 transition-all duration-500 hover:bg-secondary hover:text-white sm:w-auto"
          >
            Senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;
