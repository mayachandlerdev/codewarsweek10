//code wars 
//At each stage an alternating sequence of 1s and 0s is inserted between the terms of the previous sequence.

// Define a generator function paperFold that sequentially generates the values of this sequence.

function* paperFold() {
    yield 1;
    const gen = paperFold();
    while ( true )
      yield gen.next().value,
      yield 0,
      yield gen.next().value,
      yield 1;
  }