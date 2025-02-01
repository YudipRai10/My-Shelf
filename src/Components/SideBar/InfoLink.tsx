import React from "react";

function InfoLink(): React.ReactElement {
  const links = ["About", "Support", "Terms & Condition"];
  return (
    <div className="text-sm text-side ml-0.5">
      {links.map((link, index) => (
        <p key={index} className="hover:text-primary cursor-pointer mt-3">
          {link}
        </p>
      ))}
    </div>
  );
}

export default InfoLink;
