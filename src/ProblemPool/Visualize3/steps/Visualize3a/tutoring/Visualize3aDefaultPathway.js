var hints = [{id: "Visualize3a-h1", type: "hint", dependencies: [], title: "Defining Simplified Fraction", text: "A fraction is considered simplified if there are no common factors in its numerator and denominator.", variabilization: {}}, {id: "Visualize3a-h2", type: "hint", dependencies: ["Visualize3a-h1"], title: "General Approach", text: "Since it is hard to find all the common factors between the numerator and the denominator by observation, we will rewrite 210 and 385 as the product of primes and divide out the common factors from there.", variabilization: {}}, {id: "Visualize3a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) \\left(3\\right) \\left(5\\right) \\left(7\\right)$$"], dependencies: ["Visualize3a-h2"], title: "Rewriting 210", text: "What is 210 written as the product of primes?", choices: ["$$\\left(10\\right) \\left(21\\right)$$", "$$\\left(2\\right) \\left(5\\right) \\left(21\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(5\\right) \\left(7\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(5\\right) \\left(7\\right)$$"], variabilization: {}}, {id: "Visualize3a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(5\\right) \\left(7\\right) \\left(11\\right)$$"], dependencies: ["Visualize3a-h2"], title: "Rewriting 385", text: "What is 385 written as the product of primes?", choices: ["$$\\left(5\\right) \\left(77\\right)$$", "$$\\left(5\\right) \\left(7\\right) \\left(11\\right)$$", "$$\\left(3\\right) \\left(5\\right) \\left(8\\right)$$", "$$\\left(3\\right) \\left(5\\right) \\left(7\\right)$$"], variabilization: {}}, {id: "Visualize3a-h5", type: "hint", dependencies: ["Visualize3a-h3", "Visualize3a-h4"], title: "Rewriting Fraction", text: "Plug in the prime factoriazation of both the numerator and the denominator, we can rewrite the fraction as $$\\frac{-\\left(\\left(2\\right) \\left(3\\right) \\left(5\\right) \\left(7\\right)\\right)}{\\left(5\\right) \\left(7\\right) \\left(11\\right)}$$.", variabilization: {}}, {id: "Visualize3a-h6", type: "hint", dependencies: ["Visualize3a-h5"], title: "Dividing Common Factors", text: "We can now divide out the common factors 5 and 7 from both the top and the bottom, which gives us the fraction $$\\frac{-\\left(\\left(2\\right) \\left(3\\right)\\right)}{11}$$.", variabilization: {}}, {id: "Visualize3a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(6\\right)}{11}$$"], dependencies: ["Visualize3a-h6"], title: "Final Answer", text: "Multiply the top. What simplified fraction do you get?", variabilization: {}}, ]; export {hints};