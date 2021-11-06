import React, { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import { ContactItem } from "../components";
import { useSelector } from "react-redux";
import { IContact } from "../type.d";

export const Contacts = () => {
  const state = useSelector((state: IContact) => state.contacts);
  return (
    <Fragment>
      {state.contacts.length > 0 ? (
        <div>
          {state.filtered !== null
            ? state.filtered.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : state.contacts.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </div>
      ) : null}
    </Fragment>
  );
};
