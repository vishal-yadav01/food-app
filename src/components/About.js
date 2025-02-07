import { Outlet } from "react-router-dom";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //! creating state
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("parent -> constructor");
  }

  componentDidMount() {
    // this is place where we API calls
    console.log("parent -> componentDidMount");
  }

  render() {
    console.log("parent -> render");

    // Define inline styles
    const styles = {
      container: {
        padding: "5rem", // Equivalent to p-20
        backgroundColor: "#fbbf24", // Tailwind class: bg-orange-300
        fontSize: "1.5rem", // Tailwind class: text-2xl
        fontFamily: "Arvo, serif", // Assuming you're using Google Fonts
      },
      header: {
        textAlign: "center",
      },
      mission: {
        marginTop: "2rem", // Equivalent to mt-8
      },
      image: {
        marginTop: "1.5rem", // Equivalent to mt-6
        width: "100%", // Full width
        height: "auto", // Maintain aspect ratio
      },
      future: {
        textAlign: "center",
        margin: "2rem 0", // Equivalent to my-9
        fontSize: "3rem", // Tailwind class: text-5xl
      },
      description: {
        textAlign: "center",
        margin: "2rem 5rem", // Equivalent to mx-20 my-10
        fontSize: "1.25rem", // Tailwind class: text-xl
      },
      statistics: {
        display: "flex",
        justifyContent: "space-between", // Equivalent to justify-between
        margin: "2.5rem", // Equivalent to m-10
      },
      statisticItem: {
        border: "2px solid #f97316", // Equivalent to border-orange-600
        borderRadius: "0.375rem", // Tailwind class: rounded
        textAlign: "center",
        fontSize: "1.25rem", // Tailwind class: text-xl
        margin: "0 0.5rem", // Equivalent to mx-2
        padding: "0.75rem 1rem", // Equivalent to px-4 py-3
      },
      statisticText: {
        margin: "1.5rem 0", // Equivalent to my-6
      },
    };

    return (
      <>
        <div style={styles.container}>
          <h1 style={styles.header}>WELCOME TO ABOUT PAGE</h1>
          <div style={styles.mission}>
            <p>
              ″Our mission is to elevate the quality of life for the urban
              consumer with unparalleled convenience. Convenience is what makes
              us tick. It's what makes us get out of bed and say, "Let's do
              this."
            </p>
          </div>

          <img
            src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
            alt=""
            style={styles.image}
          />

          <h1 style={styles.future}>What’s In Store For The Future?</h1>

          <h4 style={styles.description}>
            Food Studio has grand plans to be India’s most loved hyperlocal
            player. It aims to be the most accessible platform on the network -
            reimagining the meaning of convenience in the country through a
            variety of service offerings.
          </h4>

          <div style={styles.statistics}>
            <h2>
              Changing <b>the Game</b>
            </h2>
            <div className="flex">
              <span style={styles.statisticItem}>
                <p style={styles.statisticText}>
                  <b>150000+</b> Restaurant Partners Countrywide
                </p>
              </span>
              <span style={styles.statisticItem}>
                <p style={styles.statisticText}>
                  <b>260000+</b> Delivery Executives
                </p>
              </span>
              <span style={styles.statisticItem}>
                <p style={styles.statisticText}>
                  <b>5000+</b> Employees across the Country
                </p>
              </span>
              <span style={styles.statisticItem}>
                <p style={styles.statisticText}>
                  <b>500+</b> Cities PAN India
                </p>
              </span>
            </div>
          </div>
        </div>

        <Outlet />
        {/* <ClassProfile name={"coder bro"} xyz="react end in sept" /> */}
      </>
    );
  }
}

export default About;
