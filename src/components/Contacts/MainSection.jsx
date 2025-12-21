"use client"
import Styles from "../../Styles/Contacts/mainsection.module.scss";
import React, { useState, useEffect } from "react";



const MainSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        group: "",
    });

    const [editingContactId, setEditingContactId] = useState(null);

    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await fetch("/api/contact");
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditContact = (contact) => {
        setFormData({
            name: contact.name,
            email: contact.email,
            group: contact.group || "",
        });

        setEditingContactId(contact.id);
    };

    const handleDeleteContact = async (id) => {
        try {
            await fetch(`/api/contact?id=${id}`, {
                method: "DELETE",
            });

            setContacts((prev) => prev.filter((c) => c.id !== id));
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };



    const handleCreateContact = async (e) => {
        e.preventDefault();

        // if (!formData.name || !formData.email) {
        //   alert("Name and Email are required");
        //   return;
        // }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error);
                return;
            }

            console.log("Contact created:", data);

            setFormData({
                name: "",
                email: "",
                group: "",
            });

            fetchContacts();

        } catch (error) {
            console.error("Error creating contact:", error.message);
        }
    };


    return (
        <>
            <div className={Styles.mainsection}>
                <div className={Styles.content1}>
                    {/* <h1>Contact List</h1> */}
                    <table className={Styles.contactColumns}>
                        <thead className={Styles.contactHeading}>
                            <tr >
                                <th >Name</th>
                                <th>Email</th>
                                <th >Group</th>
                                <th >Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="4">
                                        No contacts found
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.group || "-"}</td>
                                        <td className={Styles.actions}>
                                            <button onClick={() => handleEditContact(contact)}>
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteContact(contact.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                </div>
                <div className={Styles.content2}>
                    <h1>Add New Contact</h1>
                    <form onSubmit={handleCreateContact}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Group</label>
                        <select
                            name="group"
                            value={formData.group}
                            onChange={handleChange}
                        >
                            <option value="">Select group</option>
                            <option value="marketing">Marketing</option>
                            <option value="clients">Clients</option>
                            <option value="students">Students</option>
                            <option value="hr">HR</option>
                            <option value="newsletter">Newsletter</option>
                        </select>

                        <button type="submit">Add Contact</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainSection;