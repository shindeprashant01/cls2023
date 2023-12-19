import React, { useState } from 'react';

const DemoSection = () => {
  const [sections, setSections] = useState([]); // State to store the duplicated components

  // Function to add a new section/component
  const addSection = () => {
    // You can create a new section component or just use some content as an example
    const newSection = <div key={sections.length}>New Section {sections.length + 1}</div>;
    
    // Update the state with the new section
    setSections([...sections, newSection]);
  };

  const removeSection = () => {
    if (sections.length > 0) {
      const updatedSections = sections.slice(0, sections.length - 1);
      setSections(updatedSections);
    }
  };

  return (
    <div>
      <h1>Your Form</h1>
      {sections.map((section, index) => (
        <div key={index}>
          {section}
        </div>
      ))}
      <button onClick={addSection}>Add Section</button>
      <button onClick={removeSection}>Remove Section</button>
    </div>
  );
};

export default DemoSection;
