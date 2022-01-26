jQuery(document).ready(function(){
			// Declare parallax on layers
			jQuery('.parallax-layer').parallax({
				mouseport: jQuery("#port")
			});

    		jQuery("#formLogin").validate({
		        rules: {
		            userEmail: { required: true,email: true},
		            userPassword: { required: true,},
		        },
		        messages: {
		            userEmail: {
		                   required: "Ingresa un correo electrónico.",
		                   email: "Verifica tu correo electrónico.",
		                },
		            userPassword: {
		                   required: "Ingresa una contraseña.",
		                },
		        }     
    		});

    		jQuery("#formStepOne").validate({
		        rules: {
		            fullname: {required:true,},
		            identification: {required: true,},
		            email: { required: true,email: true},
		            pass: { required: true, minlength: 6,},
		            passto: {required: true, equalTo: "#pass"},
		            year: {required: true,},
		            month: {required: true,},
		            day: {required: true,},
		        },
		        messages: {
		        	fullname: {
		        		required: "No olvides escribir tu nombre.",
		        	},
		        	identification: {
		        		required: "No olvides tu número de documento.",
		        	},
		            email: {
		                   required: "No olvides tu correo electrónico.",
		                   email: "El correo electrónico está errado.",
		                },
		            year: {
		                   required: "Selecciona día / mes / año.",
		                },
		            month: {
		                   required: "Selecciona día / mes / año.",
		                },
		            day: {
		                   required: "Selecciona día / mes / año.",
		                },
		            pass: {
		                   required: "Ingresa una contraseña.",
		                   minlength: "Debe tener mínimo 6 caracteres.",
		                },
		            passto: {
		                   required: "Ingresa una contraseña.",
		                   equalTo: "Las contraseñas no coinciden.",
		                },
		        }     
    		});


			jQuery("#formStepTwo").validate({
		        rules: {
		            telefono: {required:true, number: true,},
		            pais: {required: true,},
		            ciudad: {required: true,},
		            departamento_region: {required: true,},
		            direccion: {required: true,},
		            tyc: {required: true,},
		        },
		        messages: {
		        	telefono: {
		        		required: "No olvides tu número de contacto.",
		        		number: "Ingresa un número válido",
		        	},
		        	pais: {
		        		required: "No olvides agregar tu país de residencia.",
		        	},
		        	ciudad: {
		        		required: "No olvides agregar tu ciudad.",
		        	},
		        	departamento_region: {
		        		required: "No olvides agregar tu departamento.",
		        	},
		        	direccion: {
		        		required: "Debes incluir tu dirección de contacto.",
		        	},
		        	tyc: {
		        		required: "Debes aceptar los términos y condiciones.",
		        	},
		        }     
    		});


    		jQuery("#formForgotPass").validate({
		        rules: {
		            emailSendPass: { required: true,email: true},
		        },
		        messages: {
		            emailSendPass: {
		                   required: "Ingresa un correo electrónico.",
		                   email: "Verifica tu correo electrónico.",
		                },
		        }     
    		});




    		
});
