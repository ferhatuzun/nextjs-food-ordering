"use client";
import { useFormik } from "formik";
import registerSchema from "@/validation/register";
import Link from "next/link";
const Page = () => {
  const onSubmit = () => {};
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
        fullName:"",
        phone:""
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  return (
    <div className="container mx-auto mt-20 font-poppins">
      <div className="bg-sectionBg rounded-lg p-10 w-full md:w-2/3 mx-auto">
        <p className="text-center font-semibold text-xl mb-12">Giriş Yap</p>
        <form
          className="w-full md:w-2/3 mx-auto flex flex-col gap-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <p className="text-gray">Ad Soyad</p>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Lütfen ad soyad giriniz"
              className="w-full bg-input py-2 px-4 rounded-lg"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-rose-900">
              {errors.fullName && touched.fullName ? errors.fullName : ""}
            </p>
          </div>
          <div>
            <p className="text-gray">Email</p>
            <input
              type="email"
              name="email"
              required
              placeholder="Lütfen email giriniz"
              className="w-full bg-input py-2 px-4 rounded-lg"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-rose-900">
              {errors.email && touched.email ? errors.email : ""}
            </p>
          </div>
          <div>
            <p className="text-gray">Telefon</p>
            <input
              type="text"
              name="phone"
              required
              placeholder="Lütfen şifre giriniz"
              className="w-full bg-input py-2 px-4 rounded-lg"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-rose-900">
              {errors.phone && touched.phone ? errors.phone : ""}
            </p>
          </div>
          <div>
            <p className="text-gray">Şifre</p>
            <input
              type="password"
              name="password"
              required
              placeholder="Lütfen şifre giriniz"
              className="w-full bg-input py-2 px-4 rounded-lg"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-rose-900">
              {errors.password && touched.password ? errors.password : ""}
            </p>
          </div>
          <div>
            <p className="text-gray">Şifre Tekrarı</p>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Lütfen şifre giriniz"
              className="w-full bg-input py-2 px-4 rounded-lg"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-rose-900">
              {errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ""}
            </p>
          </div>
          <div className="mx-auto w-3/4 sm:w-2/4">
            <button className="bg-green py-2 px-3 rounded-lg w-full text-white">
              Kaydol
            </button>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2 w-2/3 md:mx-auto mt-6">
          <p>Hesabın var mı?</p>
          <Link href="/auth/login" className="text-green text-sm">
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
