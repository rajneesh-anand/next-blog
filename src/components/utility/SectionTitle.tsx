import React from "react";

interface IProps {
  title: string;
  text: string;
}

const SectionTitle: React.FC<IProps> = ({ title, text }) => {
  return (
    <div className="section-title text-center">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SectionTitle;
