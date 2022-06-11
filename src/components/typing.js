import ReactTypingEffect from "react-typing-effect";

const ReactTypingEffectDemo = () => {
  return (
    <ReactTypingEffect
      text={["Darkest White", "Darkest White"]}
      typingDelay={1000}
      eraseDelay={2000}
     
      cursorRenderer={(cursor) => <h1 className="cursor">{cursor}</h1>}
      displayTextRenderer={(text, i) => {
        return (
          <span style={i % 2 === 0 ? { color: "black" } : { color: "white" }}>
            <h1 className="darkest-white-hero"> {text}</h1>
          </span>
        );
      }}
    />
  );
};


export default ReactTypingEffectDemo;