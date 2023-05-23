export default function validation(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword= /^(?=\w*\d)\S{6,10}$/;
    const regexNumber = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const errors={};


    if (!regexEmail.test(inputs.username)) {
        errors.username ="debe ser un correo electronico careverga"

        
    }

    if(!inputs.username){
        errors.username ="no puede ser vacio"
    }

    if(inputs.username.length> 35){
        errors.username= "debe tener menos de 35 caracteres"
    }
    if(!regexNumber.test(inputs.password)){
    errors.password = "la contraseña debe tener un numero"

    }
    if (!regexPassword.test(inputs.password)) {
        errors.password = "debe tener entre 6 y 10 caracteres"
        
    }
   return errors;

}