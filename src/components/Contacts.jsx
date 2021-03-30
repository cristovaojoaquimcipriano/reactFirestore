import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../fiebase";

const Contacts = () => {
  const contactsCollation = fireDb.collection("/contacts");
  const [contacts, setContacts] = useState();
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fireDb.collection("/contacts").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setContacts(data);
      console.log(data);
    });
  }, []);

  const addOrEdit = (contact) => {
    if (!currentId) {
      contactsCollation.add(contact);
      setCurrentId("");
    } else {
      contactsCollation.doc(currentId).update(contact);
      setCurrentId("");
    }
  };

  const onDelete = (key) => {
    contactsCollation.doc(key).delete();
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ currentId, addOrEdit, contacts }} />
        </div>

        <div className="col-md-7">
          <table className="table table-borderless table-responsive table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            {contacts && (
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.fullname}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.email}</td>
                    <td>
                      <a
                        href="#"
                        className="btn text-primary"
                        onClick={() => setCurrentId(contact.id)}
                      >
                        <i className="fa fa-pencil"></i>
                      </a>
                      <a
                        href="#"
                        className="btn text-danger"
                        onClick={() => onDelete(contact.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
