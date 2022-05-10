export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'hello' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
