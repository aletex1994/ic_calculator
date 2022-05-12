export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCopyrights' : IDL.Func([], [IDL.Text], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'greetingsFromIc' : IDL.Func([], [IDL.Text], ['query']),
    'setName' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
