import React from "react";

type CardProps = React.ComponentProps<"ul">;

const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const Card = ({ children, style }: CardProps) => {
  return <ul style={{ ...defaultStyle, ...style }}>{children}</ul>;
};

export default Card;
