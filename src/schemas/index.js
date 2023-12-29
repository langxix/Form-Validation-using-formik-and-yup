import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema =yup.object().shape({
    email: yup.string().email("please enter a valid email").required("required"),
    age: yup.number().positive().integer().required("required"),
    password: yup.string().min(5).matches(passwordRules, {message: "please create a stronger password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null],"password must mmatch").required("required"),
    agreeToTerms: yup.boolean()
    .oneOf([true], 'You must agree to the terms')
    .required('You must agree to the terms'),

});


export const advancedSchema = yup.object().shape({
    username: yup.string()
    .min(3,"name should be atleast 3 words")
    .required("required"),

    jobType: yup
    .string()
    .oneOf(["designer","developer","manager","other"],"It should be from the key word")
    .required("Required"),

    acceptedTos: yup
    .boolean()
    .oneOf([true],"Please accept the terms of service" ),

 
});