var hints = [{id: "cond9b-h1", type: "hint", dependencies: [], title: "Conditional Probability Formula", text: "The conditional probability of B given A may be computed by means of the following formula: P(B$$\mid$$A)=P(A$$\cap$$B)/P(A)", variabilization: {}}, {id: "cond9b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{36}$$"], dependencies: ["cond9b-h1"], title: "P(A$$\cap$$B)", text: "What is the probability that the first die is 3 AND the sum is 7? Enter you answer as a fraction", subHints: [{id: "cond9b-h2-s1", type: "hint", dependencies: [], title: "P(A$$\cap$$B)", text: "There are $$\\left(6\\right) \\left(6\\right)=36$$ ways the two dice can land. Of those 36, only 1 satisfies the conditions \"the first die is 3\" AND \"the sum is 7\" (3 and 4). Thus $$P(A$$\\cap$$B)=\\frac{1}{36}$$", variabilization: {}}], variabilization: {}}, {id: "cond9b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{6}$$"], dependencies: ["cond9b-h2"], title: "P(A)", text: "What is the probability that the first die is 3? Enter you answer as a fraction", subHints: [{id: "cond9b-h3-s1", type: "hint", dependencies: [], title: "P(A)", text: "There are 6 ways the first die can land. Of those 6, only 1 of them satisfies the condition \"the first die is 3\" so $$P(A)=\\frac{1}{6}$$", variabilization: {}}], variabilization: {}}, {id: "cond9b-h4", type: "hint", dependencies: ["cond9b-h3"], title: "P(B$$\mid$$A)", text: "Using P(A$$\cap$$B) and P(A), solve for P(B$$\mid$$A) using the conditional probability formula: P(B$$\mid$$A)=P(A$$\cap$$B)/P(A)", variabilization: {}}, {id: "cond9b-h5", type: "hint", dependencies: ["cond9b-h4"], title: "P(B$$\mid$$A)", text: "P(B$$\mid$$A)=P(A$$\cap$$B)/P(A)=(1/36)/(1/6)=1/6", variabilization: {}}, ]; export {hints};