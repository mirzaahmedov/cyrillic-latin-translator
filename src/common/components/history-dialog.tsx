import * as Accordion from "@radix-ui/react-accordion";

import { Broom, ClockCounterClockwise } from "@phosphor-icons/react";
import {
  IconChevronDown,
  IconCircleCheck,
  IconMoodEmpty,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

import { Button } from "./ui";
import { Dialog } from "./ui/dialog";

type HistoryDialogProps = {
  history: string[];
  onClear: () => void;
  onSelect: (item: string) => void;
  onRemove: (item: string) => void;
};
export const HistoryDialog = ({
  history,
  onClear,
  onSelect,
  onRemove,
}: HistoryDialogProps) => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <ClockCounterClockwise className="size-6" />
          Tarjimalar tarixi
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Tarjimalar tarixi</Dialog.Title>
        <Accordion.Root type="multiple" className="mt-3">
          {history.length > 0 ? (
            history.map((item, index) => (
              <Accordion.Item value={index.toString()} key={index}>
                <Accordion.Header className="border-b border-base-content/20">
                  <Accordion.Trigger className="w-full flex items-center p-4">
                    <h6 className="font-bold overflow-hidden whitespace-nowrap text-ellipsis text-start flex-1">
                      {item}
                    </h6>
                    <Button
                      className="text-green-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(item);
                      }}
                    >
                      <IconCircleCheck />
                    </Button>
                    <Button
                      className="text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(item);
                      }}
                    >
                      <IconTrash />
                    </Button>
                    <Button>
                      <IconChevronDown />
                    </Button>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-4 bg-base-200">
                  {item}
                </Accordion.Content>
              </Accordion.Item>
            ))
          ) : (
            <div className="py-10 px-20 flex items-center justify-center gap-5 bg-base-200">
              <IconMoodEmpty className="size-10 opacity-50" />
              <h3 className="text-xl opacity-50">
                Bu yerda hech narsa yo&apos;q
              </h3>
            </div>
          )}
        </Accordion.Root>
        <div className="mt-5 flex items-center justify-between gap-2.5">
          <Button
            variant="outline"
            className="flex items-center gap-1.5 text-red-500"
            onClick={onClear}
          >
            <Broom className="size-6" /> Tozalash
          </Button>
          <Dialog.Close asChild>
            <Button variant="outline" className="flex items-center gap-1.5">
              <IconX className="size-6" /> Yopish
            </Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
