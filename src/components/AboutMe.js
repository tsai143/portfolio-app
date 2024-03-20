import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import mypic from './images/protfolio2.jpg';



const AboutMe = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <img src={mypic} alt=" " className="img-fluid rounded-circle" />
            
          </div>
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>Greetings! I'm T. Saikumar, a driven professional with a passion for innovation in the IT industry. Armed with a Master's degree in Computer Applications from Dayananda Sagar Academy of Technology and Management, I have a solid foundation in programming languages such as C, C++, Java, and Python. My expertise extends to databases like SQL and MySQL, as well as web technologies including HTML, CSS, JavaScript, and Bootstrap. With hands-on experience in frameworks like Django, I excel in crafting efficient and user-centric solutions.<br/><br/>

              My journey in IT is marked by a thirst for learning and a commitment to excellence. Through e-certificates from platforms like Great Learning and Udemy, I've honed my skills in Java programming, data structures & algorithms, and big data analytics. I've applied my knowledge to diverse projects, ranging from developing a College Connect application in Java for Android to exploring data analytics through projects like Video-Based Vehicle Detection & Counting System. Additionally, my internship at Techciti Technology provided me with valuable practical experience in Python development, enhancing my collaborative skills and problem-solving abilities.<br/><br/>

              Beyond my professional endeavors, I find joy in hobbies like crypto trading, cricket, and traveling. My multilingual proficiency in English, Kannada, Hindi, and Telugu, coupled with strong interpersonal skills, equips me to thrive in diverse environments. With a firm belief in continuous learning and growth, I am eager to contribute my expertise to innovative projects and collaborate with like-minded individuals in the IT landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
