import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import college from './images/images112.jpeg';
import blood from './images/bbms111.jpeg';
import vehicle from './images/vehicle111.jpeg';
import blockchain from './images/blockchain112.jpeg';



const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src={college} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">College Connect Application</h5>
                <p className="card-text">College Connect is an Android application developed as a BCA project, aiming to unify communication within educational institutions. 
                It serves as a centralized platform for students, faculty, and management to exchange messages, share announcements, and collaborate effectively. 
                With segmented user categories, real-time updates, and a user-friendly interface, College Connect enhances connectivity, fosters community engagement, and ensures timely dissemination of critical information, ultimately facilitating seamless communication across the campus.
                This innovative application not only streamlines communication but also fosters a sense of belonging and collaboration.</p>
                <a href="https://drive.google.com/file/d/1neYmxlgbfUjYRS8RGuNARsFDWp1Uo6LV/view?usp=sharing" className="btn btn-primary">Google Drive</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <img src={blood} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Blood Bank & Donor Management System</h5>
                <p className="card-text">The Blood Bank & Donor Management System represents a pivotal project within my portfolio, showcasing my proficiency in web development technologies. 
                Built using HTML, CSS, JavaScript, Bootstrap, and XML, this system serves as a comprehensive platform for managing blood donations and donors efficiently. 
                With a user-friendly interface crafted using HTML and CSS, enhanced functionality through JavaScript, Bootstrap for responsive design, and XML for data management, this project demonstrates my ability to leverage a diverse set of technologies to address critical societal needs. 
                Through this project, I've not only honed my technical skills but also contributed to improving healthcare accessibility and efficiency within communities.</p>
                <a href="https://github.com/tsai143/Blood-Bank-Management-System" className="btn btn-primary">GitHub Link</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src={vehicle} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Video Based Vehicle Detection & Counting System </h5>
                <p className="card-text">The Video-Based Vehicle Detection & Counting System is a significant project within my portfolio, showcasing my expertise in Python programming and data analysis. 
                Utilizing advanced computer vision techniques and machine learning algorithms, this system accurately detects and counts vehicles in video footage, providing valuable insights for traffic management and urban planning. 
                Leveraging Python's versatility and libraries such as OpenCV and NumPy, I implemented robust vehicle detection algorithms and conducted thorough data analysis to extract meaningful information. 
                This project not only demonstrates my proficiency in Python development but also highlights my ability to tackle real-world challenges through innovative solutions and data-driven approaches.</p>
                <br></br>
                <br></br>
                <a href="https://github.com/tsai143/vehicle-counting" className="btn btn-primary">GitHub Link</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <img src={blockchain} alt="Portfolio Item 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Usage of Blockchain Technology In The Financial Industry</h5>
                <p className="card-text">In this project showcasing the usage of blockchain technology in the financial industry, I developed a web application using Python and Django framework. 
                                        The core functionality of the application revolves around executing financial transactions securely through blockchain technology. Leveraging the decentralized nature of blockchain, 
                                        the application ensures transparent, immutable, and tamper-proof transactions. 
                                        Users can initiate, track, and verify transactions seamlessly, promoting trust and efficiency in financial operations. Through smart contracts and cryptographic techniques, the application ensures the integrity and security of each transaction, providing a robust platform for financial activities. 
                                        This project not only demonstrates my proficiency in Python and Django but also showcases my understanding and implementation of cutting-edge technologies in the financial sector.</p>
                <a href="https://ijariie.com/FormDetails.aspx?MenuScriptId=219889" className="btn btn-primary me-md-2">Paper Publication</a>
                
                <a href="https://drive.google.com/file/d/1jI1wI3Q6omlUqLsTT8WoNcSDx7qoRvVS/view?usp=sharing" className="btn btn-primary">Google Drive</a>
                
              </div>
            </div>
          </div>

          
          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
