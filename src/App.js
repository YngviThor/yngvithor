
import YngviPic from './IMG_4964.jpg';
import './App.css';

function App() {
  return (


    <div className="App">

      <head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0" />
      </head>


      <div className="flex">
        <div className="Grid">

          <div className="cvHeader grid-box ">
            <h1 className="text-5xl text-white-700 font-bold mb-5">Yngvi Thor</h1>
            <b>Programmer/Entrepreneur</b> <br>
            </br>
            Senior Full Stack Developer 29 years of experience
          </div>

          <div className="cvPic grid-box">
            <img src={YngviPic} className="App-logo" alt="logo" />
          </div>

          <div className="cvAppLinks grid-box">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" className="object-scale-down	" alt="logogithub"></img>
            
          </div>

          <div className="Grid-col-span2 grid-box bg-gradient-to-r to-cyan-500 from-blue-500">

            <b className="text-2xl">Biography</b><br></br>

            <p className="leading-6">Yngvi has 30 years of experience in programming and as an entrepreneur. His key skills are in Delphi/MySQL and .net C# / PHP and many other programming languages. Yngvi is very independent and what he has programmed and stored has either become a business or has been sold as a complete solution to other companies. Yngvi has founded three different companies since he was 17 years old and worked in all three. He still owns one of them today, a company that develops its own store computer system with accounting, terminals, storage system and more. Yngvi as a person is very outgoing and gets to know people easily. Very creative and likes to find solutions to complicated problems. He has a keen eye for design and how users experience systems or software.</p>
            
            <p></p><b className="text-2xl">Skills</b><p></p>
            .NET, ASP.NET, Adobe -tools, Azure, C#, CSS, HTML, Java, JavaScript, MS SQL, Oracle, React, SQL

            <p></p><b className="text-2xl">Roles</b><p></p>
            Backend Developer, Fullstack Developer

            <p></p><b className="text-2xl">Locations</b><p></p>
       
        
            Oslo, Remote

            <p></p><b className="text-2xl">Languages</b><p></p>
       
            English, Norwegian

          </div>

          <header className="App-header">

            <p>
            </p>

          </header>

        </div>

      </div>

    </div>


  );
}

export default App;
