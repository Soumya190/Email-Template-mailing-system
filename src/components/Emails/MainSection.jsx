// "use client"
// import Styles from "../../Styles/Emails/mainsection.module.scss";
// import { useState } from 'react';

// const MainSection = () => {
//     const [values, setValues] = useState({
//         name: "",
//         subject: "",
//         body: "",
//     })
//     // const [isButtonClicked,setIsButtonClicked]=useState(false);
//     const [isEmailEmpty, setIsEmailEmpty] = useState(true);

//     const handleEmailName = (e) => {
//         setValues({ ...values, name: e.target.value });
//     }

//     const handleEmailSubject = (e) => {
//         setValues({ ...values, subject: e.target.value });
//     }

//     const handleEmailBody = (e) => {
//         setValues({ ...values, body: e.target.value });
//     }

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("/api/send-email", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//         });
//         const data = await response.json();
//         console.log(data);
//     }

//     const handleCreateTemplate = async (e) => {
//         e.preventDefault();
//         const response = await fetch("/api/templates", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//         });
//         const data = await response.json();
//         console.log(data);
//         setIsEmailEmpty(false);
//         // setIsButtonClicked(true);
//     }

//     const handleUpdateTemplate = async (e) => {
//         e.preventDefault();
//         const response = await fetch("/api/templates", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//         });
//         const data = await response.json();
//         console.log(data);
//     }

//     const handleDeleteTemplate = async (e) => {
//         e.preventDefault();
//         const response = await fetch(`/api/templates?id=${values.id}`, {
//             method: "DELETE",
//         });
//         const data = await response.json();
//         console.log(data);
//     }

//     const handleFetchTemplates = async (e) => {
//         e.preventDefault();
//         const response = await fetch("/api/templates", {
//             method: "GET",
//         });
//         const data = await response.json();
//         console.log(data);
//     }

//     return (
//         <>
//             <div className={Styles.mainContent}>
//                 <div className={Styles.templateDetails}>
//                     <div className={Styles.templateHeading}>
//                         <p>Template Name </p>
//                         <p>Subject</p>
//                         <p>Actions</p>
//                     </div>
//                     {
//                         isEmailEmpty ? 
//                         <p>Field is empty</p> : 
//                         <>
//                             <div className={Styles.templateContent}>
//                                 <p>{values.name}</p>
//                                 <p>{values.subject}</p>
//                                 <p>{values.body}</p>
//                             </div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </>
//                     }
//                 </div>
//                 <form onSubmit={handleFormSubmit} className={Styles.emailtemplate}>
//                     <h1>Create/Edit Template</h1>
//                     <div className={Styles.templateName}>
//                         <label >Template Name:</label>
//                         <input type="text" value={values.name} onChange={handleEmailName} placeholder='Welcome Email' />
//                     </div>

//                     <div className={Styles.templateSubject}>
//                         <label >Email Subject:</label>
//                         <input type="text" value={values.subject} onChange={handleEmailSubject} placeholder='Enter the Subject' />
//                     </div>

//                     <div className={Styles.templateBody}>
//                         <label >Email Body:</label>
//                         <textarea row='10' cols="30" value={values.body} onChange={handleEmailBody} placeholder='Enter the body' />
//                         {/* <input type="text" value={values.name} onChange={handleEmailBody} placeholder='Enter the body' /> */}
//                     </div>

//                     <button className={Styles.templateButton} onClick={handleCreateTemplate} type="button">Save Template</button>

//                     <button className={Styles.templateButton}>Send Email</button>
//                 </form>
//             </div></>
//     )
// }

// export default MainSection;