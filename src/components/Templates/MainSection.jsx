"use client"
import Styles from "../../Styles/Templates/mainsection.module.scss";
import { useState } from 'react';

const MainSection = () => {
    const [values, setValues] = useState({
        name: "",
        subject: "",
        body: "",
    })
    
    
    const [templates, setTemplates] = useState([]);
    const [errors, setErrors] = useState({});
    const [editingTemplateId, setEditingTemplateId] = useState(null);


    const validate = () => {
        const newErrors = {};

        if (!values.name.trim()) {
            newErrors.name = "Template name is required";
        }
        if (!values.subject.trim()) {
            newErrors.subject = "Email subject is required";
        }
        if (!values.body.trim()) {
            newErrors.body = "Email body is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const [isEmailEmpty, setIsEmailEmpty] = useState(true);

    const handleEmailName = (e) => {
        setValues({ ...values, name: e.target.value });
    }

    const handleEmailSubject = (e) => {
        setValues({ ...values, subject: e.target.value });
    }

    const handleEmailBody = (e) => {
        setValues({ ...values, body: e.target.value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/templates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
    }

    const handleCreateTemplate = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const response = await fetch("/api/templates", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
        alert(data.error);
        return; 
    }

    setTemplates((prev) => [...prev, data]);

    setValues({
        name: "",
        subject: "",
        body: "",
    });
    setErrors({});
    setIsEmailEmpty(false);
};


    const handleEditClick = (template) => {
        setValues({
            name: template.name,
            subject: template.subject,
            body: template.body,
        });
        setEditingTemplateId(template.id);
    };


    const handleUpdateTemplate = async () => {
        if (!validate()) return;
        const response = await fetch("/api/templates", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            id: editingTemplateId,
            ...values
        }),
        });
        const data = await response.json();
        console.log("Updated template:", data);
        setTemplates(prev =>
        prev.map(t => t.id === editingTemplateId ? data : t)
    );

        setValues({ name: "", subject: "", body: "" });
        setEditingTemplateId(null);
    }

    const handleDeleteTemplate = async (id) => {
        await fetch(`/api/templates?id=${id}`, {
            method: "DELETE",
        });

        setTemplates((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <>
            <div className={Styles.mainContent}>
                <div className={Styles.content1}>
                    <table className={Styles.templateTable}>
                        <thead className={Styles.templateHeading}>
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {templates.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className={Styles.emptyState}>
                                        No templates created yet
                                    </td>
                                </tr>
                            ) : (
                                templates.map((template) => (
                                    <tr key={template.id}>
                                        <td>{template.name}</td>
                                        <td>{template.subject}</td>
                                        <td className={Styles.actions}>
                                            <button
                                                onClick={() => handleEditClick(template)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTemplate(template.id)}
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

                <form onSubmit={handleFormSubmit} className={Styles.emailtemplate}>
                    <h1>Create/Edit Template</h1>
                    <div className={Styles.templateName}>
                        <label >Name:</label>
                        <input type="text" value={values.name} onChange={handleEmailName} placeholder='Enter Name' />
                        {errors.name && <span className={Styles.error}>{errors.name}</span>}
                    </div>

                    <div className={Styles.templateSubject}>
                        <label >Subject:</label>
                        <input type="text" value={values.subject} onChange={handleEmailSubject} placeholder='Enter the Subject' />
                        {errors.subject && <span className={Styles.error}>{errors.subject}</span>}
                    </div>

                    <div className={Styles.templateBody}>
                        <label >Body:</label>
                        <textarea row='10' cols="30" value={values.body} onChange={handleEmailBody} placeholder='Enter the body' />
                        {errors.body && <span className={Styles.error}>{errors.body}</span>}
                    </div>

                    <button
                        type="button"
                        className={Styles.templateButton}
                        onClick={editingTemplateId ? handleUpdateTemplate : handleCreateTemplate}
                    >
                        {editingTemplateId ? "Update Template" : "Save Template"}
                    </button>
                </form>
            </div></>
    )
}

export default MainSection;