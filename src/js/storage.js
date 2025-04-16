const skillsData = [
  {
    id: 1,
    title: "CompTIA Network+",
    text: `The Network+ certification validates essential knowledge and skills needed to design, manage, and troubleshoot wired and wireless networks. It covers topics such as network architecture, protocols, IP addressing, routing and switching, network security, and basic troubleshooting. It's ideal for entry-level network administrators, support technicians, and anyone aiming for a career in networking or cybersecurity.`,
    imgURL: "../assets/images/netwrok.png",
    tags: ["OSI MODEL", "IP", "Ports", "Topologies", "Cables"],
  },
  {
    id: 2,
    title: "MCSA (Microsoft Certified Solutions Associate)",
    text: `The MCSA certification covers core skills needed to manage and
                maintain Microsoft technologies. It includes topics such as
                Windows Server administration, networking fundamentals, Active
                Directory, virtualization, and system security. This
                certification is ideal for aspiring system administrators,
                network technicians, and IT support professionals`,
    imgURL: "../assets/images/mcsa.png",
    tags: [
      "Windows Server Administration",
      "Active Directory",
      "Group Policy",
      "DNS Configuration",
      "DHCP Management",
      "File & Storage Services",
      "Hyper-V",
      "Remote Access",
      "PowerShell Basics",
      "User & Group Management",
      "WSUS",
      "Virtualization",
    ],
  },
  {
    id: 3,
    title: "Frontend Web Development (HTML, CSS & JavaScript)",
    text: `This certificate demonstrates core front-end development skills using
           HTML, CSS, and JavaScript. It includes building responsive layouts,
           styling user interfaces, and adding interactivity to web pages.
           Topics cover semantic HTML, CSS Flexbox and Grid, DOM manipulation,
           and modern JavaScript fundamentals.`,
    imgURL: "../assets/images/js.png",
    tags: [
      "Semantic HTML",
      "Responsive Design",
      "CSS Flexbox",
      "CSS Grid",
      "DOM Manipulation",
      "Event Handling",
      "JavaScript Functions",
      "Media Queries",
    ],
  },
  {
    id: 4,
    title: "Python Programming",
    text: `This certificate shows that I’ve learned the basics of Python. I can
         write scripts, work with data like lists and dictionaries, and build
         simple programs using loops, functions, and even classes. I also got
         some experience with reading and writing files, handling errors, and
         using Python to automate everyday tasks. Great for getting started
         with coding, automation.`,
    imgURL: "../assets/images/python.png",
    tags: [
      "Variables & Data Types",
      "Lists & Dictionaries",
      "Loops",
      "Functions",
      "File Handling",
      "Error Handling",
    ],
  },
  {
    id: 8,
    title: "CS50x: Introduction to Computer Science",
    text: "CS50x is Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. It covers fundamental concepts such as algorithms, data structures, memory, security, software engineering, and web development. Students learn to think computationally and solve real-world problems using languages like C, Python, SQL, HTML, CSS, and JavaScript. It's an excellent foundation for anyone exploring computer science or preparing for a technical career.",
    imgURL: "../assets/images/cs50.png",
    tags: ["Algorithms", "C", "Python", "SQL", "Web Development"],
  },

  {
    id: 5,
    title: "SQL Basics",
    text: `This certificate shows that I’ve learned the basics of SQL. I know how to
           work with databases by creating, reading, updating, and deleting data
           (CRUD). I can also use JOINs to combine data from different tables.
           It's a solid start for anyone working with relational databases.`,
    imgURL: "../assets/images/sql.png",
    tags: [
      "SQL Syntax",
      "CRUD Operations",
      "SELECT Statements",
      "INSERT, UPDATE, DELETE",
      "JOINs",
      "Filtering with WHERE",
      "Sorting with ORDER BY",
      "Basic Relational Concepts",
    ],
  },
  {
    id: 7,
    title: "Google IT Support Specialist",
    text: `This certificate demonstrates my foundational knowledge in IT support. I’ve learned how computers, operating systems, networks, and security concepts work together to support users and businesses. I’ve also practiced troubleshooting, customer service, and basic system administration tasks—skills essential for any entry-level IT role.`,
    imgURL: "../assets/images/googleIT.png",
    tags: [
      "IT Fundamentals",
      "Troubleshooting",
      "Customer Support",
      "Operating Systems",
      "System Administration",
      "Networking Basics",
      "Security Fundamentals",
      "Technical Support",
    ],
  },
];

class Storage {
  static getSkiilsData() {
    return skillsData;
  }

  static saveDate(data) {
    localStorage.setItem("songs", JSON.stringify(data));
  }
}

export default Storage;
