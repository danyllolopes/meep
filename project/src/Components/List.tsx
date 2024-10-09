import React from "react";

type ListProps = React.ComponentProps<"li">;

const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  padding: "var(--gap-s)",
  margin: "var(--gap-s) 0",
};

const List = ({ children, style, ...props }: ListProps) => {
  return (
    <li style={{ ...defaultStyle, ...style }} {...props}>
      {children}
    </li>
  );
};

export default List;
