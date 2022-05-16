export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addToBuffer' : IDL.Func([IDL.Nat], [IDL.Text], []),
    'addToTrieElem' : IDL.Func(
        [IDL.Principal, IDL.Tuple(IDL.Nat, IDL.Int)],
        [IDL.Text],
        [],
      ),
    'bufferToArray' : IDL.Func([], [IDL.Vec(IDL.Int)], []),
    'getCopyrights' : IDL.Func([], [IDL.Text], ['query']),
    'getElemOfTrie' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Tuple(IDL.Nat, IDL.Int))],
        [],
      ),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getValueBack' : IDL.Func([], [IDL.Nat], ['query']),
    'greetingsFromIc' : IDL.Func([], [IDL.Text], ['query']),
    'removeLastBufferElem' : IDL.Func([], [IDL.Opt(IDL.Int)], []),
    'seeBufferSize' : IDL.Func([], [IDL.Nat], []),
    'setName' : IDL.Func([IDL.Text], [IDL.Text], []),
    'sizeOfTrie' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
