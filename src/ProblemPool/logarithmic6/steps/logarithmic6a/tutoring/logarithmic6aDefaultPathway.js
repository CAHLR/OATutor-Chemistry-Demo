var hints = [{id: "logarithmic6a-h1", type: "hint", dependencies: [], title: "Product Rule for Logarithms", text: "The product rule for logarithms can be used to simplify a logarithm of a product by rewriting it as a sum of individual logarithms. \\n $$\\log_{b}\\left(M N\\right)=\\log_{b}\\left(M\\right)+\\log_{b}\\left(N\\right)$$ for $$b>0$$ \\n \\n Given the logarithm of a product, use the product rule of logarithms to write an equivalent sum of logarithms. \\n \\n 1) Factor the argument completely, expressing each whole number factor as a product of primes. \\n 2) Write the equivalent expression by summing the logarithms of each factor.", variabilization: {}}, {id: "logarithmic6a-h2", type: "hint", dependencies: [], title: "Quotient Rule for Logarithms", text: "The quotient rule for logarithms can be used to simplify a logarithm or a quotient by rewriting it as the difference of individual logarithms. \\n $$\\log_{b}\\left(\\frac{M}{N}\\right)=\\log_{b}\\left(M\\right)-\\log_{b}\\left(N\\right)$$ \\n \\n Given the logarithm of a quotient, use the quotient rule of logarithms to write an equivalent difference of logarithms. \\n \\n 1) Express the argument in lowest terms by factoring the numerator and denominator and canceling common terms. \\n 2) Write the equivalent expression by subtracting the logarithm of the denominator from the logarithm of the numerator. \\n 3) Check to see that each term is fully expanded. If not, apply the product rule for logarithms to expand completely.", variabilization: {}}, {id: "logarithmic6a-h3", type: "hint", dependencies: [], title: "Power Rule for Logarithms", text: "The power rule for logarithms can be used to simplify the logarithm of a power by rewriting it as the product of the exponent times the logarithm of the base. \\n $$\\log_{b}\\left(M^n\\right)=n*\\log_{b}\\left(M\\right)$$ \\n \\n Given the logarithm of a power, use the power rule of logarithms to write an equivalent product of a factor and a logarithm. \\n \\n 1) Express the argument as a power, if needed. \\n 2) Write the equivalent expression by multiplying the exponent times the logarithm of the base.", variabilization: {}}, {id: "logarithmic6a-h4", type: "hint", dependencies: [], title: "Exponent", text: "Start by simplifying the expression and finding the exponent for each variables.", variabilization: {}}, {id: "logarithmic6a-h5", type: "hint", dependencies: ["logarithmic6a-h4"], title: "Exponent", text: "Distribute the cube root to the respective x and y terms in the expression, $$\\sqrt[3]{ x^2 y^5}$$.", variabilization: {}}, {id: "logarithmic6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{8}{3}$$"], dependencies: ["logarithmic6a-h5"], title: "Exponent", text: "What is the exponent of x after distributing the cube root and summing the exponents of all x terms in the expression?", variabilization: {}}, {id: "logarithmic6a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{14}{3}$$"], dependencies: ["logarithmic6a-h6"], title: "Exponent", text: "What is the exponent of y after distributing the cube root and summing the exponents of all y terms in the expression?", variabilization: {}}, {id: "logarithmic6a-h8", type: "hint", dependencies: ["logarithmic6a-h7"], title: "Apply the Product Rule for Logarithms", text: "Write the equivalent expression of $$log x^{\\frac{8}{3}} y^{\\frac{14}{3}}$$ by summing the logarithms of each factor.", variabilization: {}}, {id: "logarithmic6a-h9", type: "hint", dependencies: ["logarithmic6a-h8"], title: "Apply the Power Rule for Logarithms", text: "Write the equivalent expression by multiplying the exponent times the logarithm of the base. What is the final expression?", variabilization: {}}, ]; export {hints};