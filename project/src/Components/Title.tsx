import React from "react";

type TitleProps = React.ComponentProps<"h1"> & {
  text: string;
};

const defaultStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
};

const Title = ({ text, style, ...props }: TitleProps) => {
  return (
    <h1 style={{ ...defaultStyle, ...style }} {...props}>
      {text}
    </h1>
  );
};

export default Title;
