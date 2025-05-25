import {atom} from 'recoil';
const CountValueAtom = atom({
    key: 'CountValue', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });
  export default CountValueAtom;