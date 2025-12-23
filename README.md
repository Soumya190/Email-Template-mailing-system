# Email Template & Bulk Mailing System

A full-stack application that enables users to create dynamic email templates, manage contacts, and send personalized bulk emails using the SendGrid API, MySQL, and Prisma.   

## Tech Stack

**Frontend:** Next.js, React, Tailwind CSS  
**Backend:** Node.js (Next.js API Routes), Prisma ORM  
**Database:** MySQL  
**Email Service:** SendGrid API

## Project Overview

This project provides an efficient solution for managing email templates and sending personalized bulk emails using the SendGrid API.

## Features Implemented
- Email template creation & editing  
- Contact management (add, update, group)  
- Bulk email sending using SendGrid  
- Dashboard overview  
- API-based frontend–backend communication

## Tech Stack & Architecture

- **Next.js** - frontend + API routes  
- **Prisma** - database abstraction & schema management  
- **MySQL** - relational data storage  
- **SendGrid** - email delivery  

**Architecture Flow:**  
Frontend → API Routes → Prisma → MySQL / SendGrid

## Database Design

**Models:** Template, Contact, Activity  
**Relationships:**  
- Template has many EmailLogs  
- Contact can belong to multiple groups  

## API Endpoints
- `POST /api/templates` → Create a new email template  
- `POST /api/contact` → Add a new contact  
- `POST /api/send-email` → Send bulk emails  

## Challenges Faced

- Handling async API calls for bulk emails  
- Prisma schema validation and migrations  
- Error handling with SendGrid API
- Building connection setup with database
