// src/components/Auth/utils/LocalStorage.jsx

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Monthly Report",
        "description": "Compile and summarize department performance metrics.",
        "date": "2025-10-09",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Feedback Review",
        "description": "Analyze client feedback and create action points.",
        "date": "2025-09-28",
        "category": "Analysis"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Server Maintenance",
        "description": "Perform scheduled maintenance and update software versions.",
        "date": "2025-09-15",
        "category": "IT"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstName": "Diya",
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "UI Design Update",
        "description": "Revise homepage layout according to new branding.",
        "date": "2025-10-10",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix Login Bug",
        "description": "Resolve session timeout issue during authentication.",
        "date": "2025-09-29",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests and provide feedback.",
        "date": "2025-09-25",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Optimize Images",
        "description": "Compress images for better site performance.",
        "date": "2025-09-22",
        "category": "Performance"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 2, "failed": 1 }
  },
  {
    "id": 3,
    "firstName": "Ishan",
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Database Backup",
        "description": "Schedule and verify daily backups for all databases.",
        "date": "2025-10-08",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Create API Docs",
        "description": "Document REST APIs for frontend team integration.",
        "date": "2025-09-30",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Security Audit",
        "description": "Check for vulnerabilities and apply necessary patches.",
        "date": "2025-10-11",
        "category": "Security"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Meera",
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Team Meeting Notes",
        "description": "Prepare and distribute meeting summary to all members.",
        "date": "2025-10-09",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Budget Planning",
        "description": "Finalize Q4 budget for marketing initiatives.",
        "date": "2025-09-26",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Vendor Negotiation",
        "description": "Discuss contract renewal terms with supplier.",
        "date": "2025-09-20",
        "category": "Operations"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 5,
    "firstName": "Rohan",
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Marketing Campaign",
        "description": "Launch social media campaign for product awareness.",
        "date": "2025-10-10",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Customer Survey",
        "description": "Collect and analyze customer satisfaction data.",
        "date": "2025-09-27",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Event Planning",
        "description": "Organize annual team-building event.",
        "date": "2025-09-18",
        "category": "Events"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Website Update",
        "description": "Add new product listings and update pricing.",
        "date": "2025-10-12",
        "category": "Development"
      }
    ],
    "taskCount": { "active": 1, "newTask": 2, "completed": 1, "failed": 1 }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  return { employees: employeeData, admin: adminData };
};
