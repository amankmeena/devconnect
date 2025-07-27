const projects = [
  {
    id: "proj-001",
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description: "Track workouts, nutrition, and activity with real-time analytics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
    alt: "Fitness Tracker App",
    tags: ["Flutter", "Dart", "Firebase", "GraphQL"],
    viewProject: "#",
    gitLink: "/google.com",
    data: {
      projectOverview: "A mobile app for tracking fitness activities, nutrition, and health metrics with real-time analytics and personalized recommendations.",
      goals: [
        "Accurately track fitness metrics.",
        "Provide personalized workout plans.",
        "Integrate with wearable devices.",
        "Offer social sharing features."
      ],
      keyFeatures: [
        { title: "Activity Tracking", description: "Monitor steps, calories, heart rate." },
        { title: "Workout Plans", description: "Customizable exercise routines." },
        { title: "Wearable Integration", description: "Sync with fitness devices." },
        { title: "Social Sharing", description: "Share achievements with friends." }
      ],
      architectureAndWorkflow: {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        alt: "Architecture Diagram",
        description: "The system architecture is designed for scalability and robustness, ensuring efficient data flow and processing."
      },
      liveDemoPreview: {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        alt: "Live Demo Preview"
      },
      additionalScreenshots: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
      ],
      potentialImprovements: [

      ],
    }
  },
  {
    id: "proj-002",
    slug: "crypto-crash-backend",
    title: "Crypto Crash Backend",
    description: "Crypto Crash is a Node.js and Express backend for a provably fair 'Crash' betting game, integrating real-time cryptocurrency prices and multiplayer game logic.",
    image: "https://mkrgfnruqssdp7qn.public.blob.vercel-storage.com/crypto-crash-game/img-1.jpeg",
    alt: "Crypto Crash Backend Preview",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "Ejs", "axios", "dotenv", "mongoose"],
    viewProject: "https://github.com/amankmeena/crypto-crash-game",
    gitLink: "https://github.com/amankmeena/crypto-crash-game",
    data: {
      projectOverview: "Crypto Crash is a backend implementation of the popular Crash game, where players bet in USD, converted to BTC/ETH at real-time prices. Players watch a multiplier rise and must cash out before the game crashes at a random, provably fair point. The backend manages game rounds, player actions, and real-time updates using Socket.io.",
      goals: [
        "Implement a multiplayer Crash game backend with provably fair mechanics.",
        "Integrate real-time cryptocurrency prices for USD-to-crypto conversion.",
        "Store game state, player actions, and transaction history in MongoDB.",
        "Provide real-time game updates and player interactions via WebSockets."
      ],
      keyFeatures: [
        { title: "Crash Game Logic", description: "Rounds start every 10 seconds, multiplier increases, and crashes at a random point. Players bet and cash out in real time." },
        { title: "Crypto Integration", description: "Fetches live prices from CoinGecko, converts USD bets to BTC/ETH, and simulates player wallets." },
        { title: "Provably Fair Algorithm", description: "Crash point is generated using SHA256 hashing for transparency and fairness." },
        { title: "WebSocket Real-Time Updates", description: "Players receive live game state, multiplier changes, and can cash out instantly." },
        { title: "MongoDB Persistence", description: "Stores rounds, bets, cashouts, and transaction logs for audit and history." },
        { title: "Session-Based Authentication", description: "Protects game and player routes using Express sessions." }
      ],
      architectureAndWorkflow: {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        alt: "Backend Architecture Diagram",
        description: "Built with Node.js, Express, and Socket.io for real-time multiplayer. MongoDB is used for persistent storage. Game logic and crypto price integration are handled in dedicated service modules. EJS templates provide basic UI for signup, login, and gameplay."
      },
      plannedEnhancements: [
        {
          category: "Upcoming Features",
          items: [
            "Add player wallet management and transaction history UI.",
            "Improve error handling and input validation.",
            "Add support for more cryptocurrencies.",
            "Implement admin dashboard for round and player monitoring.",
            "Enhance provably fair verification with public seed display."
          ]
        }
      ]
    }
  },
  {
    id: "proj-003",
    slug: "pwt-play-with-text",
    title: "PWT: Play With Text",
    description: "PWT is a React-based text utilities web app that lets users analyze and manipulate text. It features text transformations, text-to-speech, summary statistics, dark/light mode, and more.",
    image: "https://mkrgfnruqssdp7qn.public.blob.vercel-storage.com/play-with-text/img-1.png",
    alt: "PWT: Play With Text",
    tags: ["React", "JavaScript", "Bootstrap"],
    viewProject: "https://play-with-text-virid.vercel.app/",
    gitLink: "https://github.com/amankmeena/play-with-text",
    data: {
      projectOverview: "PWT is a simple and modern text utility app built with React. It allows users to transform, analyze, and interact with text using a variety of tools, including text-to-speech and summary statistics.",
      goals: [
        "Provide easy-to-use text manipulation tools.",
        "Enable quick analysis of text (word/character count, reading time).",
        "Offer accessibility features like text-to-speech.",
        "Deliver a responsive and user-friendly interface."
      ],
      keyFeatures: [
        { title: "Text Transformations", description: "Convert text to uppercase/lowercase, remove extra spaces, clear text, and copy to clipboard." },
        { title: "Text to Speech", description: "Speak text aloud, with pause, resume, and stop controls." },
        { title: "Text Summary", description: "Get word and character count, and estimated reading time." },
        { title: "Dark/Light Mode", description: "Toggle between dark and light themes for comfortable viewing." },
        { title: "Navigation", description: "Navigate between Home (utilities), About, and Help pages." },
        { title: "Alert Notifications", description: "Get feedback for user actions with alert notifications." }
      ],
      architectureAndWorkflow: {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        alt: "Architecture Diagram",
        description: "Built with React functional components and Bootstrap for UI. State management is handled via React hooks. Routing is managed with react-router-dom. No backend required; all features run client-side."
      },
      plannedEnhancements: [
        {
          category: "Upcoming Features",
          items: [
            "Add contact page.",
            "Improve accessibility and keyboard navigation.",
            "Add more text utilities (e.g., word frequency, find & replace).",
            "Export text as file.",
            "Persistent theme (remember dark/light mode).",
            "Mobile UI improvements.",
            "Internationalization (i18n) support."
          ]
        }
      ]
    }
  },
  {
    id: "proj-004",
    slug: "simple-task-manager",
    title: "Simple Task Manager",
    description: "A straightforward task management application built with React and Vite. The emphasis is on core functionality and a user-friendly interface.",
    image: "https://mkrgfnruqssdp7qn.public.blob.vercel-storage.com/task-manager/img-1.png",
    alt: "Simple Task Manager",
    tags: ["React", "JavaScript", "Vite", "react-datepicker"],
    viewProject: "https://amankmeena.github.io/task-manager/",
    gitLink: "https://github.com/amankmeena/task-manager",
    data: {
      projectOverview: "A simple yet effective task management app that allows users to add, edit, delete, search, and filter tasks. Tasks can be categorized as Upcoming, Overdue, or Completed, and each task supports priority levels. Built with React and Vite, using localStorage for persistence.",
      goals: [
        "Provide a user-friendly interface for managing daily tasks.",
        "Enable users to organize tasks by priority and due date.",
        "Allow searching and filtering for quick task access.",
        "Lay a foundation for future enhancements and collaboration features."
      ],
      keyFeatures: [
        { title: "Dashboard", description: "View all tasks categorized as Upcoming, Overdue, or Completed." },
        { title: "Task Management", description: "Add, edit, and delete tasks with title, description, due date, and priority." },
        { title: "Priority Levels", description: "Set and update task priority (High, Medium, Low)." },
        { title: "Search & Filter", description: "Quickly find and filter tasks by priority and completion status." },
        { title: "Local Storage", description: "All tasks are saved in your browser using localStorage." }
      ],
      architectureAndWorkflow: {
        image: "",
        alt: "Architecture Diagram",
        description: "Built with React and Vite, using functional components. State is managed locally and persisted with localStorage for simplicity. No backend required."
      },
      plannedEnhancements: [
        {
          category: "Enhanced Task Organization",
          items: [
            "Task categories/tags for better organization",
            "Drag-and-drop functionality for task reordering",
            "Subtasks support within main tasks",
            "Task templates for recurring tasks"
          ]
        },
        {
          category: "Improved User Experience",
          items: [
            "Dark mode theme support",
            "Customizable task priority levels",
            "Bulk task actions (delete, complete, move)",
            "Rich text editor for task descriptions"
          ]
        },
        {
          category: "Collaboration Features",
          items: [
            "Task sharing between users",
            "Comments on tasks",
            "Task assignment capabilities",
            "Team workspaces"
          ]
        },
        {
          category: "Data & Integration",
          items: [
            "Data export/import functionality",
            "Calendar integration",
            "Email notifications for due tasks",
            "Task statistics and productivity insights"
          ]
        },
        {
          category: "Technical Improvements",
          items: [
            "Better state management with Redux",
            "Unit tests for critical components",
            "Keyboard shortcuts for common actions"
          ]
        }
      ]
    }
  },
  {
    id: "proj-005",
    slug: "news-bee",
    title: "News Bee",
    description: "News Bee is a React-based news aggregator web app that delivers the latest headlines and in-depth stories from around the world. It fetches news from The Guardian Open Platform API and features category-wise browsing, infinite scroll, and a responsive UI.",
    image: "https://mkrgfnruqssdp7qn.public.blob.vercel-storage.com/news-bee/img-1.png",
    alt: "News Bee",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    viewProject: "https://news-bee-green.vercel.app/",
    gitLink: "https://github.com/amankmeena/news-bee",
    data: {
      projectOverview: "News Bee is a modern news aggregator built with React and Bootstrap 5. It fetches articles from The Guardian API, allowing users to browse news by category with infinite scrolling and a responsive interface.",
      goals: [
        "Deliver up-to-date news headlines and stories from around the world.",
        "Provide category-wise browsing for focused news consumption.",
        "Ensure a seamless and responsive user experience across devices.",
        "Integrate with The Guardian Open Platform API for reliable news data."
      ],
      keyFeatures: [
        { title: "Category-wise News", description: "Browse news by categories such as World, Business, Science, Sports, Technology, Environment, Culture, Politics, and Fashion." },
        { title: "Infinite Scroll", description: "Seamless infinite scrolling for news feeds using react-infinite-scroll-component." },
        { title: "Responsive UI", description: "Modern, responsive interface built with Bootstrap 5." },
        { title: "Top Loading Bar", description: "Visual feedback for loading progress using react-top-loading-bar." },
        { title: "Routing", description: "Client-side routing with react-router-dom for smooth navigation." },
        { title: "About Page", description: "Learn more about News Bee and its mission." },
        { title: "Loading Spinner", description: "Custom loading indicator for better UX." },
        { title: "API Integration", description: "Fetches news from The Guardian API, with category-based endpoints." },
        { title: "Environment Variables", description: "API key managed securely via .env.local." }
      ],
      architectureAndWorkflow: {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        alt: "Architecture Diagram",
        description: "Built with simple JavaScript and Bootstrap 5, using functional components. News data is fetched from The Guardian API and managed via component state. Routing is handled with react-router-dom. No backend required."
      },
      plannedEnhancements: [
        {
          category: "Upcoming Features",
          items: [
            "Search by Query: Ability to search news articles by keywords.",
            "Country Selection: Option to filter news by country.",
            "Language Selection: Option to filter news by language.",
            "User Preferences: Save favorite categories and articles.",
            "Improved Accessibility: Enhance ARIA support and keyboard navigation."
          ]
        }
      ]
    }
  },
];

export default projects;