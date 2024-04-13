import rps from './../../images/rps.png';
import weather from './../../images/weather.png';
import todo from './../../images/todo.png';
import expense from './../../images/expense.png';
import cart from './../../images/cart.png';
import nba from './../../images/nba.png';
import mp3 from './../../images/mp3.png';

export const projectsData = [
    {
      id: '1',
      category: 'web-basics',
      name: 'rock-paper-scissors',
      title: '001 - Rock Paper Scissors',
      menu: '',
      aim1: 'Javascript basics',
      aim2: 'Use conditional statements, functions, variables, and event listeners',
      aim3: 'Practice problem-solving and debugging skills',
      process1: 'Research game logic',
      process2: 'Handle user input.',
      process3: 'Generate computer choice.',
      process4: 'Determine winner',
      process5: 'Implement user interface',
      code: 'https://github.com/andrews-work/rps',
      image: rps,
      version: 'Complete',
    },

    {
      id: '2',
      category: 'web-basics',
      name: 'weather',
      title: '002 - Weather API',
      menu: '',
      aim1: 'Retrieve data from an API',
      aim2: 'Learn some basics of react',
      aim3: 'Improve problem-solving',
      process1: 'API requests based on user input',
      process2: 'Use switch/case to sort data',
      process3: 'Create function to determine day of the week',
      process4: 'Simple user interface',
      code: 'https://github.com/andrews-work/weather2',
      image: weather,
      version: 'Complete',
    },

    {
      id: '3',
      category: 'web-basics',
      name: 'todo',
      title: '003 - Todo List',
      menu: '',
      aim1: 'Create a functional expense tracker',
      aim2: 'Improve data skills',
      aim3: 'Learn front-end technologies',
      process1: 'Ensure accurate data input.',
      process2: 'Manage expenses with JavaScript.',
      process3: 'Store data locally',
      process4: 'Add categorizing and filtering.',
      code: 'https://github.com/andrews-work/todo',
      image: todo,
      version: 'Complete',
    },

    {
      id: '4',
      category: 'web-basics',
      name: 'expense',
      title: '004 - Expense Tracker',
      menu: '',
      aim1: 'Javascript basics',
      aim2: 'Use conditional statements, functions, variables, and event listeners.',
      aim3: 'Practice problem-solving and debugging skills.',
      process1: 'Design user interface with input fields.',
      process2: 'Capture and validate user input.',
      process3: 'Develop functions to calculate, categorize, and display expenses.',
      process4: 'Add interactivity with event listeners.',   
      code: 'https://github.com/andrews-work/expense-tracker',
      image: expense,
      version: 'Complete',
    },

    {
      id: '5',
      category: 'web-basics',
      name: 'cart',
      title: '005 - Shopping Cart',
      menu: '',
      aim1: 'Create an eCommerce site using React and the Stripe API.',
      aim2: 'Develop a functional shopping cart with state management.',
      aim3: 'Provide users a seamless experience to browse and buy products.',
      process1: 'Design user-friendly product display and cart interfaces.',
      process2: 'Utilize useState and useContext for cart state.',
      process3: 'Integrate Stripe API for secure payment processing.',
      process4: 'Implement smooth product selection, addition, and checkout.',
      code: 'https://github.com/andrews-work/ecommerce-cart',
      image: cart,
      version: 'Complete',
    },

    {
      id: '6',
      category: 'python',
      name: 'nba',
      title: '006 - NBA Player Analysis',
      menu: '',
      aim1: 'Learn how to import and clean data',
      aim2: 'Rank players based on salary vs performance',
      aim3: 'Visualse the data',
      process1: 'Import and clean data.',
      process2: 'Calculate average stats by position.',
      process3: 'Normalize metrics using z-scores.',
      process4: 'Calculate overall performance score (z).',       
      code: 'https://github.com/andrews-work/nba',
      image: nba,
      version: 'Complete',
    },
    
    {
      id: '7',
      category: 'python',
      name: 'trade',
      title: '008 - Trading Bot',
      menu: '',
      aim1: 'Figure out the mathematics to day trade',
      aim2: 'Write a list of technologies needed',
      aim3: 'Start by trading one stock',
      aim4: 'Buy low sell high',
      process1: '',
      process2: '',
      process3: '',
      process4: '',
      code: 'Will work on this once i get a job',
      image: '/path/to/todo-image.jpg',
      version: 'Ideation',
    },
    
    {
      id: '8',
      category: 'java',
      name: 'mp3',
      title: '007 - MP3 Player',
      menu: '',
      aim1: 'Create itunes/spotify clone',
      aim2: 'sort songs by record label/release month',
      aim3: 'search for song by country',
      aim4: 'Insert metadata and finalise design',
      process1: 'Use JavaFx for custom panels',
      process2: 'Switch between views',
      process3: 'display songs imported from database',
      process4: 'add complex ui to all the views',
      code: 'https://github.com/andrews-work/mp3',
      image: mp3,
      version: 'Under Construction',
    },
  ];
  