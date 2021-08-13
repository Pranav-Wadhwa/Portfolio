export default {
  title: "Biopath",
  refName: "biopath",
  tagline: "Early diagnosis for neurodegenerative diseases",
  workType: "Hackathon",
  tech: ["iOS App Development", "UI Design", "Virtual Reality Controller"],
  techShort: ["iOS", "UI Design", "Hardware"],
  color: "#254F81",
  colorLight: "#77b1f7",
  previewStyle: "preview5",
  details: [
    {
      header: "Event",
      body: "HackTJ 2019"
    },
    {
      header: "Prize",
      body: "Best Mobile App"
    },
    {
      header: "Date",
      body: "March 2019"
    }
  ],
  links: [
    {
      text: "View on Devpost",
      url: "https://devpost.com/software/gpsafe"
    }
  ],
  tools: [
    "Xcode",
    "Swift",
    "Leap Motion Controller",
    "Firebase",
    "Node.js",
    "Sketch",
    "Adobe XD"
  ],
  descriptions: [
    {
      header: "The Product",
      body: `Tens of millions of individuals suffer from involuntary hand movement around the world, but diagnosis for these diseases are often expensive and time-consuming. We decided to automate the process with hopes of assisting doctors in the process of diagnosis and treatment assignment. Biopath uses <b><a href="https://www.leapmotion.com">Leap Motion technology</a></b> to track the hand movement of users over a 10-second time span. By comparing statistics of the user's hand motion to curated medical data, <b>Biopath can quickly and efficiently diagnose tremor-related diseases.</b>`
    },
    {
      header: "My Role",
      body: `
            I led the design and development of Biopath's iOS app, which gave instructions and displayed results from the Leap Motion Controller. At the start of the hackathon, I created wireframes, mockups, and animations using Sketch and Adobe XD. Afterwards, I built the interface using AutoLayout and UIKit in Xcode and created a Node.js backend to communicate between the app and the Leap Motion Controller. <b>The finished iOS app feature a beautiful UI to allow the user to start a test and easily view their results.</b>
            `
    }
  ]
};
