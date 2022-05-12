import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getCopyrights' : () => Promise<string>,
  'getName' : () => Promise<string>,
  'greetingsFromIc' : () => Promise<string>,
  'setName' : (arg_0: string) => Promise<string>,
}
