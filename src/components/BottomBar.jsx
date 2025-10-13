import { IconBookmarks, IconSearch, IconUserCircle } from "@tabler/icons-react";
import "./BottomBar.scss";
import { useLocation } from "wouter";
import { locale } from "dayjs";

export default function BottomBar() {
  const [location, navigate] = useLocation();

  const goToProfile = () => {
    navigate("/profile");
  };
  const goToExplore = () => {
    navigate("/explore");
  };
  const goToSaved = () => {
    navigate("/saved");
  };

  const getClassNames = (match_location) => {
    let class_list = ["nav-icon"];
    let _location = location;

    if (_location === "/" || _location == "") {
      _location = "/explore";
    }

    if (_location === match_location) {
      class_list.push("selected");
    }

    return class_list.join(" ");
  };

  return (
    <div id="BottomBar">
      <div className={getClassNames("/explore")} onClick={goToExplore}>
        <IconSearch size={26} />
      </div>
      <div className={getClassNames("/saved")} onClick={goToSaved}>
        <IconBookmarks size={26} />
      </div>
      <div className={getClassNames("/profile")} onClick={goToProfile}>
        <IconUserCircle size={26} />
      </div>
    </div>
  );
}
