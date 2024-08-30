import * as Yup from 'yup';
export const registerFormSchema = Yup.object().shape({
    name:Yup.string().required("Required").max(20,"Maximum 20 letters").min(2,"Minimum 2 Characters"),
    email:Yup.string().required("Required").email('Invalid Email'),
    password:Yup.string().required("Required").min(8,"Minimum 8 Characters"),
    //.matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,"Minimum 8 character , Atleast One Capital letter,One Symbol & One Digit"),
    confirmPassword:Yup.string().required("Required").oneOf([Yup.ref("password"),""],"Password Doesn't match")
})  