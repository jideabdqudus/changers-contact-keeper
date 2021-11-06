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
    <form className="w-full max-w-lg" onSubmit={onSubmit}>
      <h1 className="text-primary">
        {current ? "Update Contact" : "Add Contact"}
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            value={email}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-number"
          >
            Phone Number
          </label>
          <input
            type="number"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-number"
            value={phone}
            name="phone"
            onChange={onChange}
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long as you'd like
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-country"
          >
            Country Code
          </label>
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
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-greeb-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="submit"
          style={{ width: "100%" }}
        >
          {current ? "Update Contact" : "Add Contact"}
        </button>
      </div>
      <br />
      {current && (
        <div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            style={{ width: "100%" }}
            onClick={() => dispatch(clearCurrent())}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
