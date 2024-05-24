import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  roles=[
    {company:'Accenture', role:'Frontend Developer',salary:'9LPA',location:'Bangalore',experience:'3 years',skills:'HTML, CSS, JavaScript, React',description:'We are seeking a proficient Frontend Developer with experience in HTML, CSS, JavaScript, and React to work on user-facing features.'},
    {company:'Cognizant', role:'Backend Developer',salary:'10LPA',location:'Chennai',experience:'4 years',skills:'Node.js, Express, MongoDB, RESTful APIs',description:'We are looking for a skilled Backend Developer with experience in Node.js, Express, MongoDB, and RESTful APIs to work on server-side logic.'},
    {company:'Infosys', role:'Full Stack Developer',salary:'12LPA',location:'Pune',experience:'5 years',skills:'Java, Spring, Hibernate, React',description:'We are seeking a proficient Full Stack Developer with experience in Java, Spring, Hibernate, and React to work on end-to-end web applications.'},
    {company:'TCS', role:'Cloud Engineer',salary:'15LPA',location:'Hyderabad',experience:'6 years',skills:'AWS, Azure, Google Cloud, Kubernetes',description:'We are looking for an experienced Cloud Engineer with expertise in AWS, Azure, Google Cloud, and Kubernetes to manage and deploy our cloud infrastructure.'},
    {company:'Wipro', role:'Data Engineer',salary:'14LPA',location:'Bangalore',experience:'5 years',skills:'Python, SQL, Hadoop, Spark',description:'We are seeking a skilled Data Engineer with experience in Python, SQL, Hadoop, and Spark to build and maintain our data pipelines.'},
    {company:'HCL Technologies', role:'Cybersecurity Analyst',salary:'12LPA',location:'Chennai',experience:'4 years',skills:'Networking, Linux, Python, Wireshark',description:'We are looking for an experienced Cybersecurity Analyst with expertise in Networking, Linux, Python, and Wireshark to protect our digital assets.'},
    {company:'Capgemini', role:'Machine Learning Engineer',salary:'16LPA',location:'Pune',experience:'6 years',skills:'Python, TensorFlow, PyTorch, Scikit-learn',description:'We are seeking a skilled Machine Learning Engineer with experience in Python, TensorFlow, PyTorch, and Scikit-learn to develop and deploy machine learning models.'},
    {company:'Tech Mahindra', role:'Blockchain Developer',salary:'15LPA',location:'Mumbai',experience:'5 years',skills:'Solidity, Ethereum, Smart Contracts, Web3.js',description:'We are looking for an experienced Blockchain Developer with expertise in Solidity, Ethereum, Smart Contracts, and Web3.js to build decentralized applications.'},
    {company:'Capgemini', role:'DevOps Engineer',salary:'14LPA',location:'Bangalore',experience:'4 years',skills:'Jenkins, Docker, Kubernetes, Ansible',description:'We are seeking a proficient DevOps Engineer with experience in Jenkins, Docker, Kubernetes, and Ansible to automate software delivery pipelines.'},
    {company:'Cognizant', role:'Database Administrator',salary:'12LPA',location:'Pune',experience:'5 years',skills:'SQL Server, MySQL, Oracle, PostgreSQL',description:'We are looking for a skilled Database Administrator with expertise in SQL Server, MySQL, Oracle, and PostgreSQL to manage and optimize our databases.'},
    {company:'Wipro', role:'QA Engineer',salary:'10LPA',location:'Hyderabad',experience:'4 years',skills:'Selenium, Appium, JMeter, TestNG',description:'We are seeking an experienced QA Engineer with expertise in Selenium, Appium, JMeter, and TestNG to ensure the quality of our software applications.'},
    {company:'Intel', role:'Frontend Developer',salary:'9LPA',location:'Chennai',experience:'3 years',skills:'HTML, CSS, JavaScript, React',description:'We are looking for a proficient Frontend Developer with experience in HTML, CSS, JavaScript, and React to work on user-facing features.'},
    {company:'IBM', role:'Backend Developer',salary:'10LPA',location:'Bangalore',experience:'4 years',skills:'Node.js, Express, MongoDB, RESTful APIs',description:'We are seeking a skilled Backend Developer with experience in Node.js, Express, MongoDB, and RESTful APIs to work on server-side logic.'},
    {company:'Accenture', role:'Full Stack Developer',salary:'13LPA',location:'Pune',experience:'5 years',skills:'Java, Spring, Hibernate, React',description:'We are looking for a proficient Full Stack Developer with experience in Java, Spring, Hibernate, and React to work on end-to-end web applications.'},
    {company:'Infosys', role:'Cloud Engineer',salary:'16LPA',location:'Hyderabad',experience:'6 years',skills:'AWS, Azure, Google Cloud, Kubernetes',description:'We are seeking an experienced Cloud Engineer with expertise in AWS, Azure, Google Cloud, and Kubernetes to manage and deploy our cloud infrastructure.'},
    {company:'HCL Technologies', role:'Data Engineer',salary:'15LPA',location:'Bangalore',experience:'5 years',skills:'Python, SQL, Hadoop, Spark',description:'We are looking for a skilled Data Engineer with experience in Python, SQL, Hadoop, and Spark to build and maintain our data pipelines.'},
    {company:'Intel', role:'Cybersecurity Analyst',salary:'14LPA',location:'Chennai',experience:'4 years',skills:'Networking, Linux, Python, Wireshark',description:'We are seeking an experienced Cybersecurity Analyst with expertise in Networking, Linux, Python, and Wireshark to protect our digital assets.'},
    {company:'HCL Technologies', role:'Machine Learning Engineer',salary:'18LPA',location:'Pune',experience:'6 years',skills:'Python, TensorFlow, PyTorch, Scikit-learn',description:'We are looking for a skilled Machine Learning Engineer with experience in Python, TensorFlow, PyTorch, and Scikit-learn to develop and deploy machine learning models.'},
    {company:'IBM', role:'Blockchain Developer',salary:'17LPA',location:'Bangalore',experience:'5 years',skills:'Solidity, Ethereum, Smart Contracts, Web3.js',description:'We are seeking an experienced Blockchain Developer with expertise in Solidity, Ethereum, Smart Contracts, and Web3.js to build decentralized applications.'},
    {company:'Accenture', role:'DevOps Engineer',salary:'16LPA',location:'Hyderabad',experience:'4 years',skills:'Jenkins, Docker, Kubernetes, Ansible',description:'We are looking for a proficient DevOps Engineer with experience in Jenkins, Docker, Kubernetes, and Ansible to automate software delivery pipelines.'},
    {company:'Cognizant', role:'Database Administrator',salary:'14LPA',location:'Pune',experience:'5 years',skills:'SQL Server, MySQL, Oracle, PostgreSQL',description:'We are seeking a skilled Database Administrator with expertise in SQL Server, MySQL, Oracle, and PostgreSQL to manage and optimize our databases.'},
    {company:'Infosys', role:'QA Engineer',salary:'12LPA',location:'Chennai',experience:'4 years',skills:'Selenium, Appium, JMeter, TestNG',description:'We are looking for an experienced QA Engineer with expertise in Selenium, Appium, JMeter, and TestNG to ensure the quality of our software applications.'},
    {company:'Wipro', role:'Frontend Developer',salary:'9LPA',location:'Bangalore',experience:'3 years',skills:'HTML, CSS, JavaScript, React',description:'We are seeking a proficient Frontend Developer with experience in HTML, CSS, JavaScript, and React to work on user-facing features.'},
    {company:'HCL Technologies', role:'Backend Developer',salary:'10LPA',location:'Pune',experience:'4 years',skills:'Node.js, Express, MongoDB, RESTful APIs',description:'We are looking for a skilled Backend Developer with experience in Node.js, Express, MongoDB, and RESTful APIs to work on server-side logic.'},
    {company:'TCS', role:'Full Stack Developer',salary:'12LPA',location:'Hyderabad',experience:'5 years',skills:'Java, Spring, Hibernate, React',description:'We are seeking a proficient Full Stack Developer with experience in Java, Spring, Hibernate, and React to work on end-to-end web applications.'},
    {company:'Capgemini', role:'Cloud Engineer',salary:'15LPA',location:'Bangalore',experience:'6 years',skills:'AWS, Azure, Google Cloud, Kubernetes',description:'We are looking for an experienced Cloud Engineer with expertise in AWS, Azure, Google Cloud, and Kubernetes to manage and deploy our cloud infrastructure.'},
    {company:'Accenture', role:'Data Engineer',salary:'14LPA',location:'Pune',experience:'5 years',skills:'Python, SQL, Hadoop, Spark',description:'We are seeking a skilled Data Engineer with experience in Python, SQL, Hadoop, and Spark to build and maintain our data pipelines.'},
    {company:'Deloitte', role:'Cybersecurity Analyst',salary:'13LPA',location:'Chennai',experience:'4 years',skills:'Networking, Linux, Python, Wireshark',description:'We are looking for an experienced Cybersecurity Analyst with expertise in Networking, Linux, Python, and Wireshark to protect our digital assets.'},
    {company:'Capgemini', role:'Machine Learning Engineer',salary:'17LPA',location:'Bangalore',experience:'6 years',skills:'Python, TensorFlow, PyTorch, Scikit-learn',description:'We are seeking a skilled Machine Learning Engineer with experience in Python, TensorFlow, PyTorch, and Scikit-learn to develop and deploy machine learning models.'},
    {company:'IBM', role:'Blockchain Developer',salary:'16LPA',location:'Pune',experience:'5 years',skills:'Solidity, Ethereum, Smart Contracts, Web3.js',description:'We are looking for an experienced Blockchain Developer with expertise in Solidity, Ethereum, Smart Contracts, and Web3.js to build decentralized applications.'}
    ]
    // companies=[
    //   {company:'Cognizant' , path:'../assets/Cognizant.jpg'},
    //   {company:'Accenture' , path:'../assets/accenture.jpg'},
    //   {company:'Deloitte' , path:'../assets/Deloitte.jpg'},
    //   {company:'Infosys' , path:'../assets/infosys.jpeg'},
    //   {company:'TCS' , path:'../assets/TCS.jpeg'},
    //   {company:'Wipro' , path:'../assets/wipro.jpeg'},
    //   {company:'Capgemini' , path:'../assets/Capgemini.jpg'},
    //   {company:'Intel' , path:'../assets/intel.jpg'},
    //   {company:'HCL Technologies' , path:'../assets/hcl.png'},
    //   {company:'IBM' , path:'../assets/ibm.png'},
    //   {company:'Tech Mahindra' , path:'../assets/techmahindra.png'}
    // ]

  symposiums = [
    { title: 'Paper presentation',
    dept:'CSE',
    date: '29 April 2024',
     location: 'Chennai',
     price:'Rs.550/-',
     description:' It covers computational-related subjects such as programming languages, algorithm analysis, software, device hardware & programme design'  },
    { title: 'Circuit Debugging',
    dept:'ECE',
    date: '30 May 2024',
     location: 'Kallakurichi',
     price:'Free',
     description:' The act of analyzing a circuit and detecting and correcting any errors is called circuit debugging. Circuit debugging helps get rid of problems associated with the circuit'  },
 
    { title: 'Connections',
    dept:'All',
    date: '28 April 2024',
     location: 'Villupuram',
     price:'Rs.100/-',
     description:' A connection game is a type of abstract strategy game in which players attempt to complete a specific type of connection with their pieces.' },
      { title: 'Technical Quiz',
    dept:'CSE,ECE',
    date: '25 June 2024',
     location: 'Nagapattinam',
     price:'Rs.150/-',
     description:' A technical quiz is a type of quiz that focuses on testing knowledge and understanding of technical subjects, technology and engineering fields.'  },
      { title: 'ECE Paper presentation',
      dept:'ECE',
      date: '20 May 2024',
       location: 'Hyderabad',
       price:'Rs.50/-',
       description:' It depends more or less on the way you approach the concepts and the way facts are brought to you. If you are just reading the facts and deriving them.' },
        { title: 'Artificial intelligence',
      dept:'AI',
      date: '28 April 2024',
       location: 'Avadi',
       price:'Free',
       description:' Artificial Intelligence is the ability for a computer to think, learn and simulate human mental processes, such as perceiving, reasoning, and learning.' },
        { title: 'Hackathon',
        dept:'CSE,AI,ECE',
        date: '02 June 2024',
         location: 'Bengalur',
         price:'Rs.255/-',
         description:' A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.'  },
          { title: 'Start Music',
        dept:'All',
        date: '01 May 2024',
         location: 'Chennai',
         price:'Free',
         description:' An art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color.' },
          { title: 'Mini project',
          dept:'MECH,ECE',
          date: '29 May 2024',
           location: 'Coimbatore',
           price:'Rs.100/-',
           description:" Participating in a mini-project allows you to gain a practical understanding of the project's topic rather than just acquiring knowledge on a theoretical level." },
 
  ]

  workshops=[
    { name : 'Cyber Forensics',
        description : 'This workshop is dedicated on Cyber Forensics. Computer Forensics is a detailed and scientific study, research and implementation of computer science subjects for the purpose of gathering digital evidence in cases of cyber crimes.',
        datetime : '15 May 2024  12:00 AM ',
        mode:'Offline',
        location: 'Bangalore',
        price: 'Rs.500/-'},
        { name : 'Photoshop',
        description : 'Adobe Photoshop is a graphic editing program developed and published by Adobe Systems Incorporated. Adobe Photoshop is a professional image editing software package that can be used by experts and novices alike.',
        datetime : '11 June 2024  11:00 AM ',
        mode:'Online',
        location: 'Google Meet',
        price: 'Free'},
        { name : 'IoT-Internet of Things',
        description : 'When we talk about an Internet of Thing, it’s not just putting RFID tags on some dumb thing is. It’s about embedding intelligence so things become smarter & do more than they were proposed to do the IoT is about to change it all over again!.',
        datetime : '15 July 2024  10:00 AM ',
        mode:'Offline',
        location: 'Chennai',
        price: 'Rs.200/-'},
        { name : 'ArduBotics',
        description : 'ArduBotics Robotics is a workshop on intelligent Autonomous , microcontroller based with multiple sensor robot. This workshop is dedicated to clear the basic concept of electronic & electrical components. ',
        datetime : '18 May 2024  12:00 PM ',
        mode:'Offline',
        location: 'Hyderabad',
        price: 'Rs.200/-'},
        { name : 'Digital Marketing',
        description : 'Digital marketing (also known as data-driven marketing) is an umbrella term for the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium.',
        datetime : '08 June 2024  10:00 AM ',
        mode:'Online',
        location: 'Google Meet',
        price: 'Free'},
        { name : 'Android Workshop',
        description : 'Android is a software stack for mobile devices that includes an operating system, middleware and key applications. The Android Open Source Project (AOSP) is tasked with the maintenance and further development of Android. ',
        datetime : '12 July 2024  10:00 AM ',
        mode:'Online',
        location: 'Google Meet',
        price: 'Rs.200/-'},
        { name : '3D Animation',
        description : 'This workshop is specially for who dream to work in an environment full of colour and imagination and their careers in a happening animation industry It also covers the 3D computer animation industry, Creation of materials & Texture maps.',
        datetime : '05 May 2024  10:00 AM ',
        mode:'Online',
        location: 'Google Meet',
        price: 'Rs.300/-'},
        { name : 'Flash & Film Designing',
        description : 'In just a few years Flash has become the premier Web animation tool. Much of what can be done with Flash can be done with JavaScript or more particularly Java. But what makes Flash ubiquitous is that it is both an authoring tool and a file format.',
        datetime : '17 June 2024  01:00 PM ',
        mode:'Offline',
        location: 'Trichy',
        price: 'Free'},
        { name : 'Aeromodelling & Aircraft design',
        description : 'This workshop to learn the technology behind making of aircrafts. It help and encourage the participants to solve real time problem involved in making of glider aircraft, be shown so that student will stimulate their theoretical knowledge in to practical.',
        datetime : '28 June 2024  10:00 AM ',
        mode:'Offline',
        location: 'Chennai',
        price: 'Rs.300/-'},
        { name : 'Crack The Interview',
        description : 'You have just been invited to an interview with your dream company. It does not matter where you went to school, the number of degrees you may hold, the experience After attending this workshop student will find out tips to tackle tricky interview.',
        datetime : '20 May 2024  10:00 AM ',
        mode:'Offline',
        location: 'Chennai',
        price: 'Free'},
    ]

  webinars = [
    {
      name : 'ARK Webinar - Ensuring Programme Sustainability',
      description : 'Welcome to our online event, where we will be discussing the importance of ensuring sustainability in programmes  making meaningful impact.',
      datetime : '08 May 2024  12:00 PM ',
      mode: 'Online',
      location: 'Google meet',
      mentor: 'Maximilian Muller',
      price: 'Rs.169/-'
    },
    
    
    {
      name : 'Webinar-Nurturing Lives Parenting',
      description : 'Our expert speaker will cover topics such as effective communication, basic brain science and fostering a healthy parent-child relationship.',
      datetime : '27 May 2024  5:30 PM ',
      mode: 'Online',
      location: 'Zoom',
      mentor: 'Joel Embiid',
      price: 'Free'
    },
    
    
    {
    name : 'Webinar - QuickBooks Online Introduction',
    description : 'Access our FREE online webinars to learn how to use QuickBooks Online. Learn how to process expenses, reconcile bank accounts, create invoices.',
    datetime : '23 April 2024  1:30 PM ',
    mode: 'Offline',
    location: 'Chennai',
    mentor: 'Anshul A Chauhan',
    price: 'Free'
  },
 
 
  {
  name : 'Embracing Diversity and Inclusion in Influencer Marketing',
  description : "The Four M's of influencer marketing—Make the influencers, Manage the impact, Monitor the relationships, and Measure the results",
  datetime : '27 April 2024  09:00 AM ',
  mode: 'Offline',
  location: 'Mumbai',
  mentor: 'Alireza Aliabadi',
  price: 'Free'
},


{
name : 'WEBINAR- Digitalization Supporting Sustainability',
description : 'Digital meets green: Learn to leverage tech for sustainability, enhance resource management, and drive change in our impactful webinar.',
datetime : '01 June 2024  3:30 PM ',
mode: 'Online',
location: 'Google meet',
mentor: 'Noel Temenna',
price: 'Rs.399/-'
},


{
name : 'Mapping Out Your Life Webinar-2024',
description : 'Join our webinar to gain valuable insights,good happenings and strategies for navigating the twists and turns of this crazy year (and beyond)!',
datetime : '29 April 2024  9:30 AM ',
mode: 'Offline',
location: 'Delhi',
mentor: 'Sandeep Kumar',
price: 'Free'
},


{
name : 'Webinar - QuickBooks Online - Common Transactions',
description : 'We will use simple examples to demonstrate how to manage basic business transactions such as invoicing, purchasing, importing, and reconciling bank transactions',
datetime : '05 May 2024  03:00 PM ',
mode: 'Offline',
location: 'Hyderabad',
mentor: 'Stephane Maarek',
price: 'Free'
},


{
  name : 'WorkCongress 2024 Rethinking Work - Virtual Webinar',
  description : 'Join us for an insightful and forward-thinking virtual summit, WorkCongress 2024, dedicated to Rethinking Work. Organized by the non-profit organization',
  datetime : '23 May 2024  1:30 PM ',
  mode: 'Offline',
  location: 'Bengalur',
  mentor: 'Rahul Gandhi',
  price: 'Free'  
},
  

{
    name : 'Gain Global Recognition Through CSR Accreditation',
    description : "Two Major Events in one! Join Webinar to Learn how to enhance your company's reputation on a global scale by obtaining CSR accreditation.",
    datetime : '20 April 2024  1:00 PM ',
    mode: 'Offline',
    location: 'Coimbatore',
    mentor: 'Sebestian Flores',
    price: 'Rs.499/-'
  },


    {
      name : 'PayOli - Solar Energy Webinar, Hurricane Preparedness',
      description : 'Keep your lights on during hurricanes! Join our webinar and learn how to enjoy peace of mind during power outages with Solar Energy.',
      datetime : '26 April 2024  12:00 PM ',
      mode: 'Offline',
      location: 'Chennai',
      mentor: 'Rajveer Singh',
      price: 'Free'
    },

    
      {
        name : 'Webinar- Building a Road to a Solid Financial Foundation',
        description : ' Join us online to learn valuable tips and strategies for securing your financial future. Our expert speakers will guide you through the steps to your financial foundation.',
        datetime : '13 May 2024  10:00 AM ',
        mode: 'Offline',
        location: 'Coimbatore',
        mentor: 'Simon Sez',
        price: 'Rs.199/-'
      },
       
        {
          name : 'CSMD Webinar-Mental Health-Taking Care of You',
          description : "Join us for a webinar on Mental Health with our Family Nurse Practitioner Erica Stephen!on Health. Let's talk about keeping our minds healthy!",
          datetime : '08 May 2024  2:00 PM ',
          mode: 'Online',
          location: 'Google meet',
          mentor: 'Dr. Soumiya Mudgal',
          price: 'Free'}
  ]

  culturals = [
    {
      name : 'SUNBURN Festival 2024-Mumbai',
      description : "The Sunburn Festival is an annual electronic dance music festival held in the seaside town of Vagator. Since its inception, Sunburn has grown to become one of Asia's largest music events.",
      datetime : '10 July 2024  06:00 PM',
      location: 'Mumbai',
      organizer: 'Rohit',
      price: 'Rs.14999/-'
    },
    
    
    {
      name : 'IABWR BHARATHAM 2024',
      description : 'India asia book of world record join hand with fyn events to give a 1330 BHARATHAM dancers in one stretch direct. BHARATHAM for a cause to make sound to this world, classic dance world wide connect.',
      datetime : '27 May 2024  5:30 PM ',
      location: 'Chennai',
      organizer: 'Kiruba',
      price: 'Free'
    },
    
    
    {
    name : 'Nenjodu Kalanthidu',
    description : 'Dive into a night of musical magic at our Sing-Along Spectacular - Nenjodu Kalanthidu with Bandish. Unleash your inner singer and join the ultimate celebration of music.',
    datetime : '23 April 2024  1:30 PM ',
    location: 'Chennai',
    organizer: 'Vignesh',
    price: 'Rs.399/-'
  },
 
 
  {
  name : 'Qawwali by Nizami Bandhu',
  description : 'Nizami Bandhu are an Indian musical group composed of Ustad Chand Nizami, Shadab Faridi and Sohrab Faridi Nizami and Band gained fame after featured in song Kun Faya Kun.',
  datetime : '27 April 2024  09:00 AM ',
  location: 'Delhi',
  organizer: 'Pandia',
  price: 'Rs.499/-'
},


{
name : 'Thaikkudam Bridge Live Concert',
description : 'Dive into a musical extravaganza like never before as Garuda Mall proudly presents Blend Alive India In Concert featuring Thaikkudam Bridge good happenings and strategies for navigating the twists.',
datetime : '01 June 2024  3:30 PM ',
location: 'Bengaluru',
organizer: 'Virat',
price: 'Rs.399/-'
},


{
name : 'Dabzee Malabarie Live in Concert',
description : 'Mohammed Fasil,(born 30 May 1991), known professionally as Dabzee, is an Indian rapper and songwriter from Kerala. He has sang in 5+ Malayalam movies. He is the current market sensation in India.',
datetime : '29 April 2024  9:30 AM ',
location: 'Mumbai',
organizer: 'Sheik',
price: 'Rs.399/-'
},


{
name : 'Dance - Main Tawaif',
description : 'Main Tawaif is a presentation by Manjari Chaturvedi. Founded and conceptualized by Classical Dancer, Creator of Sufi Kathak, and Restorer of the Dance of Tawaifs.',
datetime : '05 May 2024  03:00 PM ',
location: 'Delhi',
organizer: 'Fatheem',
price: 'Rs.200/-'
},


{
  name : 'Mehfil-E-Sukoon-Sufi Music',
  description : 'Experience an enchanting evening of soulful melodies Music Performance. Mystical world of poetry and music as talented artists Ghazal and Sufi music.',
  datetime : '23 May 2024  1:30 PM ',
  location: 'Bengaluru',
  organizer: 'Abhay',
  price: 'Rs.450/-'  
},
  

{
    name : 'Eliane Elias Live in Concert',
    description : 'Brazilian jazz pianist, singer, composer and arranger, double Grammy winner, double Latin Grammy award winner, Eliane Elias will make her India debut at the NPCA',
    datetime : '20 April 2024  1:00 PM ',
    location: 'Mumbai',
    organizer: 'Sai Bhai',
    price: 'Rs.1180/-'
  },


    {
      name : "Rajhesh Vaidhya's -Retro Evening",
      description : 'Abbas Cultural proudly presents A Grand Cine Musical Event titled SOUND OF MUSIC Retro Evening by Veena Maestro Rajhesh Vaidhya on Sunday the 5th May 2024, 6.00pm at Vani Mahal, Chennai..',
      datetime : '26 April 2024  12:00 PM ',
      location: 'Chennai',
      organizer: 'Arjun',
      price: 'Rs.500/-'
    },

    
      {
        name : 'Cube Media GiG 2.0',
        description : ' Cube Media is going to organize a rap show on 19th May 2024 in a wonderful lounge in Preet Vihar.If you want to watch and witness this amazing show and the art of all these artists',
        datetime : '13 May 2024  10:00 AM ',
        location: 'Delhi',
        organizer: 'Mukesh khanna',
        price: 'Rs.199/-'
      },
       
        {
          name : 'Kailash Kher & Kailash Live',
          description : 'Padmashree Kailash Kher is an Indian music composer and singer. He sings songs with a music style influenced. His famous songs are Chand Sifarish, Sayyian, Allah ke bande and many more.',
         
          datetime : '08 May 2024  2:00 PM ',
          location: 'Bengaluru',
          organizer: 'Jone Nick',
          price: 'Rs.1499/-'}
  ]


}
