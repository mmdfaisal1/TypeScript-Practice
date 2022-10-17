declare global {
  var myProp: string;
  //This extends the NodeJS namespace
  namespace NodeJS {
    //This extends the ProcessEnv interface
    interface ProcessEnv {
      MY_ENV_VAR: string;
    }
  }
}

export {};
