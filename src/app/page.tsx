import { Button, TextArea } from "@app/components/ui";

import { IconArrowsExchange } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="flex p-10">
        <TextArea className="flex-1" />
        <div className="flex-shrink-0 px-10">
          <Button variant="primary">
            <IconArrowsExchange />
          </Button>
        </div>
        <TextArea className="flex-1" />
      </div>
    </main>
  );
}
