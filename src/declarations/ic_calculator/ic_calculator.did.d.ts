import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addToBuffer' : (arg_0: bigint) => Promise<string>,
  'addToTrieElem' : (arg_0: Principal, arg_1: [bigint, bigint]) => Promise<
      string
    >,
  'bufferToArray' : () => Promise<Array<bigint>>,
  'getCopyrights' : () => Promise<string>,
  'getElemOfTrie' : (arg_0: Principal) => Promise<[] | [[bigint, bigint]]>,
  'getName' : () => Promise<string>,
  'getValueBack' : () => Promise<bigint>,
  'greetingsFromIc' : () => Promise<string>,
  'removeLastBufferElem' : () => Promise<[] | [bigint]>,
  'seeBufferSize' : () => Promise<bigint>,
  'setName' : (arg_0: string) => Promise<string>,
  'sizeOfTrie' : () => Promise<bigint>,
}
