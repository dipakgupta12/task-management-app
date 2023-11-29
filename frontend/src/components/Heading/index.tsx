import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <h1 className={`${className} font-semibold text-xl`}>{title}</h1>;
};

export default Heading;
