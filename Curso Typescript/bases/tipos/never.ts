(() => {
  const error1 = (message: string): (never | number) => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  const error = (message: string): never => {
    // esta esw una función que nunca va a terminar de forma exitosa, es decr, es ua función
    //que va a romper en algún lado

    throw new Error(message);
  };

  error("Auxilio");
})();
