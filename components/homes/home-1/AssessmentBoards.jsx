export default function AssessmentBoards() {
  const boards = [
    {
      logo: "/Elements-03.png",
      title: "Cambridge Board CAIE",
      desc: "Cambridge Assessment International Education",
    },
    {
      logo: "/Elements-04.png",
      title: "AQA Education Board",
      desc: "Assessment and Qualifications Alliance",
    },
    {
      logo: "/Elements-02.png",
      title: "Edexcel Board",
      desc: "Edexcel regulates Examinations under the British Curriculum",
    },
  ];

  return (
    <section className="assessment-boards-section">
      <div className="assessment-boards-container">
        <div className="assessment-heading">
          <h5>Assessment Boards</h5>
          <h2>Best Of Our Boards</h2>
        </div>

        <div className="assessment-board-grid">
          {boards.map((board, index) => (
            <div className="assessment-board-card" key={index}>
              <div className="assessment-logo-box">
                <img src={board.logo} alt={board.title} />
              </div>

              <h3>{board.title}</h3>
              <p>{board.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}