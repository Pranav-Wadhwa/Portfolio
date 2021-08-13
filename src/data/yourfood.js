export default {
  title: "YourFood",
  refName: "yourfood",
  tagline: "ML-Powered recommendations for restaurants",
  workType: "Independent Research",
  tech: ["iOS", "Machine Learning", "Survers", "Research"],
  techShort: ["iOS", "ML", "Server", "Research"],
  color: "#FA7268",
  previewStyle: "preview3",
  details: [
    {
      header: "Role",
      body: "Independent Researcher"
    },
    {
      header: "Timeline",
      body: "09/2019 – 05/2020"
    }
  ],
  links: [
    {
      text: "Read the Research Paper",
      url: "/yourfood_paper"
    }
  ],
  tools: [
    "Xcode",
    "Swift",
    "SwiftUI",
    "Python",
    "Flask",
    "pandas",
    "numpy",
    "sckit-learn",
    "Firebase"
  ],
  descriptions: [
    {
      header: "The Product",
      body: `
            Today’s advances in machine learning (ML) technology enable Artificial Intelligence (AI) developers to teach machines how to make predictions based on past behaviors. This inductive style of learning gives machines the ability to cater to the needs of each user. 
            <br><br>
            With this technology, the average user should not have to scroll through lists of dozens of restaurants to find one they like. <b>YourFood asks the user what restaurants they have enjoyed eating at in the past and recommends new restaurants in their area based.</b>
            `
    },
    {
      header: "How it Works",
      body: `
            <b>1. Pick your favorites: </b>Pick the best restaurants you’ve ever visited in the past. We’ll use this info to help you find similar restaurants.
            <br><br>
            <b>2. Find a spot: </b>Want to find something around you? Or are you planning a trip? Either way, select a location to find a restaurant.
            <br><br>
            <b>3. We'll create personal recs: </b>Our machine learning algorithm uses reviews from your favorite restaurants and compares it to reviews from other restaurants in the selected area. The closest match is taken to you.
            <br><br>
            <b>4. Eat! </b>View details about one of our recommendations, pick a restaurant, and enjoy food that’s meant for you, no matter where you are.
            <br><br>
            `
    },
    {
      header: "The Build Process",
      body: `
            To learn about the full research and build process, please read the <b><a href="/files/Senior Research Paper.pdf">research paper</a></b>. 
            <br><br>
            To start the project, I researched how other machine learning scientists have built recommendations and came up with a plan for building my own. I pulled restaurant data from Zomato API, and wrote a Python script using Google Collaboratory to create my engine. I used a list of sample restaurants a user may have liked and compared them with a set of restaurants from a local city. By running <b>text vectorization</b> on the reviews of the restaurants the user liked and the reviews of the local restaurants, I was able to find similar ones via a <b>cosine similarity analysis</b>.
            <br><br>
            I created a Flask server on PythonAnywhere to host this recommendations engine, and connected it with Firebase realtime database. I designed the iOS app using Sketch and built it using SwiftUI in Xcode. Finally, I connected the app with the Zomato API and the Flask server to display the recommended results.
            `
    }
  ]
};
