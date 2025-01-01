import * as Yup from "yup"

const registerSchema = Yup.object({
    email:Yup.string().matches( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Geçersiz bir email adresi" ).min(10,"Minimum 10 karakterden oluşmalıdır").required("Bu alan zorunludur"),
    password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Min 8 karakter. Bir büyük, bir küçük harf. Bir rakam ve bir özel karakter girilmelidir").min(6,"Minimum 6 karakterden oluşmalıdır").required("Bu alan zorunludur"),
    confirmPassword:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Min 8 karakter. Bir büyük, bir küçük harf. Bir rakam ve bir özel karakter girilmelidir").min(6,"Minimum 6 karakterden oluşmalıdır").required("Bu alan zorunludur").oneOf([Yup.ref("password"),null],"Şifreler eşleşmiyor"),
    fullName:Yup.string().min(6,"Minimum 6 karakterden oluşmalıdır").required("Bu alan zorunludur"),
    phone:Yup.string().min(610,"Minimum 10 karakterden oluşmalıdır").required("Bu alan zorunludur"),
})
export default registerSchema