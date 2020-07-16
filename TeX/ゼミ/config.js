window.MathJax = {
    TeX: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ],
        equationNumbers: {autoNumber: "AMS"},
        Macros: {
            x: "{\\times}",
            rTeX: "{\\mathrm{\\TeX}}",
            rLaTeX: "{\\mathrm{\\LaTeX}}",
            bm: ["{\\boldsymbol{#1}}",1],
            dd: ["{\\frac{\\partial #1}{\\partial #2}}",2],
            mat: ["{\\begin{pmatrix} #1 & #2 \\\\ #3 & #4 \\end{pmatrix}}",4]
        }
    },
    CommonHTML: {
        scale: 90,
        mtextFontInherit: true
    }
};