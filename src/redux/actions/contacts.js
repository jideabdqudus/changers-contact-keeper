import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from "../types";
import { toastify } from "../../helpers";

//Get Contacts
export const getContacts = () => (dispatch) => {
  let res = localStorage.getItem("testContacts");
  dispatch({ type: GET_CONTACTS, payload: res });
};

//Add Contact
export const addContact = (contact) => (dispatch) => {
  try {
    dispatch({ type: ADD_CONTACT, payload: contact });
  } catch (error) {
    toastify.alertError("Error creating contact");
  }
};

//Update Contact
export const updateContact = (contact) => (dispatch) => {
  try {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  } catch (error) {
    toastify.alertError("Error updating contact");
  }
};

//Clear Contacts
export const clearContacts = (dispatch) => {
  dispatch({ type: CLEAR_CONTACTS });
};

//Set Current Contact
export const setCurrent = (contact) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: contact });
};
//Clear Current Contact
export const clearCurrent = () => (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

//Filter Contacts
export const filterContacts = (text) => (dispatch) => {
  dispatch({ type: FILTER_CONTACTS, payload: text });
};
//Clear Filter
export const clearFilter = (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};

//Delete Contact
export const deleteContact = (id) => (dispatch) => {
  dispatch({ type: DELETE_CONTACT, payload: id });
};
