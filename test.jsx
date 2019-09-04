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

                                        <h4 className="card-title text-center">Ted Wong</h4>
                                        <p id="aboutme" className="card-text text-red">

                                            Looking for a top grade programmer?<br />
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
                        <h1> About:</h1>
                        <h2> My background</h2>
                        <p className="w-75 mt-4">
                            Masters student at NYU Tandon School of Engineering.
                                I am experienced in software/hardware programming, game design, big data processing
                                and project management with background in machine learning, AI and cyber security.<br/>
                            I enjoy challenges and working with new technologies. There is always something new to learn!<br /><br/>
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

                        <h2>Education:</h2>
                        <p className="w-75 mt-4">
                            NYU Masters Student expected to graduate in May 2020!<br />
                            Overall GPA: 3.55 <br />
                            Coursework: Design and Analysis of Algorithms, Software Engineering, Database Systems, 
                            Computer Networking, Artificial Intelligence, Big Data, Cyber Security, Machine Learning, 
                            Interactive Computer Graphics
                        </p>

                        <h2>Work Experience:</h2>

                         <h4 className="mt-4"> Big Data Instructor, New York, United States </h4>
                        <h5 className="clearfix w-75">
                            <span className="float-left">High Performance Computing team, NYU IT Research and Technology</span>
                            <span className="float-right">July 2019 – current</span>
                        </h5>
                        <p className="w-75 mt-3">
                           - Creating, updating, teaching big data programming related tutorials and troubleshooting user questions<br/>
                           - Research and scripting for clusters, openstack and openshift vms<br/>
                           - Working with research personnel to create web application integrated into clusters’ back end<br/>
                           - Developing benchmark testing programs for clusters and implementing them to calculate clusters performance<br/>
                           - Writing documentation for team projects and performing backups and restore on documentation system <br/>

                        </p>
                        
                        <h4 className="mt-4"> Software Developer, Head of Development Team, Xi'an, China </h4>
                        <h5 className="clearfix w-75">
                            <span className="float-left">IT Department, Tarena.inc</span>
                            <span className="float-right">Sep 2017 – Aug 2018</span>
                        </h5>
                        <p className="w-75 mt-3">
                            - Full time Software developer, promoted to work directly under the CTO as head of IT department<br />
                            - Backend (Python/Node.js/MongoDB/AWS)+ frontend (React.js/Jekyll) developer<br />
                            - Designing, developing and mataining company used softwares and websites<br />
                            - Coordinating with head of each department to design and develop a customer relationship management system<br />
                            - Setting up and maintaining company's internal network, including development of a network traffic monitor system and identity authentication system<br />
                            - Recruitting, training and coordinating programming interns through team projects<br />
                        </p>

                        <h4 className="mt-4"> Full Stack Intern, Xi’an, China </h4>
                        <h5 className="clearfix w-75">
                            <span className="float-left">Research and Prototype Department, Xi’an Tarena.Inc</span>
                            <span className="float-right">April 2017 – Aug 2017</span>
                        </h5> 

                        <p className="w-75 mt-3">
                            - Full stack intern focusing on website and mobile development<br />
                            - Leading teams in developing commercial websites using Hadoop distributive computing for back-end data process<br />
                            - Communicating with on-site clients for website design requirements and wrote extensive documents to manage project development<br />
                            - Obtained 'outstanding intern' award during internship<br />


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
                                    <span className="badge badge-primary ml-2">Java</span>
                                    <span className="badge badge-primary ml-2">Python</span>
                                    <span className="badge badge-primary ml-2">R</span>
                                    <span className="badge badge-primary ml-2">C/C++</span>
                                    <span className="badge badge-primary ml-2">C#/.Net</span>
                                    <span className="badge badge-primary ml-2">Linux Shell</span>
                                    <span className="badge badge-primary ml-2">Android</span>
                                    <span className="badge badge-primary ml-2">Java</span>
                                </p>
                            </div>


                            <div className="col-sm-6">
                                <h6>Front End:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">React</span>
                                    <span className="badge badge-primary ml-2">Jsp</span>
                                    <span className="badge badge-primary ml-2">Ruby/Jekyll</span>
                                    <span className="badge badge-primary ml-2">Html/Dom/JavaScript</span>
                                    <span className="badge badge-primary ml-2">Bootstrap/CSS</span>
                                    <span className="badge badge-primary ml-2">Webpack</span>
                                    <span className="badge badge-primary ml-2">Material UI</span>
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
                                    <span className="badge badge-primary ml-2">Impala</span>
                                    <span className="badge badge-primary ml-2">Hive</span>
                                    <span className="badge badge-primary ml-2">Storm</span>
                                </p>
                            </div>


                            <div className="col-sm-6">
                                <h6>Computer Networking:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">C/S structure</span>
                                    <span className="badge badge-primary ml-2">Frrouting</span>
                                    <span className="badge badge-primary ml-2">TCP/IP programming</span>
                                    <span className="badge badge-primary ml-2">LAN setup</span>
                                    <span className="badge badge-primary ml-2">DNS</span>
                                </p>

                            </div>


                            <div className="col-sm-6">

                                <h6>Game Design and Development:</h6>
                                <p>
                                    <span className="badge badge-primary ml-2">OpenGL</span>
                                    <span className="badge badge-primary ml-2">Unreal</span>
                                    <span className="badge badge-primary ml-2">Unity</span>
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

                        <a href="https://github.com/hunter6073/Blitz_mobile" className="mx-auto mt-5 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/blitz.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Game: Blitz</h4>
                                    <p className="pl-2 mt-4">
                                        Description: AR multiplayer shooter game created using openGL lite for Android phones<br />
                                    </p>

                                </div>
                            </div>
                        </a>


                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/weka.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Academic: Machine learning model</h4>
                                    <p className="pl-2 mt-4">
                                        Description: KNN model of Locust to rain relation using Weka<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="https://github.com/hunter6073/album-forever" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/disk_distribution.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Website:Albums Forever</h4>
                                    <p className="pl-2 mt-4">
                                        Description: An online album retail website made with JavaEE MVC<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/test_grading_system.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Test Grading System</h4>
                                    <p className="pl-2 mt-4">
                                        Description: A distributed test grading software in linux system<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="https://github.com/hunter6073/kinect-roll-a-ball" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/roll-a-ball.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">roll-a-ball Kinect.ver</h4>
                                    <p className="pl-2 mt-4">
                                        Description: A kinect version of the classic roll-a-ball game<br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="http://www.thingiverse.com/thing:3753211" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/IMG_0723.PNG" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">ultramarines sigil</h4>
                                    <p className="pl-2 mt-4">
                                        Description: 3d print model of an ultramarine sigil made with 3ds max <br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="https://github.com/hunter6073/wallpaper-checklist" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/checklist.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Checklist wallpaper</h4>
                                    <p className="pl-2 mt-4">
                                        Description:  a dynamic wallpaper built in unity for wallpaper engine <br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="https://github.com/hunter6073/opengl-sphere-animation" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/icg.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Computer graphics course assignment</h4>
                                    <p className="pl-2 mt-4">
                                        Description: Computer Graphics course assignment to create 3d interactive models using OpenGL <br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/underconstruction.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">Security Authentication API</h4>
                                    <p className="pl-2 mt-4">
                                        Description: A security authentication system with interface for software(dll) and websites(API) used for login identification before accessing an company account. <br />
                                    </p>

                                </div>
                            </div>
                        </a>

                        <a href="https://github.com/hunter6073/java-c-compiler" className="mx-auto mt-4 project-display container border border-1 clearfix">
                            <div className="row">
                                <div className="col-sm-6 pl-0"><img src="./assets/underconstruction.png" className="projectimg" /></div>
                                <div className="col-sm-6 pl-0">
                                    <h4 className="text-center proj-textbox">C compiler written in java</h4>
                                    <p className="pl-2 mt-4">
                                        Description:  Course assignment to create a C compiler using java <br />
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
