import React from "react";
import { Arc, Circle, Rectangle, Snake, CustomPath } from "react-swervy-text";
// import "./styles.css";
function TextAnimation() {
  return (
    <div>
      {/* <div style={{ marginTop: "3rem" }}>
        <Arc text={"This is an arc"} fontSize={"5rem"} delay={0} />
      </div> */}

      <div
        style={{ marginTop: "9rem", display: "flex", justifyContent: "center" }}
      >
        <Circle
          delay={2}
          text={"Business"}
          timingFunction="linear"
          fontSize="3rem"
        />
        <Rectangle
          delay={4}
          text={"Task"}
          x={100}
          fontSize={"3rem"}
          s1={200}
          s2={100}
          direction={"Reverse"}
          timingFunction="quadratic"
        />
      </div>
      {/* <div style={{ marginTop: "12rem" }}>
        <Snake
          delay={6}
          text={"This is the snake component!"}
          fontSize={"5rem"}
        />
      </div>

      <div style={{ marginTop: "4rem" }}>
        <CustomPath text={"Curve"} delay={8} />
      </div> */}
    </div>
  );
}

export default TextAnimation;
