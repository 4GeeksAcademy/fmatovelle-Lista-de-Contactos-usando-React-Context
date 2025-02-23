import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };

    console.log(newContact);

    actions.createNewContact(newContact);

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5 mt-5">Add a new contact</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="form-control"
                id="name"
                placeholder="Full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
          <Link to="/" className="d-block text-decoration-none mt-3">
            <p className="underline-on-hover text-center">
              back to contacts list
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};