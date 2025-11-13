PROJECT OVERVIEW

FreelanceHub Dashboard is a simple yet elegant dashboard designed for freelancers or small businesses to track clients, projects, and payments. It provides a modern UI with interactive cards and sections to quickly access important metrics.

The dashboard includes:

Fixed header and footer for consistent navigation.

Dynamic statistics displaying total clients, projects, and payments.

Interactive Client, Project, and Payment cards.

Clean, responsive design using Tailwind CSS.

Features

Dashboard Stats: Quick overview of total clients, projects, and payments.

Client Management: Display a list of clients with basic information.

Project Management: List projects with status indicators (active, pending, completed).

Payments Overview: Track payments by project with status (paid or pending).

Responsive Layout: Works on desktop and mobile devices.

Dynamic Data: Powered by React Context and Reducer for state management.

Tech Stack

React – Component-based frontend framework

TypeScript – Strong typing for better code safety

Tailwind CSS – Utility-first CSS framework for styling

React Context + Reducer – State management

Vite – Fast development build tool (optional)

Project Structure
freelance-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ClientCard.tsx
│   │   ├── DashboardStats.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PaymentsView.tsx
│   │   └── ProjectList.tsx
│   ├── context/
│   │   └── DashboardContext.tsx
│   ├── data/
│   │   └── sampleData.ts
│   ├── models/
│   │   ├── Client.ts
│   │   ├── Project.ts
│   │   └── Payment.ts
│   ├── pages/
│   │   └── Dashboard.tsx
│   ├── App.tsx
│   └── index.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
![freelance screenshoot](https://github.com/buyinzadiana-bot/FREELANCE-DASHBOARD/blob/74e30265b3ce09f94b5f6b74d3840bceecc77b4e/Screenshot%202025-11-13%20at%2016.52.17.png)
