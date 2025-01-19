import { NextResponse } from "next/server";

const posts = [
    {
      title: 'Lorem Ipsum',
      slug: 'lorem-ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      title: 'Understanding JavaScript',
      slug: 'understanding-javascript',
      content:
        'JavaScript is a versatile programming language used for building dynamic web applications.',
    },
    {
      title: 'The Basics of CSS',
      slug: 'basics-of-css',
      content:
        'CSS is used to style web pages. It allows you to apply colors, layouts, and animations to HTML elements.',
    },
    {
      title: 'Learning React',
      slug: 'learning-react',
      content:
        'React is a JavaScript library for building user interfaces, developed by Facebook.',
    },
    {
      title: 'Introduction to Node.js',
      slug: 'introduction-to-nodejs',
      content:
        'Node.js is a runtime environment that lets you run JavaScript on the server side.',
    },
    {
      title: 'Web Development Trends 2025',
      slug: 'web-development-trends-2025',
      content:
        'Web development is evolving rapidly with trends like AI integration, JAMstack, and WebAssembly.',
    },
    {
      title: 'What is Git?',
      slug: 'what-is-git',
      content:
        'Git is a version control system that helps track changes in your codebase and collaborate with others.',
    },
    {
      title: 'Mastering Flexbox',
      slug: 'mastering-flexbox',
      content:
        'Flexbox is a powerful layout model in CSS, ideal for creating responsive designs.',
    },
    {
      title: 'SEO Best Practices',
      slug: 'seo-best-practices',
      content:
        'Optimizing your website for search engines involves proper use of keywords, metadata, and links.',
    },
    {
      title: 'Introduction to TypeScript',
      slug: 'introduction-to-typescript',
      content:
        'TypeScript is a superset of JavaScript that adds optional static typing to your code.',
    },
    {
      title: 'Debugging in JavaScript',
      slug: 'debugging-in-javascript',
      content:
        'Effective debugging involves using tools like Chrome DevTools and techniques like logging.',
    },
    {
      title: 'Responsive Web Design',
      slug: 'responsive-web-design',
      content:
        'Responsive design ensures your website looks great on all devices by using flexible layouts.',
    },
    {
      title: 'Understanding HTTP',
      slug: 'understanding-http',
      content:
        'HTTP is the protocol used for transferring web pages and other resources between clients and servers.',
    },
    {
      title: 'Benefits of Using Docker',
      slug: 'benefits-of-using-docker',
      content:
        'Docker enables developers to containerize applications, ensuring consistency across environments.',
    },
    {
      title: 'Introduction to REST APIs',
      slug: 'introduction-to-rest-apis',
      content:
        'REST APIs allow systems to communicate with each other over the web using standard HTTP methods.',
    },
    {
      title: 'Building Single Page Applications',
      slug: 'building-spas',
      content:
        'Single Page Applications (SPAs) provide a smooth user experience by dynamically updating content.',
    },
    {
      title: 'Web Accessibility Guidelines',
      slug: 'web-accessibility-guidelines',
      content:
        'Accessibility ensures that web content is usable by everyone, including people with disabilities.',
    },
    {
      title: 'Data Structures in JavaScript',
      slug: 'data-structures-in-javascript',
      content:
        'Understanding data structures like arrays, objects, and maps is crucial for efficient coding in JavaScript.',
    },
    {
      title: 'Functional Programming Basics',
      slug: 'functional-programming-basics',
      content:
        'Functional programming is a paradigm that emphasizes immutability and pure functions.',
    },
    {
      title: 'Exploring Progressive Web Apps',
      slug: 'exploring-progressive-web-apps',
      content:
        'Progressive Web Apps (PWAs) combine the best of web and mobile apps, offering offline capabilities.',
    },
    {
      title: 'Asynchronous JavaScript',
      slug: 'asynchronous-javascript',
      content:
        'Asynchronous programming in JavaScript involves callbacks, promises, and async/await.',
    },
  ];

export async function GET(){
    return NextResponse.json(posts);
}