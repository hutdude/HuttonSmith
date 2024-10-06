import React, { useState } from 'react';
import lilydrag from '../assets/lily-drag.webp';

const Lily = () => {
  const [passwordsEntered, setPasswordsEntered] = useState(0);
  const [password, setPassword] = useState('');
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

  const passwordSets = [
    { 
      password: 'fleshwater', 
      hint: "Wow this band is so underground.\nIKR, almost as underground as that plizzard band.\nI heard the bass player met his gf as that show.\nNo way?\n Yeah, seriously.\nI'll never understand how he got her, she's so much cooler and way more fashionable than he is.\nPlus he doesn't even know what a marsupial is!\nWow, what an idiot. At least he's got brains enough to pick a good one." 
    },
    { 
      password: 'deftones', 
      hint: 'Ya know, apparently that bass player thought she had a boyfriend at the time.\n ooo she did?\n The story is a bit unclear there. All we know is that they both dropped everything to get together.\nWow, how awesome. It all worked out! \nI know! But youre skipping to the end. The bass player went with the drummer to some restaraunt to pout and mope that his dream girl was already taken. Sources are still unclear on what that restaraunt was, but sometimes they talk about getting in the pit? We might have confused two different parts of their culture.' 
    },
    { 
      password: 'ring', 
      hint: 'Lucky for our bass player, that girl was into him too.\n How dreamy!\n Yes, yes it was. They chatted often, calling for hours on end to talk about anything. After about a month of flirting, talking, and growing a relationship, that bass player was all in!\n He wanted to date officially?\n Thats correct. But, get this: He gave her a ring and let her know he wanted to be official!\n NO WAY WHAT A COP OUT\nTsk tsk, a boy should know it takes more than to just ring a girl up' 
    }
  ];

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.toLowerCase() === passwordSets[passwordsEntered].password) {
      setPasswordsEntered(passwordsEntered + 1);
      setPassword('');
    }
  };

  const handleWelcomeButtonClick = () => {
    setIsWelcomeScreen(false);
  };

  const renderWithLineBreaksAndColors = (text) => {
    const colors = ['text-blue-600', 'text-pink-600'];
    const align = ['text-right', 'text-left']
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        <span className={colors[index % 2]}>{line}</span>
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-5"
      
    >
      {isWelcomeScreen ? (
        <div className=" flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold text-pink-600">Get ready for a one year unga bunga baga booga dappty ditty doo scavenger hunt made just for you!</h1>
          <button
            onClick={handleWelcomeButtonClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Lily click me! Oh oh oooooooh.... click me SOOO hard. 
          </button>
        </div>
      ) : (
        <>
          {passwordsEntered < 3 ? (
            <>
              <form onSubmit={handleSubmit} className=" flex flex-col items-center space-y-4">
                {/* <label className="text-lg font-semibold text-gray-700">gift:</label> */}
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Gift'
                  className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                  Next  
                </button>
              </form>

              <div className="mt-4   text-xl font-semibold">
                {renderWithLineBreaksAndColors(passwordSets[passwordsEntered].hint)}
              </div>
            </>
          ) : (
            <div className='z-30 absolute inset-0'
            style={{
              backgroundImage: `url(${lilydrag})`,
              backgroundSize: 'cover',  // Ensures the image covers the entire background
              backgroundPosition: 'center',  // Centers the image
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              height: '100vh',  // Full viewport height
            }}
              >
              <p className="text-xl absolute inset-0 h-fit bg-white bg-opacity-75 font-bold text-pink-600">
                Happy one year Lily! I love you so much. Let's have a great day celebrating <u>US!</u>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Lily;
