var hints = [{id: "LinEqua31a-h1", type: "hint", dependencies: [], title: "Find the slope", text: "First, we should write the given equation in slope-intercept form to find the slope.", variabilization: {}}, {id: "LinEqua31a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=\\frac{5}{3} x+\\frac{4}{3}$$"], dependencies: ["LinEqua31a-h1"], title: "Slope-intercept form", text: "What is the slope-intercept form of equation $$\\left(5\\right) x-\\left(3\\right) y+\\left(4\\right)=0$$?", variabilization: {}}, {id: "LinEqua31a-h3", type: "hint", dependencies: ["LinEqua31a-h2"], title: "Relationship between slopes", text: "In order to write the equation of a line, we need to calculate its slope. Since the line is perpendicular to $$\\left(5\\right) x-\\left(3\\right) y+\\left(4\\right)=0$$, the product of their slopes is -1.", variabilization: {}}, {id: "LinEqua31a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(3\\right)}{5}$$"], dependencies: ["LinEqua31a-h3"], title: "Slope", text: "What is the slope of the target line?", variabilization: {}}, {id: "LinEqua31a-h5", type: "hint", dependencies: ["LinEqua31a-h4"], title: "Point-slope formula", text: "Given one point and the slope, the point-slope formula will lead to the equation of a line: $$y-y_1=m \\left(x-x_1\\right)$$.", variabilization: {}}, {id: "LinEqua31a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y-1=\\frac{-\\left(3\\right)}{5} \\left(x-\\left(-4\\right)\\right)$$"], dependencies: ["LinEqua31a-h5"], title: "Substitute", text: "Given the slope $$\\frac{-\\left(3\\right)}{5}$$ and the point (-4,1), what equation can we get using the point-slope formula?", variabilization: {}}, {id: "LinEqua31a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=-\\left(\\frac{3}{5}\\right) x-\\frac{7}{5}$$"], dependencies: ["LinEqua31a-h6"], title: "Simplification", text: "What is the point-intercept form of equation $$y-1=\\frac{-\\left(3\\right)}{5} \\left(x-\\left(-4\\right)\\right)$$?", variabilization: {}}, ]; export {hints};