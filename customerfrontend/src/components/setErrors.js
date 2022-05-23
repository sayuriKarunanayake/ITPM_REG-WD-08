export const setErrors = (email,newproductrequest)=>{
    let errors ={};
    errors.email=email?"":"Email is Required..Please enter valid Email"
    errors. newproductrequest= newproductrequest?"":" New product  Request is Required"

    return errors;

}