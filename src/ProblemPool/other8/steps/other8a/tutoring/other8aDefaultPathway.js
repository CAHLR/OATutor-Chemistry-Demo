var hints = [{id: "other8a-h1", type: "hint", dependencies: [], title: "Creating Two Equations", text: "Create two equations setting 3x-4 equal to 8 and -8.", variabilization: {}}, {id: "other8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["other8a-h1"], title: "Solving $$3x-4=8$$", text: "What is x when $$3x-4=8$$?", subHints: [{id: "other8a-h2-s1", type: "hint", dependencies: [], title: "Solving $$3x-4=8$$", text: "To solve $$3x-4=8$$, start by adding 4 to both sides of the equation: $$3x=12$$. Then, divide both sides by 3 to get $$x=4$$.", variabilization: {}}], variabilization: {}}, {id: "other8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(4\\right)}{3}$$"], dependencies: ["other8a-h1"], title: "Solving $$3x-4=-8$$", text: "What is x when $$3x-4=-8$$?", subHints: [{id: "other8a-h3-s1", type: "hint", dependencies: [], title: "Solving $$3x-4=-8$$", text: "For $$3x-4=-8$$, add 4 to both sides of the equation: $$3x=-4$$. Then, divide both sides by 3 to get $$x=\\frac{-\\left(4\\right)}{3}$$.", variabilization: {}}], variabilization: {}}, {id: "other8a-h4", type: "hint", dependencies: ["other8a-h2", "other8a-h3"], title: "Final Answer", text: "So, the two values of x that would satisfy $$|\\left(3\\right) x-\\left(4\\right)|=8$$ are $$\\frac{-\\left(4\\right)}{3}$$ and 4.", variabilization: {}}, ]; export {hints};