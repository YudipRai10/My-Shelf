import React from "react";
import profilepic from "../../assets/profilepic.png";
import caret from "../../assets/caret.png";

function ProfileBar(): React.ReactElement {
  return (
    <div className="md:flex items-center gap-1 xl:gap-4 rounded-4xl bg-white shadow-low p-1 cursor-pointer hidden">
      <img
        src={profilepic}
        alt="profile-picture"
        className="object-contain w-7 lg:w-12"
      />
      <div className="flex gap-1 xl:gap-4 items-center lg:pr-2 xl:pr-7">
        <p className="text-primary text-xs md:text-sm lg:text-xl">Kenson</p>
        <img src={caret} alt="caret" className="object-contain" />
      </div>
    </div>
  );
}

export default ProfileBar;
