export default {
  title: "The G.A.P. Project",
  refName: "gap",
  tagline: "Advancing civic participation.",
  workType: "Freelance Work",
  tech: ["Frontend Development", "Automation"],
  techShorts: ["Web", "Automation"],
  hasLink: "true",
  link: {
    text: "View on",
    textBig: "getactingpeople.com",
    isLong: true,
    url: "https://www.getactingpeople.com/"
  },
  color: "#FF3999",
  colorLight: "#ff6bb3",
  previewStyle: "preview4",
  screenshots: "/assets/screenshots/gap.png",
  details: [
    {
      header: "Work Type",
      body: "Volunteer"
    },
    {
      header: "My Role",
      body: "Freelance Developer"
    },
    {
      header: "Timeline",
      body: "08/2020"
    }
  ],
  links: [
    {
      text: "View on getactingpeople.com",
      url: "https://getactingpeople.com/take-the-quiz"
    }
  ],

  tools: ["Squarespace", "Firebase Functions", "Node.js", "Firebase Firestore"],
  descriptions: [
    {
      header: "The Product",
      body: `
            The GAP Project advances the civic participation of Gen Zers—the newest generation of voters—by placing them on local, state, and national political campaigns. Their political quiz matches Gen-Z students with political campaigns they might be interested in partcipating.
            `
    },
    {
      header: "My Role",
      body: `
            The founders of The G.A.P. Project had already set up a Squarespace website where interested students could take a quiz to find a political campaign. However, at the time, they were matching each student and sending emails one-by-one. I was tasked with improving the quiz website and automating this laborious process.
            <br><br>
            I started by writing Firebase functions to handle the form submissions, candidate matches, and automated emailing. I used Nodemailer, a Node.js library for sending emails, to automatically send an email to both the student and the campaign after the student chooses the match. I also added client-side JavaScript code on Squarespace to send the form data to Firebase functions and display the results with a clean UI. <b>Overall, I was able to improve the quiz experience for students and save The G.A.P. Project over 20 hours per week by automating their work.</b>
            `
    },
    {
      header: "Review from The G.A.P. Project",
      body: `
            "My co-founder Caroline and I are so lucky to have been introduced to Pranav. Within two weeks of our first discussion, he was able to create the exact program that we were looking for. He is incredibly responsive and responsible. Not only did he quickly design a new website according to our needs, but he is also still available at a moment's notice to help with any malfunctions. Since the relaunch of our website (with Pranav's additions) we have received many compliments and inquires about who our skilled programmer is. Needless to say, everyone is impressed by his work. We couldn't be more thankful for his help!"
            <br><br>
            - <b>Adrienne Wolff</b>, Co-Founder of The G.A.P. Project
            <br><br>
            "Pranav created a quiz and web design for my company getactingpeople.com The quiz he created is very user friendly and displays results immediately: <a href="https://www.getactingpeople.com/take-the-quiz">getactingpeople.com/take-the-quiz</a>. Pranav is extremely professional, prompt to respond, assists whenever needed and answers any questions or help. Pranav was a pleasure to work with, he is friendly, intelligent, easy to communicate with, explains everything thoroughly and understandably to non-computer scientists . We are extremely grateful for all his help and our company would not be where we are today without Pranav. Even after our project ended, he was open to providing support when needed. We hope to work with Pranav again in the future."
            <br><br>
            - <b>Caroline Blanck</b>, Co-Founder of The G.A.P. Project
            `
    }
  ]
};
