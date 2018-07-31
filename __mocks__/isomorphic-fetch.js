let __value = 32;

const isomorphicFetch = jest.fn(() => __value);

isomorphicFetch.__setValue = v => __value = v;

export default isomorphicFetch;
