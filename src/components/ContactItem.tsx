import React from "react";
import { setCurrent } from "../redux/actions/contacts";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions/contacts";

interface Props {
  contact: {
    id: string;
    name: string;
    email: string;
    phone: string;
    type: string;
  };
}

export const ContactItem: React.FC<Props> = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-7 mt-5">
      <div
        className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        style={{ width: "100%" }}
      >
        <div className="mb-2">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          {email && (
            <p>
              <i className="fa fa-envelope-open"></i> {email}
            </p>
          )}
          {phone && (
            <p>
              <i className="fa fa-phone"></i> {phone}
            </p>
          )}
        </div>
        <div className="px-0 pt-1 pb-1">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setCurrent(contact))}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Edit
          </span>
          <span
            onClick={onDelete}
            style={{ cursor: "pointer" }}
            className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};
