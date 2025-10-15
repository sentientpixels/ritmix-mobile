import { IconBookmarks, IconSearch, IconUserCircle, IconUsers } from "@tabler/icons-react";
import "./BottomBar.scss";
import { useLocation } from "wouter";
import { locale } from "dayjs";

export default function BottomBar() {
  const [location, navigate] = useLocation();

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToSearch = () => {
    navigate("/search");
  };

  const goToSaved = () => {
    navigate("/saved");
  };

  const goToConnections = () => {
    navigate("/connections");
  };

  const getClassNames = (match_location) => {
    let class_list = ["nav-icon"];
    let _location = location;

    // / is /search
    if (_location === "/" || _location == "") {
      _location = "/search";
    }

    if (_location === match_location) {
      class_list.push("selected");
    }

    return class_list.join(" ");
  };

  return (
    <div id="BottomBar">
      <div className={getClassNames("/search")} onClick={goToSearch}>
        <IconSearch size={26} />
      </div>
      <div className={getClassNames("/connections")} onClick={goToConnections}>
        <IconUsers size={26} />
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
