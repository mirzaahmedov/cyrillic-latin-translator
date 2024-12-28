import { Button } from "./ui";
import { ClockCounterClockwise } from "@phosphor-icons/react";
import { Dialog } from "./ui/dialog";

export const HistoryDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">
          <ClockCounterClockwise className="size-6" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>History</Dialog.Title>
        <Dialog.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis,
          odio nec eleifend scelerisque, turpis nunc ultricies justo, vel
          tincidunt ipsum nisi ac neque.
        </Dialog.Description>
      </Dialog.Content>
    </Dialog>
  );
};
