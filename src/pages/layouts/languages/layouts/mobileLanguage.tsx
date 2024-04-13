import React from 'react';
import ColorChange from '@/components/ColorChange';

const MobileLanguage: React.FC<{}> = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[94vh] w-[90vw] bg-white">
        <div className="flex flex-wrap items-center">
          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Languages</h1>
                <p className="text-xl">HTML</p>
                <p className="text-xl">CSS</p>
                <p className="text-xl">Python</p>
                <p className="text-xl">SQL</p>
                <p className="text-xl">Java</p>
                <p className="text-xl">PHP</p>
                <p className="text-xl">JavaScript</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Frameworks</h1>
                <p className="text-xl">NodeJs</p>
                <p className="text-xl">React</p>
                <p className="text-xl">JavaFx</p>
                <p className="text-xl">Next.js</p>
                <p className="text-xl">Laraval</p>
                <p className="text-xl">Bootstrap</p>
                <p className="text-xl">Tailwind</p>
                <p className="text-xl">Tpyescript</p>
                <p className="text-xl">Nuxt.js</p>
                <p className="text-xl">Vue</p>
                <p className="text-xl">Plotly</p>
                <p className="text-xl">Pandas</p>
                <p className="text-xl">NumPy</p>
                <p className="text-xl">Matplotlib</p>
              </div>
            </ColorChange>
          </div>

          {/* <div className="w-[20vw] mr-[5vh] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Applications</h1>
                <p className="text-3xl">Visual Studio Code</p>
                <p className="text-3xl">Excel</p>
                <p className="text-3xl">Photoshop</p>
              </div>
            </ColorChange>
          </div> */}

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Databases</h1>
                <p className="text-xl">MySQL</p>
                <p className="text-xl">MongDB</p>
                {/* <p className="text-3xl">Salt & Pepper</p> */}
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Operating Systems</h1>
                <p className="text-xl">MacOS</p>
                <p className="text-xl">Linux</p>
                <p className="text-xl">Windows</p>
                <p className="text-xl">Quebes</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Hosting</h1>
                <p className="text-xl">CPanel</p>
                <p className="text-xl">SSL</p>
                <p className="text-xl">Domain Names</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Terminal</h1>
                <p className="text-xl">bash</p>
                <p className="text-xl">bs</p>
                <p className="text-xl">zsh</p>
                <p className="text-xl">mongosh</p>
              </div>
            </ColorChange>
          </div>

          {/* <div className="w-[30vw] mr-[5vh] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">API</h1>
                <p className="text-3xl">OAuth</p>
                <p className="text-3xl">Stripe</p>
                <p className="text-3xl">OpenWeather</p>
                <p className="text-3xl">Zoom</p>
              </div>
            </ColorChange>
          </div> */}

          {/* <div className="w-[20vw] mr-[5vh] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Concepts</h1>
                <p className="text-3xl">Routing</p>
                <p className="text-3xl">Hooks</p>
                <p className="text-3xl">Variables</p>
              </div>
            </ColorChange>
          </div> */}

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Encryption</h1>
                <p className="text-xl">256sha</p>
                <p className="text-xl">SSH</p>
                <p className="text-xl">RSA</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Resources</h1>
                <p className="text-xl">Mixtral.ai</p>
                <p className="text-xl">Docs</p>
                <p className="text-xl">Stack overflow</p>
                <p className="text-xl">Youtube</p>
                <p className="text-xl">ChatGPT</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-3xl mb-[5vh]">Networking</h1>
                <p className="text-xl">TCP / IP</p>
                <p className="text-xl">HTTP / HTTPS</p>
              </div>
            </ColorChange>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLanguage;
