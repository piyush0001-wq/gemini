import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import { useContext } from "react";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <h2>Gemini</h2>

        <div className="links">
          <div className="try-advance">
            <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg" />
            <p>Try Gemini Advance</p>
          </div>

          <img className="user-icon" src={assets.user_icon} />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p className="message">How Can i help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Brainstorm team bonding activities for our summer work retreat
                </p>
                <p className="icon">
                  <i class="fa-solid fa-compass"></i>
                </p>
              </div>
              <div className="card">
                <p>Explain how something works like an engineer</p>
                <p className="icon">
                  <i class="fa-regular fa-lightbulb"></i>
                </p>
              </div>
              <div className="card">
                <p>Teach me the concept of game theory in simple terms</p>
                <p className="icon">
                  <i class="fa-solid fa-compass"></i>
                </p>
              </div>
              <div className="card">
                <p>Help me compare these college majors</p>
                <p className="icon">
                  <i class="fa-regular fa-lightbulb"></i>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <>
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </>
                ) : (
                  <p>{resultData}</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a promt here..."
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              {input ? (
                <img src={assets.send_icon} onClick={() => onSent()} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
