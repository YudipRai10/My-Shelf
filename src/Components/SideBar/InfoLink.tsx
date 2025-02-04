import React from "react";

function InfoLink(): React.ReactElement {
  const links = ["About", "Support", "Terms & Condition"];
  return (
    <div className="text-sm text-side ml-0.5 space-y-3">
      {links.map((link, index) => (
        <p key={index} className="hover:text-primary cursor-pointer">
          {link}
        </p>
      ))}
    </div>
  );
}

export default InfoLink;
