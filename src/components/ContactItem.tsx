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
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => dispatch(setCurrent(contact))}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
