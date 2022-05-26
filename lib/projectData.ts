const projectData = [
  {
    id: 'traductora',
    name: 'Traductora',
    desc: 'A full-stack speech-to-speech translator application.',
    appURL: 'https://traductora.herokuapp.com/',
    repoURL: 'https://github.com/comatosino/Traductora',
    imgsrc: '/images/traductora-demo.gif',
    features: [
      'Speak in one language and hear its translation in another!',
      'Utilizes JSON Web Tokens (JWTs) for authentication and authorization.',
      'Custom React hooks interface with the browser Web Speech API Speech-to-Text (SpeechRecognition) and Text-to-Speech (SpeechSynthesis) interfaces.',
    ],
    tech: ['react', 'node', 'express', 'mongodb', 'redux', 'mui'],
    discussion: [
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    ],
  },
  {
    id: 'console-log',
    name: 'Console Log',
    desc: 'A hub for players to store walkthroughs for their favorite video games!',
    appURL: 'https://sar-console-log.herokuapp.com/',
    repoURL: 'https://github.com/comatosino/Console-Log',
    imgsrc: '/images/console-log-demo.gif',
    features: [
      'Create a user profile and start saving text or links to your favorite walkthroughs.',
      'View, rate, and favorite walkthroughs posted by other users!',
      'Search for games using voice commands!',
      "Won “Best Presentation” of all final project submissions for University of Washington's spring full-stack web development certificate program.",
    ],
    tech: ['react', 'node', 'express', 'mongodb', 'sequelize', 'tailwind'],
    role: [
      'Implemented voice search functionality',
      'Designed database and built RESTful API',
      'Managed GitHub repository, led code reviews, and approved pull requests',
    ],
    discussion: [
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    ],
  },
  {
    id: 'vedomý',
    name: 'Vedomý',
    desc: 'Space for self-reflection to record thoughts and daily health habits.',
    appURL: 'https://gushihiro.github.io/Vedomy',
    repoURL: 'https://github.com/Gushihiro/Vedomy',
    imgsrc: '/images/vedomy-demo.gif',
    features: [
      'Reflect on your exercise, diet, and mood. Record your thoughts.',
      'Use the box-breathing module to return your breathing to its normal rhythm.',
      'Check out daily yoga, sleep, and recepie suggestions.',
      'Won "People\'s Choice" award for University of Washington\'s spring full-stack web development certificate program',
    ],
    tech: ['javascript', 'html', 'css', 'materialize'],
    role: [
      'Interfaced with 3rd-Party APIs to fetch data, created and populated recipe card',
      'Led code reviews and approved pull requests',
    ],
    discussion: [
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    ],
  },
  {
    id: 'pantrimonium',
    name: 'Pantrimonium',
    desc: 'Manage food inventory, monitor expiration dates, and create a shopping list.',
    appURL: 'https://pantrimonium.herokuapp.com/',
    repoURL: 'https://github.com/comatosino/Pantrimonium',
    imgsrc: '/images/pantrimonium-demo.gif',
    features: [
      'Create a user profile to get started!',
      'Add, edit, and remove tiems from your fridge, freezer, or pantry!',
      'Generate a shopping list from items low in quantity.',
      'Be notified of expired items.',
    ],
    tech: ['node', 'express', 'mysql', 'bootstrap', 'handlebars'],
    role: [
      'Fulfilled project manager and GitHub repository master roles',
      'Implemented client-side CRUD functionality',
      'Built server framework and added e-mail component with Nodemailer',
    ],
    discussion: [
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    ],
  },
  {
    id: 'dad-jokes',
    name: 'Bearded Dad Jokes',
    desc: 'Combine the gravitas of facial hair with the dry hilarity of fatherly humor.',
    appURL: 'https://comatosino.github.io/dad-jokes/',
    repoURL: 'https://github.com/comatosino/dad-jokes',
    imgsrc: '/images/dad-jokes-demo.gif',
    features: [
      'Mix and match rugged whiskers with wholesome punchlines!',
      'Grab an individual joke, beard, or both!',
    ],
    tech: ['react', 'node', 'mui'],
    discussion: [
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      'Dadicated to Justin',
    ],
  },
];

export default projectData;
