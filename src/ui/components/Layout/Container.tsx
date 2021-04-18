import React from "react";

export const Container: React.FC = (props) => {
  return (
    <main className="flex items-center justify-center min-h-full">
      {props.children}
    </main>
  );
};
