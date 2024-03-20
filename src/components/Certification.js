import React from 'react';

const Certification = () => {
  return (
    <section id="certification" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Certifications</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Mastering Data Structures and Algorithms using C and C++</h3>
            <p>Issuing Organization: Udemy</p>
            <p>Date: 04-2022</p>
          </div>
          <div className="col-md-3">
            <h3>Java</h3>
            <p>Great Learning</p>
            <p>Date: 08-2022</p>
          </div>

          <div className="col-md-4">
            <h3>HTML5, CSS3, JAVASCRIPT, Bootstrap</h3>
            <p>Issuing Organization: Infosys Springboard</p>
            <p>Date: 03-2023</p>
          </div>

          <div className="col-md-4">
            <h3>Python, Django</h3>
            <p>TechCiti Software Consulting Private Limited</p>
            <p>Date: 07-2023</p>
          </div>
          <div className="col-md-4">
            <h3>Full Stack Python</h3>
            <p>Thops Tech Career Solution</p>
            <p>Date: Pursuing</p>
          </div>
          {/* Add more certification entries as needed */}
        </div>
      </div>
    </section>
  );
}

export default Certification;
