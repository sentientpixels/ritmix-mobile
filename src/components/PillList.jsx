import { Badge } from "@mantine/core";
import "./PillList.scss"

export default function PillList({ pillItems, className, icon, pillColor }) {
  return (
    <div className={["PillList", className].join(" ")}>
      <div className="icon-div">{icon}</div>
      <div className="badges">
        {pillItems?.map((pill_item) => (
          <Badge key={pill_item} color={pillColor}>
            {pill_item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

