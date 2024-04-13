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
                <h1 className="text-5xl mb-[5vh]">Languages</h1>
                <p className="text-3xl">HTML</p>
                <p className="text-3xl">CSS</p>
                <p className="text-3xl">Python</p>
                <p className="text-3xl">SQL</p>
                <p className="text-3xl">Java</p>
                <p className="text-3xl">PHP</p>
                <p className="text-3xl">JavaScript</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Frameworks</h1>
                <p className="text-3xl">NodeJs</p>
                <p className="text-3xl">React</p>
                <p className="text-3xl">JavaFx</p>
                <p className="text-3xl">Next.js</p>
                <p className="text-3xl">Laraval</p>
                <p className="text-3xl">Bootstrap</p>
                <p className="text-3xl">Tailwind</p>
                <p className="text-3xl">Tpyescript</p>
                <p className="text-3xl">Nuxt.js</p>
                <p className="text-3xl">Vue</p>
                <p className="text-3xl">Plotly</p>
                <p className="text-3xl">Pandas</p>
                <p className="text-3xl">NumPy</p>
                <p className="text-3xl">Matplotlib</p>
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
                <h1 className="text-5xl mb-[5vh]">Databases</h1>
                <p className="text-3xl">MySQL</p>
                <p className="text-3xl">MongDB</p>
                {/* <p className="text-3xl">Salt & Pepper</p> */}
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Operating Systems</h1>
                <p className="text-3xl">MacOS</p>
                <p className="text-3xl">Linux</p>
                <p className="text-3xl">Windows</p>
                <p className="text-3xl">Quebes</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Hosting</h1>
                <p className="text-3xl">CPanel</p>
                <p className="text-3xl">SSL</p>
                <p className="text-3xl">Domain Names</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Terminal</h1>
                <p className="text-3xl">bash</p>
                <p className="text-3xl">bs</p>
                <p className="text-3xl">zsh</p>
                <p className="text-3xl">mongosh</p>
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
                <h1 className="text-5xl mb-[5vh]">Encryption</h1>
                <p className="text-3xl">256sha</p>
                <p className="text-3xl">SSH</p>
                <p className="text-3xl">RSA</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Resources</h1>
                <p className="text-3xl">Mixtral.ai</p>
                <p className="text-3xl">Docs</p>
                <p className="text-3xl">Stack overflow</p>
                <p className="text-3xl">Youtube</p>
                <p className="text-3xl">ChatGPT</p>
              </div>
            </ColorChange>
          </div>

          <div className="w-[90vw] mb-[5vh]">
            <ColorChange>
              <div className="border border-black p-[1vh]">
                <h1 className="text-5xl mb-[5vh]">Networking</h1>
                <p className="text-3xl">TCP / IP</p>
                <p className="text-3xl">HTTP / HTTPS</p>
              </div>
            </ColorChange>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLanguage;
