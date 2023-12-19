import { useEffect, useState } from 'react';

const Team = () => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/teams')
      .then((res) => res.json())
      .then((team) => {
        setTeam(team);
      });
  }, []);
  return (
    <>
      {/* Start Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {/* Start Column 1 */}
            {team &&
              team.map((person) => {
                return (
                  <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                    <img src={person.photo} className="img-fluid mb-5" />
                    <h3 clas="">
                      <a href="#">{person.name}</a>
                    </h3>
                    <span className="d-block position mb-4">
                      {person.position}
                    </span>
                    <p>{person.bio}</p>
                  </div>
                );
              })}
            {/* End Column 1 */}
          </div>
        </div>
      </div>
      {/* End Team Section */}
    </>
  );
};

export default Team;