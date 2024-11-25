<h2>INVERSE INTERPOLATION</h2>

<p>Suppose we formulate a linear interpolating polynomial as the weighted average of the two values that we are connecting by a straight line:</p>

$$
f(x) = L_1f(x_1) + L_2f(x_2) \qquad \qquad ...equ(1)
$$

<p>where the L's are the weighting coefficients. It is logical that the first weighting coefficient is the straight line that is equal to 1 at x<sub>1</sub> and 0 at x<sub>2</sub>:</p>

$$ L_1 = \frac{x - x_2}{x_1 - x_2} $$

<p>Similarly. the second coefficient the straight line that is equal to 1 at x<sub>2</sub> and 0 at x<sub>1</sub>:</p>

$$ L_2 = \frac{x - x_1}{x_2 - x_1} $$

<p>Substituting these coefficients into Eq.(1) yields the straight line that connects the points:</p>

$$ f_1(x) = \frac{x - x_2}{x_1 - x_2}f(x_1) + \frac{x - x_1}{x_2 - x_1}f(x_2) \qquad \qquad ...equ(2) $$

<p>where the nomenclature f<sub>1</sub>(x) designates that this is a first-order polynomial. Equation (2) is referred to as the <i>linear Lagrange interpolating polynomial</i>.</p>

<p> &emsp;The same strategy can be employed to fit a parabola through three points. For this case three parabolas would be used with each one passing through one of the points and equaling zero at the other two. Their sum would then represent the unique parabola that connects the three points. Such a second-order Lagrange interpolating polynomial can be written as</p>

$$ f_2(x) = \frac{(x - x_2)(x - x_3)}{(x_1 - x_2)(x_1 - x_3)}f(x_1) + \frac{(x-x_1)(x-x_3)}{(x_2 - x_1)(x_2 - x_3)} f(x_2) + \frac{(x - x_1)(x - x_2)}{(x_3 - x_1)(x_3 - x_2)}f(x_3) \qquad \qquad ...equ(3) $$

<p>Notice how the first term is equal to f(x<sub>1</sub>) at x<sub>1</sub>, and is equal to zero at x<sub>2</sub> and x<sub>3</sub>. The other terms work in a similar fashion.</p>

<p>&emsp; Both the first- and second-order versions as well as higher-order Lagrange polynomials can be represented concisely as</p>

$$ f_{n-1}(x) = \sum^n_{i=1}L_i(x)f(x_i) \qquad \qquad ...equ(4) $$

<p>where</p>

$$ L_i(x) = \prod^n_{\substack{j=1 \\j≠i}}\frac{x- x_j}{x_i - x_j} \qquad \qquad ...equ(5) $$

<p>where n = the number of data points and &prod; designates the "product of."</p>