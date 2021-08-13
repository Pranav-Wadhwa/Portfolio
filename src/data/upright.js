export default {
  title: "Upright",
  refName: "upright",
  tagline: "ML-powered posture correction",
  workType: "Hackathon",
  types: ["Web App Development", "Machine Learning", "UI Design"],
  typesShort: ["Web", "ML", "UI"],
  color: "#00BFA6",
  previewStyle: "preview1",
  details: [
    {
      header: "Event",
      body: "Treehacks 2021"
    },
    {
      header: "Prize",
      body: "Healthcare Grand Prize"
    },
    {
      header: "Date",
      body: "February 2021"
    }
  ],
  links: [
    {
      text: "View on GitHub",
      url: "https://github.com/parthivc/upright"
    }
  ],
  tools: [
    "Electron JS",
    "Node.js",
    "HTML/CSS",
    "JavaScript",
    "Tensorflow",
    "Firebase",
    "SwiftUI"
  ],
  descriptions: [
    {
      header: "Inspiration",
      body: `
            With more people working at home due to the pandemic, we felt empowered to improve healthcare at an individual level. Existing solutions for posture correction are expensive, lack cross-platform support, and typically require wearing a physical device. We sought to remedy these issues by creating Upright.
            `
    },
    {
      header: "The Product",
      body: `Upright uses your laptop's camera to analyze and help you improve your posture. After you register and calibrate the system in less than two minutes, simply keep Upright open in the background and continue working. Upright will notify you if you begin to slouch so you can correct it. Upright also has a companion iOS app to view your daily metrics.
            <br><br>
            Some notable features include:
            <br><br>
            - Runs in the background as a menu-bar app<br>
            - Native notifications on any platform<br>
            - All camera data processed locally<br>
            - Progress tracking with an iOS companion app<br>
            `
    },
    {
      header: "My Role",
      body: `
            I wrote the foundation of the desktop-based web app using Electron JS. As this was my first time working with Electron, I learned a lot about the creation of desktop apps, especially concerning data management and persistence. I integrated npm libraries such as NeDB, a local JavaScript database, and Firebase for allowing users to view their metrics in a companion iOS app. I also worked with my teammates to integrate the Tensorflow PoseNet model and use the camera within the menu-bar application. Lastly, I worked on Upright's UI design and branding using Figma, HTML, and CSS.
            `
    }
  ]
};
