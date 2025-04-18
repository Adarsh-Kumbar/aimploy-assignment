# Basic Candidate Job Application Form

## Overview
This web-based application allows candidates to apply for jobs by submitting their basic details, uploading their resume, and answering behavioral questions. The platform consists of three main pages:

1. Page 1: Candidate Details – Collects basic information such as name, email, and phone number.
2. Page 2: Resume Upload – Allows candidates to upload their resume in PDF, TXT, or DOCX formats.
3. Page 3: Behavioral Questions – Displays a sample question where candidates can provide a response via text, audio, or video.

## Features
### Page 1: Candidate Details
- Collects basic information (Name, Email, Phone Number).
- Text input fields for capturing details.
  
  ![1](https://github.com/user-attachments/assets/0c37cab5-1cc5-4ea9-b9c0-61e96098afbb)

### Page 2: Resume Upload
- Allows the upload of resumes in multiple formats (PDF, TXT, DOCX).
- Handles file upload and storage.

  ![2](https://github.com/user-attachments/assets/07c40ce7-7c72-42a3-b4d4-4bd9e1f7584f)


### Page 3: Behavioral Questions
- Displays a sample behavioral question: “Why are you interested in joining this organisation?”
- Provides input options for candidates to respond with text, audio, or video.
- File upload functionality for audio and video responses.

  ![3](https://github.com/user-attachments/assets/a9798b16-b3ab-4139-8ad6-a14f63adce2e)


## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose for interaction)

  ![4](https://github.com/user-attachments/assets/51d5a8d4-4572-4a08-ba37-dd84359904f0)

## API Endpoints
- POST /api/candidate – Submit candidate details.
- POST /api/resume/:id – Upload candidate resume.
- POST /api/question/:id – Submit candidate answer to behavioral question.
