import {Article, ArticleCategory, Project, ProjectType} from "./interfaces/interfaces";

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    imgUrl:'assets/bg.jpg',
    header: 'The Future of Technology',
    preview: [
      'Exploring the trends that will shape the next decade.',
      'A deep dive into AI, quantum computing, and more.'
    ],
    categoryIdentifier: 'technology',
    htmlContent: `
<h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p><h2 style="font-size: 2rem; color: #4A90E2; text-align: center; margin-bottom: 1.5rem; font-weight: bold;">
  The Future of Technology
</h2>

<p style="font-size: 1.1rem; color: #4CAF50; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
  The world of technology is rapidly evolving, with new trends and innovations shaping the way we live and work. In this article, we explore the key areas to watch in the coming years.
</p>

<h3 style="font-size: 1.5rem; color: #D0021B; margin-bottom: 1rem; border-bottom: 2px solid #D0021B; padding-bottom: 0.5rem;">
  Artificial Intelligence
</h3>

<p style="font-size: 1rem; color: #56ACE0; line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
  AI is already transforming industries, from healthcare to finance. As algorithms become more sophisticated, we can expect even more breakthroughs in this field.
</p>

<h3 style="font-size: 1.5rem; color: #8B572A; margin-bottom: 1rem; border-bottom: 2px solid #8B572A; padding-bottom: 0.5rem;">
  Quantum Computing
</h3>

<p style="font-size: 1rem; color: #555; line-height: 1.8; text-align: justify;">
  Quantum computing holds the promise of solving complex problems that are beyond the reach of classical computers. This technology could revolutionize industries such as cryptography and material science.
</p>
    `
  },
  {
    id: 2,
    imgUrl:'assets/bg.jpg',

    header: 'A Guide to Healthy Living',
    preview: [
      'Tips and tricks for maintaining a balanced lifestyle.',
      'The importance of mental and physical well-being.'
    ],
    categoryIdentifier: 'health',
    htmlContent: `
      <h2>A Guide to Healthy Living</h2>
      <p>Maintaining a healthy lifestyle is crucial for overall well-being. This guide covers various aspects of health, from diet and exercise to mental health.</p>
      <h3>Nutrition</h3>
      <p>A balanced diet is the foundation of good health. Ensure you're getting the right nutrients by incorporating a variety of fruits, vegetables, and whole grains into your meals.</p>
      <h3>Exercise</h3>
      <p>Regular physical activity is essential for maintaining a healthy body and mind. Aim for at least 30 minutes of exercise each day to stay fit.</p>
    `
  },
  {
    id: 3,
    imgUrl:'assets/bg.jpg',

    header: 'The Beauty of Minimalism',
    preview: [
      'How simplifying your life can lead to greater happiness.',
      'Decluttering tips and minimalist living strategies.'
    ],
    categoryIdentifier: 'java',
    htmlContent: `
      <h2>The Beauty of Minimalism</h2>
      <p>Minimalism is more than just a design trend; it's a way of life. By focusing on what truly matters, you can reduce stress and find greater joy in the everyday.</p>
      <h3>Decluttering Your Space</h3>
      <p>Start by getting rid of items you no longer need. This will not only create a more organized space but also free your mind from unnecessary distractions.</p>
      <h3>Embracing Simplicity</h3>
      <p>Simplify your daily routine by prioritizing tasks and eliminating distractions. This will help you focus on what's truly important and lead to a more fulfilling life.</p>
    `
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
    imgUrl: 'assets/java-svgrepo-com.svg',
    type: ProjectType.COMPLETE,
    title: "E-Commerce Platform",
    agenda: "Develop a fully-functional e-commerce platform with payment gateway integration and a user-friendly interface.",
    htmlContent: "<h1>E-Commerce Platform</h1><p>This project involves building a complete online shopping platform. Features include a product catalog, shopping cart, checkout process, and payment gateway integration. The goal is to create a seamless shopping experience for users.</p>"
  },
  {
    id: 2,
    imgUrl: 'assets/java-svgrepo-com.svg',
    type: ProjectType.DEMO,
    title: "AI-Powered Chatbot",
    agenda: "Create a demo of an AI-powered chatbot capable of handling customer inquiries and providing real-time support.",
    htmlContent: "<h1>AI-Powered Chatbot</h1><p>This demo showcases an AI chatbot that can assist customers with common queries. It uses natural language processing to understand and respond to user input, aiming to improve customer service efficiency.</p>"
  },
  {
    id: 3,
    imgUrl: 'assets/java-svgrepo-com.svg',

    type: ProjectType.ALGORITHMS,
    title: "Sorting Algorithms Visualization",
    agenda: "Develop visualizations for various sorting algorithms to enhance understanding of their processes.",
    htmlContent: "<h1>Sorting Algorithms Visualization</h1><p>This project focuses on creating visual representations of different sorting algorithms, such as Quick Sort, Merge Sort, and Bubble Sort. The visualizations help in understanding how these algorithms work step by step.</p>"
  },
  {
    id: 4,

    imgUrl: 'assets/java-svgrepo-com.svg',

    type: ProjectType.COMPLETE,
    title: "CRM System Development",
    agenda: "Build a complete Customer Relationship Management (CRM) system to streamline sales and customer service operations.",
    htmlContent: "<h1>CRM System Development</h1><p>The CRM system will include modules for managing customer data, tracking interactions, and automating workflows. The objective is to improve customer relationships and boost sales efficiency.</p>"
  },
  {
    id: 5,

    imgUrl: 'assets/java-svgrepo-com.svg',

    type: ProjectType.DEMO,
    title: "Augmented Reality App",
    agenda: "Create a demo of an augmented reality app that enhances real-world environments with digital overlays.",
    htmlContent: "<h1>Augmented Reality App</h1><p>This demo project showcases an augmented reality (AR) application that allows users to interact with digital objects overlaid on their real-world environment. The app is designed to demonstrate the potential of AR in various industries.</p>"
  },
  {
    id: 6,

    imgUrl: 'assets/java-svgrepo-com.svg',

    type: ProjectType.ALGORITHMS,
    title: "Pathfinding Algorithms",
    agenda: "Implement and compare different pathfinding algorithms, including A* and Dijkstra’s algorithm.",
    htmlContent: "<h1>Pathfinding Algorithms</h1><p>The project involves implementing various pathfinding algorithms to solve shortest path problems. It includes visualizations that compare the efficiency of A*, Dijkstra’s, and other algorithms in different scenarios.</p>"
  }
];

