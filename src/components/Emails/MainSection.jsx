"use client";
import React, { useEffect, useState } from "react";
import Styles from "../../../src/Styles/Emails/mainsection.module.scss";

const MainSection = () => {
    const [templates, setTemplates] = useState([]);
    const [groups, setGroups] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState("");

    useEffect(() => {
        fetch("/api/templates")
            .then(res => res.json())
            .then(data => setTemplates(data));
    }, []);


    useEffect(() => {
        fetch("/api/groups")
            .then(res => res.json())
            .then(data => {
                console.log("Groups fetched:", data);
                if (Array.isArray(data)) {
                    setGroups(data);
                } else {
                    setGroups([]);
                }
            })
            .catch(() => setGroups([]));
    }, []);



    const handleTemplateChange = (e) => {
        const template = templates.find(t => t.id === e.target.value);
        setSelectedTemplate(template);
    };

    const handleSendEmail = async () => {
        if (!selectedTemplate || !selectedGroup) {
            alert("Please select template and group");
            return;
        }

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({
            //     templateId: selectedTemplate.id,
            //     group: selectedGroup,
            // }),
            body: JSON.stringify({         // ← replace this with the lowercased group
                templateId: selectedTemplate.id,
                group: selectedGroup.toLowerCase(),  // normalize group
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Emails sent successfully!");
        } else {
            alert(data.error);
        }
    };

    return (
        <div className={Styles.mainSection}>
            <div className={Styles.template}>
                <p>Select Template</p>
                <select onChange={handleTemplateChange}>
                    <option value="">Select template</option>
                    {templates.map(t => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={Styles.groups}>
                <p>Select Group</p>
                <select onChange={(e) => setSelectedGroup(e.target.value)}>
                    <option value="">Select group</option>
                    {groups.map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>
            </div>

            <div className={Styles.previewContainer}>
                <h2 className={Styles.previewTitle}>Email Preview</h2>

                <div className={Styles.preview}>
                    {selectedTemplate ? (
                        <>
                            <div className={Styles.previewSubject}>
                                <strong>Subject:</strong> {selectedTemplate.subject}
                            </div>

                            <div className={Styles.previewBody}>
                                {selectedTemplate.body}
                            </div>
                        </>
                    ) : (
                        <p className={Styles.previewPlaceholder}>
                            Select a template to preview the email
                        </p>
                    )}
                </div>
            </div>


            <button onClick={handleSendEmail}>Send Email</button>
        </div>
    );
};

export default MainSection;
