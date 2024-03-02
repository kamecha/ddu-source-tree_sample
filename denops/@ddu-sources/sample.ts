// import元のurlにアクセスして、webサイトから最新のdduのバージョンを確認すると良き
import { GatherArguments } from "https://deno.land/x/ddu_vim@v3.10.2/base/source.ts";
import { BaseSource, Item } from "https://deno.land/x/ddu_vim@v3.10.2/types.ts";

export type Params = Record<never, never>;

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
