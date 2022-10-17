//The same with namespace

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["Zip Code"] = new Validation.ZipCodeValidator();
validators["Letters Only"] = new Validation.LettersOnlyValidator();

strings.forEach((s) => {
  for (const name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`${s} ${isMatch ? "matches" : "does not match"} ${name}`);
  }
});

export {};
