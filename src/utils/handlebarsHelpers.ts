import Handlebars from "handlebars/runtime";
Handlebars.registerHelper('if_eq', function(this: any, a: any, b: any, opts: any) {
  return a == b ? opts.fn(this) : opts.inverse(this)
});
