import React from 'react';

import Filter from './CaseStudiesFilterList/Filter';

const OPTIONS = {
    "Video Type" : [
        "All",
        "Commercial",
        "Short Film",
        "Short Documentary",
        "Animation",
        "Event Videos",
        "Interviews",
        "Drone Videos"
    ],
    "Industry" : [
        "All",
        "B2B",
        "B2C",
        "Food",
        "Technology",
        "Ecommerce",
        "Fashion",
        "Sustainability",
        "Gaming",
        "Entertainment",
        "Education",
        "Sports",
        "Retail"
    ],
    "Video Style" : [
        "All",
        "Dynamic",
        "Tech-driven",
        "Elegant",
        "Emotional",
        "Empowering",
        "Lighthearted",
        "Comedic",
        "Suspenseful",
        "Informative",
        "Visually Stunning"
    ],
    "Budget" : [
        "All",
        "$",
        "$$",
        "$$$",
        "$$$$"
    ],
}

function CaseStudiesFilterList() {
    return (
        <div className="mx-5 mt-4 mb-5">
          <h5>Filter by:</h5>
          <Filter
              name="Video Type"
              options={OPTIONS["Video Type"]}
          />
          <Filter
              name="Industry"
              options={OPTIONS["Industry"]}
          />
          <Filter
              name="Video Style"
              options={OPTIONS["Video Style"]}
          />
          <Filter
              name="Budget"
              options={OPTIONS["Budget"]}
          />
          <input type="checkbox" name="Interactive Videos"/> Interactive Videos
        </div>
    );
}

export default CaseStudiesFilterList;

