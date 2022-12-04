"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1:Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(answer);
  },
};

poll.registerNewAnswer();
