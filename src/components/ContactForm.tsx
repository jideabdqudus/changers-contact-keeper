import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  updateContact,
  clearCurrent,
} from "../redux/actions/contacts";
import { IContact } from "../type.d";
import { v1 as uuid } from "uuid";

interface Props {}
export const ContactForm: React.FC<Props> = () => {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const current = useSelector((state: IContact) => state.contacts.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        id: "",
        name: "",
        email: "",
        phone: "",
        type: "NG",
      });
    }
  }, [current]);

  const { name, email, phone, type } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      dispatch(
        addContact({
          id: uuid(),
          name,
          email,
          phone,
          type,
        })
      );
      setContact({ id: "", name: "", email: "", phone: "", type: "personal" });
    } else {
      dispatch(updateContact(contact));
    }
    dispatch(clearCurrent());
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        name="phone"
        onChange={onChange}
      />
      <h5>Country Code</h5>
      <input
        type="radio"
        name="type"
        value="NG"
        checked={type === "NG"}
        onChange={onChange}
      />{" "}
      +234{" "}
      <input
        type="radio"
        name="type"
        value="GER"
        checked={type === "GER"}
        onChange={onChange}
      />{" "}
      +49{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button
            className="btn btn-light btn-block"
            onClick={() => dispatch(clearCurrent())}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
