import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import "../public/main.png";
import "../public/pic1.jpg";
import "../public/pic2.png";
import "../public/pic3.jpg";

function App() {
  const [name, setName] = useState("Alok");
  const [location, setLocation] = useState("Kolhapur");
  const [stream, setStream] = useState("Science");
  const [school, setSchool] = useState("Alphonsa School");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("investor");
  const [religion, setReligion] = useState("Hindu");
  const [meeting, setMeeting] = useState("Just Conversation");
  const [image, setImage] = useState("./main.png");
  const inputRef = useRef();
  const [source, setSource] = useState();
  const [gender, setGender] = useState("male");
  const [to, setTo] = useState("");
  const [from, setForm] = useState("");
  const [output, setOutput] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };
  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleInputAge = (e) => {
    setSelectionRange(e.target.value);
  };
  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleReligion = (e) => {
    setReligion(e.target.value);
  };
  const handleMeeting = (e) => {
    setMeeting(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const generateRandomSchool = () => {
    let schoolArray = [
      "SCSMV",
      "sant tukaram school",
      "rayat school",
      "Phunde",
    ];
    setSchool(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };
  const generateRandomName = () => {
    let schoolArray = ["Ankit", "Aman", "Samadhan", "Naman"];
    setName(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomSpecialization = () => {
    let schoolArray = ["science", "commerce", "arts", "Engineering"];
    setStream(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomLocation = () => {
    let schoolArray = ["Pune", "Mumbai", "Nagpur", "Kolhapur"];
    setLocation(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const generateRandomOccupation = () => {
    let OccuptionArray = [
      "engineer",
      "doctor",
      "businessman",
      "investor",
      "commerce",
    ];
    setOccupation(OccuptionArray[Math.floor(Math.random() * 4)]);
    console.log();
  };
  const generateRandomReligion = () => {
    let religionArray = ["Hindu", "sikh", "jain", "Buddhist"];
    setReligion(religionArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  // console.log(gender);

  const generateRandomImage = () => {
    let schoolArray = ["./pic1.jpg", "./pic2.png", "/pic3.jpg"];
    setImage(schoolArray[Math.floor(Math.random() * 3)]);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  // const handleChoose = (event) => {
  //   inputRef.current.click();
  // };

  // ---------translate------

  // const [inputText, setInputText] = useState("");
  // const [resultText, setResultText] = useState("");
  // const [selectedLanguageKey, setLanguageKey] = useState("");
  // const [languagesList, setLanguagesList] = useState([]);
  // const [detectLanguageKey, setdetectedLanguageKey] = useState("");

  // const getLanguageSource = () => {
  //   axios
  //     .post(`https://libretranslate.de/detect`, {
  //       q: inputText,
  //     })
  //     .then((response) => {
  //       setdetectedLanguageKey(response.data[0].language);
  //     });
  // };
  // const translateText = () => {
  //   setResultText(inputText);

  //   getLanguageSource();

  //   let data = {
  //     q: inputText,
  //     source: detectLanguageKey,
  //     target: selectedLanguageKey,
  //   };
  //   axios.post(`https://libretranslate.de/translate`, data).then((response) => {
  //     setResultText(response.data.translatedText);
  //   });
  // };

  // const languageKey = (selectedLanguage) => {
  //   setLanguageKey(selectedLanguage.target.value);
  // };

  // useEffect(() => {
  //   axios.get(`https://libretranslate.de/languages`).then((response) => {
  //     setLanguagesList(response.data);
  //   });

  //   getLanguageSource();
  // }, [inputText]);

  return (
    <div className="App" id="app">
      <h1 className="heading">Bio Generator</h1>
      <div className="container">
        <div className="option">
          <h2 className="box">Options</h2>
          <div className="box">
            <label>Profile photo</label>
            <input type="file" onChange={photoUpload}></input>
            <button onClick={generateRandomImage}>Random Image</button>
          </div>

          <div className="box">
            <label>Video Upload  </label>
            <input
              ref={inputRef}
              // className="VideoInput_input"
              type="file"
              onChange={handleFileChange}
              accept=".mov,.mp4"
            />
            
          </div>

          <div className="box">
            <label>Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={handleInputName}
            />
            <label>Gender</label>
            <select onChange={(e) => handleGender(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={generateRandomName}>Random name</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedLocation}
              onChange={handleOnChangeLocation}
            ></input>
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={handleInputLocation}
            ></input>
            <button onClick={generateRandomLocation}>Random Location</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedSchool}
              onChange={handleOnChangeSchool}
            ></input>
            <label>School</label>
            <input
              type="text"
              value={school}
              onChange={handleInputSchool}
            ></input>
            <button onClick={generateRandomSchool}>Random School</button>
            <br />
            <label>Specialization</label>
            <input
              type="text"
              value={stream}
              onChange={handleInputStream}
            ></input>
            <button onClick={generateRandomSpecialization}>
              Random Specialization
            </button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedOccuption}
              onChange={handleOnChangeOccuption}
            ></input>
            <label>Occupation</label>
            <input
              type="text"
              value={occupation}
              onChange={handleOccupation}
            ></input>
            <button onClick={generateRandomOccupation}>
              Random Occupation
            </button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedReligion}
              onChange={handleOnChangeReligion}
            ></input>
            <label>Religious Background</label>
            
            <input
              rows="5"
              cols="20"
              value={religion}
              onChange={handleReligion}
            ></input>
            
            <button onClick={generateRandomReligion}>Random Religion</button>
          </div>
          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isChecked}
              onChange={handleOnChange}
            ></input>
            <label
              style={{
                verticalAlign: "middle",
                margin: "3px",
                marginBottom: "6px",
                padding: "0",
                color: "#222",
              }}
            >
              Reason for meeting with missionaries
            </label>
            <textarea
              className="textarea"
              rows="5"
              cols="20"
              value={meeting}
              onChange={handleMeeting}
            ></textarea>
            <button
              className="selectbutton"
              onClick={() =>
                setMeeting(
                  `wants to know if God really does exist and how that affects ${name}`
                )
              }
            >
              Restoration
            </button>
            <button
              className="selectbutton"
              onClick={() =>
                setMeeting(
                  `has been very stressed out with school and feels like ${name} life has no purpose or direction.${name} is hoping to change that by meeting with the missionaries`
                )
              }
            >
              Plan of Salvation
            </button>
            <button
              className="selectbutton"
              onClick={() =>
                setMeeting(
                  `often worries that God is disappointed in ${name} for not following him better and wants to know how to change`
                )
              }
            >
              Gospel of Christ
            </button>
          </div>
        </div>

        <div className="result" id="result">
          <h2 className="box" id="box">
            Result
          </h2>

          <div className="box" id="rightbox">
            <div className="imagediv">
              {image ? <img src={image} alt="profile photo" /> : null}
            </div>
            {name} {isCheckedLocation ? `is from the ${location}` : null} .
            {isCheckedSchool
              ? `${
                  gender == "male" ? "He" : "She"
                } is studying ${stream} at ${school}`
              : null}
            .
            {isCheckedOccuption
              ? `${
                  gender == "male" ? " His" : " Her"
                } occupation is ${occupation}`
              : null}
            {isCheckedReligion
              ? `${gender == "male" ? " His" : " Her"} religion is ${religion}`
              : null}{" "}
            {gender == "male" ? "He" : "She"}{" "}
            {isChecked ? `meet you for ${meeting}` : null}
          </div>
          <div className="box">
          {source && (
              <video
                className="VideoInput_video"
                width="100%"
                height={300}
                controls
                src={source}
              />
            )}
            
            </div>
            
          {/* <h2 className="box" id="box">
            Translate
          </h2>

          <div className="box">
            <textarea
              className="textarea"
              rows="5"
              cols="20"
              placeholder="Type Text to Translate.."
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="box">
            <select className="language-select" onChange={languageKey}>
              <option>Please Select Language..</option>
              {languagesList.map((language) => {
                return <option value={language.code}>{language.name}</option>;
              })}
            </select>
          </div>
          <div className="box">
            <textarea
              className="textarea"
              placeholder="Result Translation.."
              rows="5"
              cols="20"
              value={resultText}
            ></textarea>
            <button onClick={translateText}>Translate</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
