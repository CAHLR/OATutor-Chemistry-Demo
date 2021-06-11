var hints = [{id: "gaussian9a-h1", type: "hint", dependencies: [], title: "Augumented Matrix", text: "First, write the system of equations as an augumented matrix.", variabilization: {}}, {id: "gaussian9a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 2 & 3 & -1 & -2 & 3 & -2 & -9 & 9 \\end{bmatrix}$$"], dependencies: ["gaussian9a-h1"], title: "Augumented Matrix", text: "How do you write the system as an augumented matrix?", choices: ["$$\\begin{bmatrix} 1 & -1 & 1 & 10 & 2 & 3 & -1 & -2 & 5 & -2 & 9 & 9 \\end{bmatrix}$$", "$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 2 & 3 & -1 & -2 & 3 & -2 & -9 & 9 \\end{bmatrix}$$", "$$\\begin{bmatrix} 1 & 1 & 1 & 4 & 2 & 3 & 1 & -2 & 3 & -2 & -9 & 9 \\end{bmatrix}$$", "None of the Above"], subHints: [{id: "gaussian9a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} 1 & -1 & 1 & 8 & 2 & 3 & -1 & -2 & 3 & -2 & -9 & 9 \\end{bmatrix}$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian9a-h3", type: "hint", dependencies: ["gaussian9a-h2"], title: "Obtain row-echelon form", text: "Now, perform row operations to obtain row-echelon form.", variabilization: {}}, {id: "gaussian9a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 0 & 1 & -12 & -15 & 0 & 0 & 1 & 1 \\end{bmatrix}$$"], dependencies: ["gaussian9a-h3"], title: "Obtain row-echelon form", text: "What is the new matrix in row-echelon form?", choices: ["$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 0 & 0 & -1 & -5 & 0 & 0 & 1 & 1 \\end{bmatrix}$$", "$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 0 & 1 & -12 & -15 & 1 & 1 & 1 & 1 \\end{bmatrix}$$", "$$\\begin{bmatrix} 1 & -1 & 1 & 8 & 0 & 1 & -12 & -15 & 0 & 0 & 1 & 1 \\end{bmatrix}$$", "None of the above"], subHints: [{id: "gaussian9a-h4-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} 1 & -1 & 1 & 8 & 0 & 1 & -12 & -15 & 0 & 0 & 1 & 1 \\end{bmatrix}$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian9a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x-y+z=8$$ $$y-12z=-15$$ $$z=1$$"], dependencies: ["gaussian9a-h4"], title: "Convert to equations", text: "What is the system of equations after converting it from the matrix?", subHints: [{id: "gaussian9a-h5-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$x-y+z=8$$ $$y-12z=-15$$ $$z=1$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian9a-h6", type: "hint", dependencies: ["gaussian9a-h5"], title: "Back substitute", text: "Now, back substitute the variables into the system of equations to obtain the final solution.", variabilization: {}}, {id: "gaussian9a-h7", type: "hint", dependencies: ["gaussian9a-h6"], title: "Answer", text: "Therefore, the final solution is (4,-3,1).", variabilization: {}}, ]; export {hints};