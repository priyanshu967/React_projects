import React, { useState } from 'react';

const Section = ({ title, description, isVisible, onToggle }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? <p>{description}</p> : null}
      <button onClick={onToggle} className="mt-2 px-4 py-2 bg-blue-500 text-white">
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div>
      <h3 className="font-bold text-3xl p-2 m-2">Instamart</h3>
      <Section
        title="About Instamart"
        description="This is the about section of Instamart. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection === 'about'}
        onToggle={() => toggleSection('about')}
      />
      <Section
        title="Team Instamart"
        description="This is the detail section of Instamart. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection === 'team'}
        onToggle={() => toggleSection('team')}
      />
      <Section
        title="Career Instamart"
        description="This is the detail section of Instamart. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        isVisible={visibleSection === 'career'}
        onToggle={() => toggleSection('career')}
      />
    </div>
  );
};

export default Instamart;
