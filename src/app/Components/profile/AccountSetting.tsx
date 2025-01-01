"use client";
import { useFormik } from "formik";
import accountSchema from "@/validation/account"
const AccountSetting = () => {
    const onSubmit = () => {};
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        oldPassword:"",
        fullName:"",
        phone:""
      },
      validationSchema: accountSchema,
      onSubmit,
    });
  return (
    <div className="container mx-auto p-0 mt-10 lg:mt-0 lg:px-8 ">
      <h4 className="text-3xl font-bold">Hesap Ayarları</h4>
      <div className="mt-10">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray font-semibold">Ad Soyad</span>
            <input type="text" name="fullName" placeholder="Ad ve soyad giriniz" required className="py-2 px-4 rounded-lg bg-sectionBg" value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
            <p className="text-rose-900">
              {errors.fullName && touched.fullName ? errors.fullName : ""}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray font-semibold">Telefon</span>
            <input type="text" name="phone" placeholder="Telefon numarası giriniz" required className="py-2 px-4 rounded-lg bg-sectionBg" value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
            <p className="text-rose-900">
              {errors.phone && touched.phone ? errors.phone : ""}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray font-semibold">Eposta</span>
            <input type="email" name="email" placeholder="Eposta giriniz" required className="py-2 px-4 rounded-lg bg-sectionBg" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            <p className="text-rose-900">
              {errors.email && touched.email ? errors.email : ""}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray font-semibold">Eski Şifre</span>
            <input type="password" name="oldPassword" placeholder="Şifre giriniz" required className="py-2 px-4 rounded-lg bg-sectionBg" value={values.oldPassword} onChange={handleChange} onBlur={handleBlur}/>
            <p className="text-rose-900">
              {errors.oldPassword && touched.oldPassword ? errors.oldPassword : ""}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray font-semibold">Şifre</span>
            <input type="password" name="password" placeholder="Şifre giriniz" required className="py-2 px-4 rounded-lg bg-sectionBg" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            <p className="text-rose-900">
              {errors.password && touched.password ? errors.password : ""}
            </p>
          </div>
          <div className="place-self-end">
            <button className="bg-green px-5 py-3 p-2 text-white rounded-lg font-semibold">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
