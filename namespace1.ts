//This file is example of code without namespace
interface StringValidator {
  isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["Zip Code"] = new ZipCodeValidator();
validators["Letters Only"] = new LettersOnlyValidator();

strings.forEach((s) => {
  for (const name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`${s} ${isMatch ? "matches" : "does not match"} ${name}`);
  }
});

export {};
