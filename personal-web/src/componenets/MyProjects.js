import AmazonCloneIMG from '../Images/AmazonClone.png';
import TrueCareIMG from '../Images/TrueCare.png';
import DiscordIMG from '../Images/discord.svg'
import WordHTML from '../Images/Word2HTML.png'
import TennisFinder from '../Images/TennisFinder.png'

const myProjects = [
    {
        title: "Amazon Clone",
        image: [AmazonCloneIMG],
        tech: ["React", "SASS", "Bootstrap", "Firebase"],
        description: (
          <div>
In this project, I recreated the core functionality of the popular e-commerce website, Amazon. This fully responsive web application allows users to log in with their personal accounts, browse products, add and remove items from their cart, and experience a seamless online shopping interface.<br /><br />The website is built using <b>React</b> for dynamic user interfaces and <b>Firebase</b> for authentication and backend services. Firebase also powers the deployment, ensuring fast and reliable hosting. While it mimics the original Amazon website, this project is designed purely for educational purposes, demonstrating key web development concepts such as state management, routing, and responsive design.
          </div>
        ),
        repo: "https://github.com/kembo001/amazonCloneWithReact",
        liveDemo: "https://clone-4f818.web.app/"
      },
    {
        title: "TrueCare",
        image: [TrueCareIMG],
        tech: ["React", "CSS", "Bootstrap", "Firebase"],
        description: <div>
          TrueCare is a modern healthcare landing page designed to provide users with an intuitive and visually appealing interface to explore healthcare services. This fully responsive web application ensures a seamless browsing experience across devices, featuring clean design, smooth animations, and easy navigation.<br /><br />Built with <strong>React</strong>, <strong>SASS</strong>, and <strong>Bootstrap</strong>, TrueCare demonstrates my ability to create aesthetically pleasing and user-friendly websites. The site is deployed using <strong>Vercel</strong>, ensuring fast performance and reliability.  
        </div>,
        repo: "https://github.com/kembo001/truecare",
        liveDemo: "https://truecarehealth.org/"
      },

      {
        title: "Discord Music Bot",
        image: [DiscordIMG],
        tech: ["NodeJS", "Discord"],
        description: <div>
            "This Discord Music Bot is a fun and interactive tool designed to enhance user engagement in Discord servers by playing songs whenever specific keywords are sent in the chat. Built using <strong>Node.js</strong>, the bot listens for predefined keywords and responds by playing the corresponding song, making it ideal for gaming communities, social groups, or any server looking for a unique, music-driven experience."
        </div>,
        repo: "https://github.com/kembo001/discord-bot",
        liveDemo: "https://truecarehealth.org/"
      },

      {
        title: "Tennis Racket Finder",
        image: [TennisFinder],
        tech: ["React","CSS", "API", "MySQL", "NodeJS"],
        description: <div>
     The Tennis Racket Recommender is a web-based application designed to help users find the perfect tennis racket based on their specific preferences and playing style. Built using <strong>React</strong> for an interactive and responsive user experience, the app allows users to answer a series of questions, and based on their inputs, it provides personalized racket recommendations.<br/><br/>The backend is powered by a custom <strong>SQL database</strong> containing detailed descriptions and specifications of various tennis rackets. An <strong>API</strong> was developed to dynamically fetch racket data from the database, ensuring that users receive accurate and relevant recommendations in real time.
        </div>,
        repo: "https://github.com/kembo001/tennis-racket-recommender",
        liveDemo: "https://truecarehealth.org/"
      },

      {
        title: "Word to HTML",
        image: [WordHTML],
        tech: ["React", "CSS", "PrismJS"],
        description: <div>
Word to HTML is a powerful web-based tool designed to help users effortlessly convert formatted text into clean, well-structured HTML code. The tool simplifies the workflow by automatically adding the necessary HTML tags when users copy content directly from Google Docs. This eliminates the need for developers to manually structure their HTML, saving significant time and effort.<br/><br/>Additionally, the tool enhances productivity by automatically generating <code>&lt;a&gt;</code> tags with <code>href</code> attributes for links, complete with appropriate <code>title</code> attributes. This feature ensures that developers can quickly generate complete, ready-to-use HTML code for their websites without additional manual editing. Built using <strong>React</strong> for dynamic rendering, <strong>PrismJS</strong> for syntax highlighting

        </div>,
        repo: "https://github.com/kembo001/word-to-html-2",
        liveDemo: "https://truecarehealth.org/"
      },


  ];

  export default myProjects;