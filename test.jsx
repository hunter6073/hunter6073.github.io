class main_body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // parameters we want to store in the main body
        };
    }

    render() {

        return (
            <div>

                {/**************************************** nav bar******************************************/}
                <div id="navibar">

                    <nav id="nav-bar" className="navbar navbar-expand-sm navbar-dark fixed-top ">
                        <a className="navbar-brand" href="#">Ted's Page</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutme">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#education">Education & Experience</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>

                        </ul>
                    </nav>
                </div>
                {/*****************************************************************************************/}

                {/***************************************profile picture************************************/}

                <div id="banner" className="container-fluid">
                    <div className="row">

                        {/* left part of the profile, including a round photo, some words and links to different websites*/}
                        <div id="left" className="col-sm-3 pb-5">
                            <div className="container-fluid top-m">
                                <div className="card">
                                    <img className="card-img-top round-picture mx-auto" src="./assets/headshot.jpg" alt="Card image" />
                                    <div className="card-body">

                                        <h4 className="card-title text-center">Hechun Wang(Ted Wong)</h4>
                                        <p id="aboutme" className="card-text text-red">

                                            Looking for a top-tier programmer?<br />
                                            you've come to the right place!<br />
                                            This is Ted, <br />
                                            your friendly neighborhood IT guy!<br />
                                            <br />
                                            <a href="https://drive.google.com/file/d/1n7wSUJb4LeSACuFFwC2Rhopbp8PpWEXv/view?usp=sharing" target="blank">Click me for a resume!</a><br />
                                            <a href="https://github.com/hunter6073/" target="blank">Ted's github</a><br />
                                            <a href="https://www.linkedin.com/in/hw-tedwong/" target="blank">To Linkedin!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* right part of the profile, just a big banner, with the words technology for life */}
                        <div id="bannerpicture" className="col-sm-9">
                            <div className="container-fluid ">
                                <h1 className="text-center banner-text">  Technology for life   </h1>
                            </div>

                        </div>

                    </div>
                </div>

                {/*****************************************************************************************/}

                {/***************************************background intro************************************/}
                <div className="container-fluid pt-5 pb-5" id="background">
                    <div className="mx-auto w-75">
                        <h1> About me:</h1>
                        <p className="w-75 mt-4">
                            Hi, my name is Ted and I am a 4-year senior engineer/team lead currently at Tencent. 
                            I have been working for tencent games since 2020, mostly majoring in interactive ad 
                            campaigns and information broadcasting. My work have contributed in over a hundred 
                            billion views and multi-billion clicks for games such as naruto mobile, 
                            arena breakout mobile and arena breakout infinite. Keep reading to learn more about me!<br /><br/>
                            
                            ps: I also speak 3 languages:<br/>
                            Hello world!<br />
                            你好世界！<br />
                            ハーロー　ワールド! <br/>

                    </p>
                    </div>

                </div>
                {/*****************************************************************************************/}

                {/***************************************education************************************/}
                <div className="container-fluid pt-5 pb-5" id="education">
                    <div className="mx-auto w-75">
                        <h1> Education & Experience </h1>
                        
                        <h2>Work Experience:</h2>
                        <h4 className="mt-4"> Level 9 Senior engineer/team lead, Tencent, Shenzhen,China</h4>
                        <h5 className="clearfix w-75">
                            <span className="float-left">VASD programming team, Morefun studios  </span>
                            <span className="float-right">July 2020 – current</span>
                        </h5>
                        <p className="w-75 mt-3">
                           - Individually developed broadcasting systems for mobile games such as enter-game popups, slideshow notifications and posters in event centers.<br/>
                             &nbsp;&nbsp;These broadcast ads have received over a hundred million views and have been stable online with a healthy rate over 99.9999%<br/>
                           - Collaborated with tiktok in an ad campagin for arena breakout mobile. The project has been stable online since december 2023<br/>
                           - In charge of Arena breakout's in-game livestream system development. Developed the entire project individually, including the server-end structres,<br/>
                             &nbsp;&nbsp;client side interactions, health-monitoring. And also related events such as a series of prized quiz over the winner of a certain competition
                           - Performed lots of experimental work on new technology trend and provide statistic report to determine if they should be focused on in the future
                             
                        </p>
                        
                        <h4 className="mt-4"> Big Data Instructor, New York, United States </h4>
                        <h5 className="clearfix w-75">
                            <span className="float-left">High Performance Computing team, NYU IT Research and Technology</span>
                            <span className="float-right">2019 – 2020</span>
                        </h5>
                        <p className="w-75 mt-3">
                           - Creating, updating, teaching big data programming related tutorials and troubleshooting user questions<br/>
                           - Research and scripting for clusters, openstack and openshift vms<br/>
                           - Working with research personnel to create web application integrated into clusters’ back end<br/>
                           - Developing benchmark testing programs for clusters and implementing them to calculate clusters performance<br/>
                           - Writing documentation for team projects and performing backups and restore on documentation system <br/>
                        </p>

                        <h2>Education:</h2>
                        <p className="w-75 mt-4">
                            NYU Masters Student in computer science<br />
                            Coursework: Design and Analysis of Algorithms, Software Engineering, Database Systems, 
                            Computer Networking, Artificial Intelligence, Big Data, Cyber Security, Machine Learning, 
                            Interactive Computer Graphics
                        </p>
                        
                    </div>

                </div>
                {/*****************************************************************************************/}

                {/***************************************skills************************************/}
                <div className="container-fluid pt-4 pb-5" id="skills">
                    <div className="mx-auto w-75">
                        <h1 className=""> Skillset: </h1>
                        <div className="row mt-4">

                            <div className="col-sm-6">
                                <h6>Software Engineering and Project Management:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">Agile Development</span>
                                    <span className="badge badge-primary ml-2">Rapid Prototyping Development</span>
                                    <span className="badge badge-primary ml-2">Object Oriented Programming</span><br />
                                    <span className="badge badge-primary ml-2">MVC designing</span>
                                    <span className="badge badge-primary ml-2">Project Management</span>
                                    <span className="badge badge-primary ml-2">System Testing</span>
                                    <span className="badge badge-primary ml-2">Git</span>
                                </p>
                            </div>

                            <div className="col-sm-6">
                                <h6>Programming Languages:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">PHP</span>
                                    <span className="badge badge-primary ml-2">GOlang</span>
                                    <span className="badge badge-primary ml-2">C/C++</span>
                                    <span className="badge badge-primary ml-2">Python</span>
                                    <span className="badge badge-primary ml-2">C#/.Net</span>
                                    <span className="badge badge-primary ml-2">Linux Shell</span>
                                    <span className="badge badge-primary ml-2">Android</span>
                                    <span className="badge badge-primary ml-2">Java</span>
                                </p>
                            </div>

                            <div className="col-sm-6">
                                <h6>Front End:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">Html/Dom/JavaScript</span>
                                    <span className="badge badge-primary ml-2">Bootstrap/CSS</span>
                                </p>
                            </div>

                            <div className="col-sm-6">
                                <h6>Back End:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">Sql/noSql</span>
                                    <span className="badge badge-primary ml-2">Node.js</span>
                                    <span className="badge badge-primary ml-2">API(REST,SOAP)</span>
                                    <span className="badge badge-primary ml-2">Spring</span>
                                    <span className="badge badge-primary ml-2">Struts</span>
                                    <span className="badge badge-primary ml-2">Hibernate</span>
                                    <span className="badge badge-primary ml-2">PHP</span>
                                    <span className="badge badge-primary ml-2">Feathers</span>
                                </p>

                            </div>

                            <div className="col-sm-6">
                                <h6>Big Data Analysis:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">Hadoop</span>
                                    <span className="badge badge-primary ml-2">Spark</span>
                                    <span className="badge badge-primary ml-2">MongoDB</span>
                                    <span className="badge badge-primary ml-2">Kafka</span>
                                    <span className="badge badge-primary ml-2">Hive</span>
                                    <span className="badge badge-primary ml-2">Storm</span>
                                </p>
                            </div>

                            <div className="col-sm-6">
                                <h6>Game Design and Development:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">unity</span>
                                    <span className="badge badge-primary ml-2">Unreal4</span>
                                    <span className="badge badge-primary ml-2">3ds Max</span>
                                    <span className="badge badge-primary ml-2">Maya</span>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
                {/*****************************************************************************************/}




                <div class="container-fluid mb-5 pt-5 pb-5" id="projects">
                    <div className="mx-auto w-75">
                        <h1>My Projects:</h1>

                        <a href="./assets/OpenScreen.jpg" target="_blank" className="mx-auto mt-5 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/OpenScreen.jpg" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">ArenaBreakout: Open screen ads</h4>
                                    <p className="pl-2 mt-4">
                                        Description: In-game open screen ad system for Arena Breakout. This system serves to guide users to the latest and hottest events in game. It was developed in 2022 and has been stable online with over 500 million views now.<br />
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/Slideshow.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">ArenaBreakout: Slideshow ads</h4>
                                    <p className="pl-2 mt-4">
                                        Description: In-game slideshow ad System for Arena Breakout. Part of the same ad system as the open screen ads.<br />
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/Poster.jpg" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">ArenaBreakout:Poster ads</h4>
                                    <p className="pl-2 mt-4">
                                        Description: In-game poster ad system for Arena Breakout. Part of the same ad system as the open scren ads.<br />
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/OfficialAbiSite.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Arena Breakout Inifinite: official site</h4>
                                    <p className="pl-2 mt-4">
                                        Description: Performed server-side programming for Arena Breakout Inifinite's official site<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/MiniApp.jpg" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Arena Breakout: MiniApp</h4>
                                    <p className="pl-2 mt-4">
                                        Description: Structure designer for server-side programming and project manager leading a 5-man team on this project. This miniapp has now been made the official fan community for the game. <br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/NarutoAnimeGiveAway.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Naruto Mobile: Animation Giveaway</h4>
                                    <p className="pl-2 mt-4">
                                        Description: In-game ad campaign designed to have users invite old and new friends into the game and reward them with free finish move animations. This campaign has been online since 2021 and reopens every other month. <br />
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/NarutoMiniApp.jpg" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Naruto Mobile: MiniApp</h4>
                                    <p className="pl-2 mt-4">
                                        Description: This project was designed as a off-game community for gamers to generate and share content. I individually handled the server-side programming and routine maintenance.<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/TikTokDrops.jpg" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">ArenaBreakout: tik tok drops</h4>
                                    <p className="pl-2 mt-4">
                                        Description: collaborated with tik tok to launch a drops campaign. Performed server-side programming on this project.<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/MatchGuess.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Arena Breakout: Guess the winner campaign</h4>
                                    <p className="pl-2 mt-4">
                                        Description: Event designed to have players bet on who the winner of a certain competition would be. The user with the highest score will be famously rewarded. Handled both client and server side.<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/LootAndShoot.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Arena Breakout: Loot and Shoot competition ranking display</h4>
                                    <p className="pl-2 mt-4">
                                        Description: website to display the rankings of an ongoing streamer match. <br />
                                    </p>
                                </div>
                            </div>
                        </a>




































                    </div >

                </div >








                {/***************************************footer************************************/}
                < div id="footer" className="container-fluid" >

                    <p className=" text-center text-white my-auto pt-1">Made by Ted Wong 2019 &copy;</p>

                </div >
                {/*********************************************************************************/}




            </div >



        );
    }


}



const e = React.createElement;
const domContainer = document.querySelector('#main_body');
ReactDOM.render(e(main_body), domContainer);
