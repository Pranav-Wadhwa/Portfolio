export default {
  title: "EZ TOS",
  refName: "eztos",
  tagline: "Personalized legal documents generator.",
  types: ["Website Development", "Automation"],
  typesShort: ["Web", "Automation"],
  hasLink: "true",
  link: {
    text: "View on",
    textBig: "eztos.com",
    url: "http://eztos.com/"
  },
  startColor: "#F4941D",
  endColor: "#C97A18",
  screenshots: "/assets/screenshots/eztos.png",
  imgStyle: "img-style6",
  details: [
    {
      icon: "role",
      type: "My role: ",
      name: "Freelance Developer"
    },
    {
      icon: "time",
      type: "Timeline: ",
      name: "07/2020 - 08/2020"
    }
  ],
  tools: [
    "Wordpress",
    "Firebase Functions",
    "Node.js",
    "Firebase Firestore",
    "Gravity Forms",
    "PayPal",
    "Zapier"
  ],
  descriptions: [
    {
      header: "The Product",
      body: `
            EZ TOS is a one-stop shop for your legal documents needs. After answering a few questions about your website or mobile app, you easily generate a custom Terms of Service (TOS) or a Privacy Policy without paying a fortune to a lawyer.
            `
    },
    {
      header: "My Role",
      body: `
            The basis of EZ TOS website on Wordpress was already created by the founder, Brian Heller, so I was tasked with creating a backend to automatically generate the TOS and Privacy Policy documents based on the user responses. I created an input form on Wordpress with Gravity Forms that used PayPal to require the user to pay for the documents. I also created Zapier zaps to upload Gravity Forms data to Firebase Firestore and automatically send an email to the user with a download link for their documents. Lastly, I wrote Firebase Functions using Node.js to create the TOS or Privacy Policy documents based on the user's response. Overall, <b>this automation saved the company dozens of hours a week, generated great revenue, and helps users save money when they need legal documents.</b>
            `
    },
    {
      header: "Review from EZ TOS",
      body: `
            "Pranav did a terrific job designing a website for me as a summer intern. He is diligent, professional, and takes pride in his work. He did a great job, and was easy to work with and had a great attitude about making tweaks and changes. He was friendly and professional to work with and followed up on requests for changes with a positive attitude. I am very happy with his work and would highly recommend him to others."<br><br>- <b>Brian Heller</b>, Founder of EZ TOS
            `
    }
  ]
};
