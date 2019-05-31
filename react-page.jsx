class main_body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // parameters we want to store in the main body
        };
    }
    render() {

        return (
            <div className="container-fluid">

                <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-1 banner-text">Technology for life</h1>
                </div>

                <div className="container-fluid ">

                    <div className="row">
                        <div className="col-sm-3 personal border bg-light">

                            <div className="container-fluid top-m">
                                <div className="card">
                                    <img className="card-img-top round-picture" src="./assets/headshot.jpg" alt="Card image" />
                                    <div className="card-body top-m">

                                        <h4 className="card-title">Ted Wong</h4>
                                        <p className="card-text">

                                            Looking for a top grade programmer?<br />
                                            you've come to the right guy!<br />
                                            This is Ted, <br />
                                            your friendly neighborhood IT guy!<br />
                                            <br />
                                            <a href="https://drive.google.com/file/d/1GzRAM6hgEz4qFD-lij4olsVKAgzyUDfJ/view?usp=sharing" target="blank">Click me for a resume!</a><br/>
                                            <a href="https://github.com/hunter6073/" target="blank">Ted's github</a><br />
                                            <a href="https://www.linkedin.com/in/hw-tedwong/" target="blank">To Linkedin!</a>
                                        </p>


                                    </div>
                                </div>
                            </div>

                        </div>





                        <div className="col-sm-9 border border-left-0  shadow bg-white">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="mt-5">
                                        Education:
                                    </h3>
                                    <p>
                                        NYU Masters Student expected to graduate in May 2020!<br />
                                        Overall GPA: 3.7
                                    </p>
                                    <h3>
                                        Skillset:
                                    </h3>

                                    <h6>Software Engineering and Project Management:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">Agile Development</span>
                                        <span className="badge badge-primary ml-2">Rapid Prototyping Development</span>
                                        <span className="badge badge-primary ml-2">Object Oriented Programming</span><br/>
                                        <span className="badge badge-primary ml-2">MVC designing</span>
                                        <span className="badge badge-primary ml-2">Project Management</span>
                                        <span className="badge badge-primary ml-2">System Testing</span>
                                        <span className="badge badge-primary ml-2">Github</span>
                                    </p>
                                    <h6>Programming Languages:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">Java</span>
                                        <span className="badge badge-primary ml-2">Python</span>
                                        <span className="badge badge-primary ml-2">R</span>
                                        <span className="badge badge-primary ml-2">C/C++</span>
                                        <span className="badge badge-primary ml-2">C#/.Net</span>
                                        <span className="badge badge-primary ml-2">Linux Shell</span>
                                        <span className="badge badge-primary ml-2">Android</span>
                                        <span className="badge badge-primary ml-2"></span>
                                        <span className="badge badge-primary ml-2">Java</span>
                                    </p>

                                    <h6>Front End:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">React</span>
                                        <span className="badge badge-primary ml-2">Jsp</span>
                                        <span className="badge badge-primary ml-2">Ruby/Jekyll</span>
                                        <span className="badge badge-primary ml-2">Html/Dom/JavaScript</span>
                                        <span className="badge badge-primary ml-2">Bootstrap/CSS</span>
                                    </p>

                                    <h6>Back End:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">Sql/noSql</span>
                                        <span className="badge badge-primary ml-2">Node.js</span>
                                        <span className="badge badge-primary ml-2">API(REST,SOAP)</span>
                                        <span className="badge badge-primary ml-2">Spring</span>
                                        <span className="badge badge-primary ml-2">Struts</span>
                                        <span className="badge badge-primary ml-2">Hibernate</span>
                                        <span className="badge badge-primary ml-2">PHP</span>
                                    </p>

                                    <h6>Big Data Analysis:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">Hadoop</span>
                                        <span className="badge badge-primary ml-2">Spark</span>
                                        <span className="badge badge-primary ml-2">MongoDB</span>
                                    </p>

                                    <h6>Computer Networking:</h6>
                                    <p>
                                        <span className="badge badge-primary ml-2">C/S structure</span>
                                        <span className="badge badge-primary ml-2">Frrouting</span>
                                        <span className="badge badge-primary ml-2">TCP/IP programming</span>
                                        <span className="badge badge-primary ml-2">LAN setup</span>
                                        <span className="badge badge-primary ml-2">DNS</span>
                                    </p>

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

                            <h3 className="text-center">  projects </h3>
                            <div className="rows container mx-auto">

                                <div className="row container mx-auto">
                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div className="card border">
                                            <img className="card-img-top h-150" src="./assets/easymayus_web.png" alt="Card image" />
                                            <div className="card-body">          
                                                <h6 className="card-title">Easymay website</h6>
                                                <a href="https://easymayus.com" target="blank" className="stretched-link"></a>
                                                <p className="card-text">Developed, maintained and hosted a Jekyll website</p>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3  d-sm-block project-display">

                                        <div className="card border">
                                            <img className="card-img-top h-150" src="./assets/blitz.png" alt="Card image" />
                                            <div className="card-body">
                                                <h6 className="card-title">Blitz</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p className="card-text">AR multiplayer shooter game with openGL lite on Android phones </p>
                                                
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/weka.png" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">Locust-Rain Learning Model</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p class="card-text">KNN model of Locust to rain relation using Weka</p>
                                                
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/disk_distribution.png" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">Albums Forever website</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p class="card-text"> An online album retail website made with JavaEE MVC</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="row container mx-auto">
                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/test_grading_system.png" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">Test Grading System</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p class="card-text">A distributed test grading software in linux system</p>
                                                

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-3  d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/roll-a-ball.png" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">roll-a-ball Kinect.ver</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p class="card-text">A kinect version of the classic roll-a-ball game</p>
                                               

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/IMG_0723.PNG" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">ultramarines sigil</h6>
                                                <a href="https://easymayus.com" target="blank" className="stretched-link"></a>
                                                <p class="card-text">3d print model of an ultramarine sigil made with 3ds max</p>
                                               

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-3 d-sm-block project-display">

                                        <div class="card border">
                                            <img class="card-img-top h-150" src="./assets/checklist.png" alt="Card image" />
                                            <div class="card-body">
                                                <h6 class="card-title">Checklist wallpaper</h6>
                                                <a target="blank" className="stretched-link"></a>
                                                <p class="card-text"> a dynamic wallpaper built in unity for wallpaper engine</p>
                                                

                                            </div>
                                        </div>

                                    </div>

                                </div>









                            </div>




                        </div>




                    </div>
                    <div className="row">
                        <footer className="footer text-info">
                            Ted Wong @2019
                    </footer>
                    </div>


                </div>


            </div>

        );
    }
}



const e = React.createElement;
const domContainer = document.querySelector('#main_body');
ReactDOM.render(e(main_body), domContainer);
