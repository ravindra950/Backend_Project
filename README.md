# Backend Project

This is a Node.js backend project.

## Features
- Express.js
- MongoDB
- REST APIs

## Installation
```bash
npm install
npm start

## Features

### Authentication & Authorization
- JWT-based authentication  
- Role-based access control: `OWNER`, `COLLABORATOR`, `VIEWER`  
- Token refresh mechanism  
- Protected API routes  

### Project & Workspace Management
- Create, update, delete projects  
- Create workspaces under projects  
- Invite collaborators  
- Assign/update user roles  

### Real-Time Collaboration
- WebSocket (Socket.io) based communication  
- Broadcast user join/leave events  
- Mock file change events  
- Activity / cursor updates  

### Asynchronous Job Processing
- Accept jobs via API  
- Process jobs asynchronously (simulate code execution)  
- Retry & failure handling  
- Persist job results  

### Data Storage
- MongoDB for main data storage  
- Models: `User`, `Project`, `Workspace`, `Job`  

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT  
- **Real-Time:** Socket.io  
