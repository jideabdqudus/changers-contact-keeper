import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts, clearFilter } from "../redux/actions/contacts";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.contacts);
  useEffect(() => {
    if (filter === null) {
      text.current.value = "";
    }
  });
  const text = useRef("");
  const onChange = (e) => {
    if (text.current.value !== "") {
      dispatch(filterContacts(e.target.value));
    } else {
      dispatch(clearFilter);
    }
  };

  if (contacts.length < 2) {
    return null;
  }

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts.."
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        aria-label="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
};
