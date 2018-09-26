function msgAfterTimeout(msg, who, timeout) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
    setTimeout(() => reject(`${msg} Hello ${who}!`), timeout);
  });
}
// thePromise = msgAfterTimeout("", "Foo", 100);

thePromise = msgAfterTimeout("", "Foo", 100);

thePromise.then((msg) =>
   // console.log(thePromise);
   msgAfterTimeout(msg, "Bar", 200)
, (err) => console.log(err)).then((msg) => {
  console.log(`done after 300ms:${msg}`);
});

