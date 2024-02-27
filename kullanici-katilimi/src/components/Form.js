import { useEffect, useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        password: "",
        terms: false,
    });

    const submitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        console.log("formData güncellendi! ", formData);
    }, [formData]);
    return <form onSubmit={submitHandler}>
<h2>Form</h2>
{/*form nesleleri gelecek */}
<div>
<label>
    İsim Soyisim:
    <input type="text" 
    name="name"
    onChange={e => {
        setFormData ({...formData, [e.target.name]: e.target.vallue });

    }}
    />
</label>
</div>
<div>
<label>
    E-posta:
    <input type="e-mail"
    name="email"
    onChange={e => {
        setFormData ({...formData,  [e.target.name]: e.target.vallue})

    }}
    />
</label>
</div>
<div>
<label>
    Şifre:
    <input type="pasword"
    password="password"
    onChange={e => {
        setFormData ({...formData,  [e.target.name]: e.target.vallue})

    }}/>
</label>
</div>
<div>
<label>
   Kullanım Şartları:
    <input type="checkbox"
    name="terms"
    onChange={e => {
        setFormData ({...formData, terms: e.target.checked});

    }}/>
</label>
</div>
<div>
    <button type="submit">Gönder</button>
</div>
</form>
            
 
};


export default Form;

