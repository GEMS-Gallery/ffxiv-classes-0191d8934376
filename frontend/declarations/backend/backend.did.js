export const idlFactory = ({ IDL }) => {
  const ClassDetail = IDL.Record({
    'cons' : IDL.Opt(IDL.Vec(IDL.Text)),
    'name' : IDL.Text,
    'pros' : IDL.Opt(IDL.Vec(IDL.Text)),
    'role' : IDL.Text,
    'image' : IDL.Text,
  });
  const Class = IDL.Record({
    'name' : IDL.Text,
    'role' : IDL.Text,
    'image' : IDL.Text,
  });
  return IDL.Service({
    'getClassDetails' : IDL.Func([IDL.Text], [IDL.Opt(ClassDetail)], ['query']),
    'getClasses' : IDL.Func([], [IDL.Vec(Class)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
