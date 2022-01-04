import * as React from "react";
import './Contacto.css'

const Contacto = () => {
  const [userData, setUserData] = React.useState({}); // obtiene los datos de los inputs.
  const [btnVar, setBtnVar] = React.useState(false);
  const [userNameData, setUserNameData] = React.useState("");
  const [userLastNameData, setUserLastNameData] = React.useState("");
  const [userEmailData, setUserEmailData] = React.useState("");
  const [userPhoneData, setUserPhoneData] = React.useState("");
  const [userTextData, setUserTextData] = React.useState("");

  // comprueba la validacion de los inputs.
  const handleSubmit = (e) => {
    let form = document.querySelector('.needs-validation');
    form.classList.add('was-validated');
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity()) {
      form.classList.remove('was-validated');
      setUserData({name: userNameData, lastName: userLastNameData, email: userEmailData, phone: userPhoneData, text: userTextData});
      setUserNameData("");
      setUserLastNameData("");
      setUserEmailData("");
      setUserPhoneData("");
      setUserTextData("");
      alert("se enviaron los datos correctamente.");
    } 
  }

  // asegura que no se exceda el numero de caracteres.
  const handleChangePhone = (e) => {
    if(userPhoneData.length < 9) {
      setUserPhoneData(e.target.value);
    }
    if(userPhoneData.length > 8) {
      if(btnVar) {
        setUserPhoneData(e.target.value);
      }
    }
  }

  // asegura que se pueda borrar algun caracter e inhabilita el teclado "espacio".
  const handleKey = (e) => {
    if(e.keyCode === 8) {
      setBtnVar(true);
      setTimeout(() => {
        setBtnVar(false);
      }, 100);
    } 
    if(e.keyCode === 32) {
      e.preventDefault();
    }
  }

  return (
    <section id="contacto" className="pt-3">
      <h2 className="main__title container">Haga su consulta aquí</h2>
      <div className="p-5 mt-4">
        <div className="container">
          <form className="form needs-validation" onSubmit={handleSubmit}>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="contactName"
                placeholder="Nombre *"
                value={userNameData}
                onChange={(e) => setUserNameData(e.target.value)}
                required
              />
              <label htmlFor="contactName">Nombre *</label>
              <span className="valid-feedback">Ok!</span>
              <span className="invalid-feedback">Debe llenar correctamente los espacios.</span>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="contactLastName"
                placeholder="Apellido *"
                value={userLastNameData}
                onChange={(e) => setUserLastNameData(e.target.value)}
                required
              />
              <label htmlFor="contactLastName">Apellido *</label>
              <span className="valid-feedback">Ok!</span>
              <span className="invalid-feedback">Debe llenar correctamente los espacios.</span>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                placeholder="Email *"
                value={userEmailData}
                onChange={(e) => setUserEmailData(e.target.value)}
                onKeyDown={(e) => handleKey(e)}
                required
              />
              <label htmlFor="contactEmail">Email *</label>
              <span className="valid-feedback">Ok!</span>
              <span className="invalid-feedback">Debe llenar correctamente los espacios.</span>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="contactTel"
                placeholder="Telefono *"
                value={userPhoneData}
                onChange={(e) => handleChangePhone(e)}
                onKeyDown={(e) => handleKey(e)}
                required
              />
              <label htmlFor="contactTel">Telefono *</label>
              <span className="valid-feedback">Ok!</span>
              <span className="invalid-feedback">Debe llenar correctamente los espacios.</span>
            </div>
            <div className="form__textarea">
              <label htmlFor="contactMessage" className="d-none">
                Example textarea
              </label>
              <textarea
                placeholder="Escriba su consulta"
                id="contactMessage"
                cols="30"
                rows="5"
                className="form-control my-3"
                value={userTextData}
                onChange={(e) => setUserTextData(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-contacto my-3">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
