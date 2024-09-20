import {Article, ArticleCategory, Project, ProjectType} from "./interfaces/interfaces";

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    imgUrl: 'assets/angular-feature.png',
    header: 'Working with Angular',
    preview: [
      'Advantage above other frameworks like React.',
      'Learning path and ease of use. My experience.'
    ],
    categoryIdentifier: 'angular',
    htmlContent: `
 <title>Working with Angular: A Comprehensive Guide</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1, h2, h3 {
      color: #333;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 2rem;
      margin-top: 20px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 10px;
    }

    h3 {
      font-size: 1.5rem;
      margin-top: 15px;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
    }

    .tech-icons {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .tech-item {
      text-align: center;
    }

    .tech-item i {
      font-size: 2rem;
      color: #007bff;
      margin-bottom: 5px;
    }

    .tech-item p {
      font-size: 1rem;
      color: #333;
    }

    .section {
      margin-top: 30px;
    }

    .section h2 {
      font-size: 1.8rem;
      color: #007bff;
    }

    .section p {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .links-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 300px;
      margin: 20px auto;
    }

    .link-item {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0.75rem 1rem;
      transition: background 0.3s, color 0.3s;
    }

    .link-item i {
      margin-right: 0.5rem;
      font-size: 1.2rem;
      color: #007bff;
    }

    .link-item:hover {
      background: #007bff;
      color: #fff;
      border-color: #007bff;
    }
  </style>
</head>
  <div class="container">
    <header>
      <h1>Working with Angular</h1>
      <p>Discover how Angular can streamline your web development process and build robust applications.</p>
    </header>

    <section class="section">
      <h2>Introduction to Angular</h2>
      <p>
        Angular is a powerful front-end web framework developed by Google. It enables developers to build dynamic, single-page applications (SPAs) with ease. Angular is based on TypeScript, which brings strong typing and modern JavaScript features to the table. With its rich set of features and tools, Angular simplifies the development of complex applications.
      </p>
    </section>

    <section class="section">
      <h2>Key Features of Angular</h2>
      <div class="tech-icons">
        <div class="tech-item">
          <i class="fab fa-angular"></i>
          <p>Component-Based Architecture</p>
        </div>
        <div class="tech-item">
          <i class="fas fa-code"></i>
          <p>TypeScript Support</p>
        </div>
        <div class="tech-item">
          <i class="fas fa-cogs"></i>
          <p>Two-Way Data Binding</p>
        </div>
        <div class="tech-item">
          <i class="fas fa-plug"></i>
          <p>Dependency Injection</p>
        </div>
        <div class="tech-item">
          <i class="fas fa-tools"></i>
          <p>Rich CLI Tools</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Getting Started with Angular</h2>
      <p>
        To get started with Angular, follow these steps:
      </p>
      <ul>
        <li><strong>Install Node.js</strong> - Ensure you have Node.js installed on your machine, as Angular requires it for its development server and build tools.</li>
        <li><strong>Install Angular CLI</strong> - Use the command <code>npm install -g @angular/cli</code> to install the Angular Command Line Interface (CLI), which helps in creating and managing Angular projects.</li>
        <li><strong>Create a New Angular Project</strong> - Run <code>ng new my-angular-app</code> to create a new project. This will generate the necessary files and folder structure.</li>
        <li><strong>Serve the Application</strong> - Navigate to your project folder and run <code>ng serve</code>. This will start a development server and you can view your app at <code>http://localhost:4200</code>.</li>
      </ul>
    </section>

    <section class="section">
      <h2>Useful Links</h2>
      <div class="links-container">
        <a href="https://angular.io" class="link-item" target="_blank">
          <i class="fab fa-angular"></i> Angular Official Site
        </a>
        <a href="https://github.com/angular/angular" class="link-item" target="_blank">
          <i class="fab fa-github"></i> Angular GitHub Repository
        </a>
      </div>
    </section>
  </div>
    `
  },
  {
    id: 2,
    imgUrl: 'assets/bg.jpg',

    header: 'Staying Fit while programming',
    preview: [
      'Tips and tricks for maintaining a balanced lifestyle.',
      'The importance of mental and physical well-being.',
      'The best practices I discovered.'
    ],
    categoryIdentifier: 'sport',
    htmlContent: `
        <style>
        .empty-alert {
        box-shadow: 0px 4px 0px 4px rgba(0, 0, 0, 40);
            font-family: "Arial";
                font-weight: bold;
         line-height: 1.5;
          font-size: 2rem;
            text-align: center;
            color: #0e0404;
  margin-top: 20%;
  padding: 4rem;
  align-self: center;
  border-radius: 2rem;
  background: rgb(255, 193, 13);
  border: 2px solid black
  width: 40vw;
}

.empty-alert p{
  font-size: 1rem;
}

</style>
<div  style="height: 100vh" >

        <div class="empty-alert">Ooops ... <p>Seems like author have not created content yet :(</p></div>
</div>
    `
  },
  {
    id: 3,
    imgUrl: 'assets/sec.jpg',

    header: 'Hard way learning Spring Security',
    preview: [
      'My fails while learning Spring Security',
      'The better approach I found.'
    ],
    categoryIdentifier: 'java',
    htmlContent: `
        <style>
        .empty-alert {
        box-shadow: 0px 4px 0px 4px rgba(0, 0, 0, 40);
            font-family: "Arial";
                font-weight: bold;
         line-height: 1.5;
          font-size: 2rem;
            text-align: center;
            color: #0e0404;
  margin-top: 20%;
  padding: 4rem;
  align-self: center;
  border-radius: 2rem;
  background: rgb(255, 193, 13);
  border: 2px solid black
  width: 40vw;
}

.empty-alert p{
  font-size: 1rem;
}

</style>
<div  style="height: 100vh" >

        <div class="empty-alert">Ooops ... <p>Seems like author have not created content yet :(</p></div>
</div>    `
  }

];


