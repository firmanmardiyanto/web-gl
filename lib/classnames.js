const classnames = (...args) => {
  const classes = [];
  args.forEach((arg) => {
    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });
  return classes.join(' ');
};

export default classnames;
