import { Tabs, Text } from "@mantine/core";
import { PrimaryColor } from "./colors";
import {
  IconMoodCheck,
  IconMoodPuzzled,
  IconMoodSad,
} from "@tabler/icons-react";

export default function RSVPModal() {
  return (
    <div id="RSVPModalStack">
      <Tabs
        variant="pills"
        radius="xl"
        orientation="vertical"
        color={PrimaryColor}
        defaultValue="not-going"
      >
        <Tabs.List>
          <Tabs.Tab value="not-going" leftSection={<IconMoodSad size={18} />}>
            Not Going
          </Tabs.Tab>
          <Tabs.Tab value="maybe" leftSection={<IconMoodPuzzled size={18} />}>
            Maybe
          </Tabs.Tab>
          <Tabs.Tab value="going" leftSection={<IconMoodCheck size={18} />}>
            Going
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