export const MOCK_CATEGORIES: ArticleCategory[] = [
  {
    name: 'Java',
    identifier: 'java',
    imgUrl: 'assets/java-svgrepo-com.svg'
  },
  {
    name: 'Angular',
    identifier: 'angular',
    imgUrl: 'assets/angular-svgrepo-com.svg'
  },
  {
    name: 'Mental',
    identifier: 'mental',
    imgUrl: 'assets/brain-svgrepo-com.svg'
  },
  {
    name: 'Sport',
    identifier: 'sport',
    imgUrl: 'assets/woman-lifting-weights-svgrepo-com (1).svg'
  }
  , {
    name: 'All other',
    identifier: 'all',
    imgUrl: 'assets/telescope-svgrepo-com.svg  '
  },


];


export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    imgUrl: 'assets/online-auction.png',
    type: ProjectType.COMPLETE,
    title: "Auction Ocean",
    agenda: "Full stack realtime application with Stripe integration provide users with modern auction service...",
    htmlContent: `

<div class="project-presentation">
  <header class="project-header">
    <h1 class="project-title">Auction Ocean</h1>
    <h5 class="project-subtitle">The Ultimate Real-Time Auction Platform</h5>
  </header>

  <hr class="divider">

  <section class="project-description">
    <p>
      <strong>Auction Ocean</strong> is a cutting-edge web application designed to transform the online auction experience. Leveraging the power of <span class="tech-highlight">Java Spring Boot</span> for robust back-end services, <span class="tech-highlight">Angular</span> for a dynamic and responsive front-end, and <span class="tech-highlight">WebSocket</span> for real-time updates, Auction Ocean ensures a seamless and interactive bidding process. Integrated with <span class="tech-highlight">Stripe</span> for secure and efficient transactions, our platform provides an intuitive user experience and reliable performance.
    </p>
  </section>

  <section class="technology-stack">
    <h2>Technology Stack</h2>
    <div class="tech-icons">
      <div class="tech-item">
        <i class="fab fa-java"></i>
        <p>Spring Boot</p>
      </div>
      <div class="tech-item">
        <i class="fab fa-angular"></i>
        <p>Angular</p>
      </div>
      <div class="tech-item">
        <i class="fas fa-plug"></i>
        <p>WebSocket</p>
      </div>
      <div class="tech-item">
        <i class="fab fa-stripe"></i>
        <p>Stripe</p>
      </div>
      <div class="tech-item">
    <i class="fas fa-comments"></i>
    <p>ArtemisMQ</p>
  </div>
   <div class="tech-item">
    <i class="fas fa-database"></i>
    <p>Hibernate</p>
  </div>
    </div>
  </section>
  <div class="section">
    <h2>Impressions</h2>
    <hr style="width: 100%">
    <section>
    <p style="text-align: justify">Suspendisse semper vulputate nihil unum ex recteque necessitatibus ancillae laudem decore malorum erat te malorum reprehendunt definiebas dicam ad possim dolore contentiones expetenda sumo accommodare vocent intellegebat civibus necessitatibus porro movet meliore mi luctus utamur electram primis habitasse doming suspendisse ignota maiorum feugait interesset saperet adhuc congue eros perpetua constituto felis duis pericula electram instructior singulis fastidii scripta quot necessitatibus fames ornatus an dicant sapien simul felis fuisset venenatis maecenas</p>
</section>
 </section>
  <div class="section">
    <h6>Links</h6>
    <hr style="width: 50%">
    <section>
</section>
</dic>




<div class="links-container">
  <a href="https://github.com" class="link-item" target="_blank">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://docs.google.com/document/d/1gnvc5qzrx_riQWu3UXjhT1_4F6pX3OYs981UAc3YSn0/edit?usp=sharing" class="link-item" target="_blank">
    <i class="fab fa-google-drive"></i> Google Drive
  </a>
</div>

</div>
</div>
</div>



<style>

.section{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}
/* Base styles */
/* Container for the links */
.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between links */
  max-width: 300px; /* Limit the width if needed */
  margin: 0 auto; /* Center the container */
}

/* Style for each link item */
.link-item {
  display: flex;
  align-items: center;
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Default text color */
  background: rgba(249,249,249,0.36); /* Background color */
  border: 1px solid #ddd; /* Border around the link */
  border-radius: 5px; /* Rounded corners */
  padding: 0.75rem 1rem; /* Padding inside the link */
  transition: background 0.3s, color 0.3s; /* Smooth transition for hover effects */
}

/* Icon styling */
.link-item i {
  margin-right: 0.5rem; /* Space between icon and text */
  font-size: 1.2rem; /* Size of the icon */
  color: #002aff; /* Icon color */
}

/* Hover effect */
.link-item:hover {
  background: rgba(0,255,89,0.64); /* Background color on hover */
  color: #fff; /* Text color on hover */
  border-color: #ffff00; /* Border color on hover */
}

/* Focus effect for accessibility */
/*.link-item:focus {*/
/*  outline: 2px solid #007BFF; !* Outline for focus *!*/
/*  outline-offset: 2px; !* Offset for better visibility *!*/
/*}*/
.technology-stack{
box-shadow: 0px 3px 3px 2px #1c1b1a;
padding: 2rem;
display: flex;
flex-direction: column;
border-radius: 1rem;
}


.project-presentation {

  /*max-width: 900px;*/
  /*background: rgba(81,175,185,0.8);*/
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
}

/* Header styles */
.project-header {
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 2.5rem;
  color: rgb(189,201,208);
  margin: 0;
}

.project-subtitle {
  font-size: 1.3rem;
  color: rgba(133,246,218,0.92);
  margin: 0.5rem 0 1.5rem 0;
}

.divider {
  margin: 1.5rem 0;
  border: none;
  height: 2px;
  background-color: rgb(248,248,248);
}

/* Description styles */
.project-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(226,227,218,0.9);
  text-align: justify;
}

.tech-highlight {
  color: #1dff74;
  font-weight: bold;
}

/* Technology stack styles */
.technology-stack h2 {
  font-size: 1.8rem;
  color: #70c322;
  margin-bottom: 1rem;
}

.tech-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tech-item i {
  font-size: 2rem;
  color: #1dff74;
  margin-bottom: 0.5rem;
}

.tech-item p {
  margin: 0;
  font-size: 1rem;
  color: #cce8e7;
}

</style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
`

  },
  {
    id: 2,
    imgUrl: 'assets/java-svgrepo-com.svg',
    type: ProjectType.DEMO,
    title: "Spring Security with Cookies",
    agenda: "Create a demo of an AI-powered chatbot capable of handling customer inquiries and providing real-time support.",
    htmlContent: "<h1>AI-Powered Chatbot</h1><p>This demo showcases an AI chatbot that can assist customers with common queries. It uses natural language processing to understand and respond to user input, aiming to improve customer service efficiency.</p>"
  },

  {
    id: 4,

    imgUrl: 'assets/beer.png',

    type: ProjectType.COMPLETE,
    title: "Beer Heavens",
    agenda: "User friendly E-commerce solution for local breweries with delivery service.",
    htmlContent: `
    <div style="display: flex; flex-direction: column; height: 100%; padding-bottom: 10rem">

        <h1>Beer Heavens</h1>
        <div style="padding: 3rem; box-shadow: 0  2rem 2rem 2rem #1c1b1a; border-radius: 2rem; background: #7e1a84">
             <h4>Ooops...</h4>
             <p>Seems like project is <strong>still developing</strong></p>
        </div>
    </div> `

  }
];

