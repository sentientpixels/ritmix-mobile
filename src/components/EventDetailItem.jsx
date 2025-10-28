import "./EventDetailItem.scss"
import { Text } from "@mantine/core";

export default function EventDetailItem({ icon, detailValue, className }) {
  return (
    <div className={["EventDetailItem", className].join(" ")}>
      <div className="icon-div">{icon}</div>
      <Text className="detail-value" size="sm">
        {detailValue}
      </Text>
    </div>
  );
}
