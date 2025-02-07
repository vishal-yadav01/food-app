import { useState } from "react";

const Section = ({ title, decription, isShow, setIsShow }) => {
  console.log("section");

  return (
    <div style={{ borderBlock: "2px", backgroundColor: "yellow" }}>
      <h4>{title}</h4>
      {isShow ? (
        <button
          onClick={() => {
            setIsShow();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsShow();
          }}
        >
          Show
        </button>
      )}

      {isShow && <p>{decription}</p>}
    </div>
  );
};

const Instamart = () => {
  console.log("intamart");

  const [isShow, setIsShow] = useState({
    showHome: false,
    showDes: false,
    showCareer: false,
  });
  return (
    <>
      <h1 style={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Instamart
      </h1>
      <Section
        title={"Home Instamart"}
        decription={
          "आम धारणा के विपरीत Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है, जो इसे 2000 वर्ष से अधिक प्राचीन बनाता है. Richard McClintock, हेम्प्डन-वर्जीनिया में सिडनी कॉलेज में एक लैटिन प्रोफेसर है, ने एक Lorem इप्सुम में से एक और अधिक अस्पष्ट लैटिन शब्द देखा और शास्त्रीय साहित्य के शहर में जाते हुए असंदेहदास्पक स्रोत की खोज की. Lorem Ipsum सिसरौ(Sisero) द्वारा "
        }
        isShow={isShow.showHome}
        setIsShow={() => {
          setIsShow({
            showHome: true,
            showDes: false,
            showCareer: false,
          });
        }}
      />
      <Section
        title={"About Instamart"}
        decription={
          "आम धारणा के विपरीत Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है, जो इसे 2000 वर्ष से अधिक प्राचीन बनाता है. Richard McClintock, हेम्प्डन-वर्जीनिया में सिडनी कॉलेज में एक लैटिन प्रोफेसर है, ने एक Lorem इप्सुम में से एक और अधिक अस्पष्ट लैटिन शब्द देखा और शास्त्रीय साहित्य के शहर में जाते हुए असंदेहदास्पक स्रोत की खोज की. Lorem Ipsum सिसरौ(Sisero) द्वारा "
        }
        isShow={isShow.showDes}
        setIsShow={() => {
          setIsShow({
            showHome: false,
            showDes: true,
            showCareer: false,
          });
        }}
      />
      <Section
        title={"Carrer Instamart"}
        decription={
          "आम धारणा के विपरीत Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है, जो इसे 2000 वर्ष से अधिक प्राचीन बनाता है. Richard McClintock, हेम्प्डन-वर्जीनिया में सिडनी कॉलेज में एक लैटिन प्रोफेसर है, ने एक Lorem इप्सुम में से एक और अधिक अस्पष्ट लैटिन शब्द देखा और शास्त्रीय साहित्य के शहर में जाते हुए असंदेहदास्पक स्रोत की खोज की. Lorem Ipsum सिसरौ(Sisero) द्वारा "
        }
        isShow={isShow.showCareer}
        setIsShow={() => {
          setIsShow({
            showHome: false,
            showDes: false,
            showCareer: true,
          });
        }}
      />
    </>
  );
};

export default Instamart;
