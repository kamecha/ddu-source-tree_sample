// import元のurlにアクセスして、webサイトから最新のdduのバージョンを確認すると良き
import { GatherArguments } from "https://deno.land/x/ddu_vim@v3.10.2/base/source.ts";
import { BaseSource, Item } from "https://deno.land/x/ddu_vim@v3.10.2/types.ts";

export type Params = Record<never, never>;

type Tree = { text: string; children?: Tree[] };

const sample: Tree = {
  text: "root",
  children: [
    { text: "a" },
    { text: "b" },
    {
      text: "c",
      children: [
        { text: "ca" },
        { text: "cb" },
      ],
    },
    { text: "d" },
    {
      text: "e",
      children: [
        {
          text: "ea",
          children: [
            { text: "eaa" },
            { text: "eab" },
          ],
        },
        { text: "eb" },
      ],
    },
  ],
};

export class Source extends BaseSource<Params> {
  gather(args: GatherArguments<Params>): ReadableStream<Item<unknown>[]> {
    return new ReadableStream({
      start(controller) {
        const items: Item<unknown>[] = [];
        controller.enqueue(items);
        controller.close();
      },
    });
  }
  params(): Params {
    return {};
  }
}
