import React from 'react';


function HomepageWhoWeAre() {
    return (

        <div className="mb-5 mx-medium">
          <p className="h1 font-weight-bold mb-5 text-center">
            Who We Are
          </p>
          <p className="mb-3">
            LemonTree is a global problem solving community and traceable idea network to offer organizational solutions. LemonTree Media is its creative chapter.
          </p>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="h3 font-weight-bold mb-4 mt-5">
                Ideas
              </p>
              <p className="mb-5">
                Idea is the visual representation of a creator's work. Every video in LemonTree Media is logged as an idea.
              </p>
            </div>
            <div className="spacer"></div>
            <div>
              <p className="h3 font-weight-bold mb-4 mt-5">
                Solvers
              </p>
              <p className="mb-5">
                Solvers are creators who solve real-world problems. At LemonTree Media, creatives are solvers.
              </p>
            </div>
          </div>

        </div>
    );
}

export default HomepageWhoWeAre;
