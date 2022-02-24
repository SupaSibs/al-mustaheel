function createState(val) {
return [val, v => {val = v}]
}

export default createState;
