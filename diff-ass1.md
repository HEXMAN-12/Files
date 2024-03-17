To solve these problems, we'll be using first-order differential equations. Let's tackle each question one by one.

### Question 1
We are given that the rate of disintegration of plutonium is proportional to the amount remaining. This can be represented by the following first-order differential equation:

\[\frac{dA}{dt} = -kA\]

Where:
- \(A\) is the amount of plutonium at time \(t\).
- \(k\) is the proportionality constant.
- We're given that after 15 years, 0.043% of the initial amount \(A_0\) has disintegrated. This can be expressed as \(\frac{A_0 - A}{A_0} = 0.043\).

We'll solve this differential equation and use the given information to find the value of \(k\), and then find the half-life (\(T_{\frac{1}{2}}\)).

### Question 2
We'll model the cooling of the cake using Newton's law of cooling, which states that the rate of change of the temperature of an object is proportional to the difference between its temperature and the ambient temperature. Mathematically, it's represented as:

\[\frac{dT}{dt} = -k(T - T_a)\]

Where:
- \(T\) is the temperature of the cake at time \(t\).
- \(T_a\) is the ambient temperature (room temperature).
- \(k\) is the proportionality constant.

We'll solve this differential equation with the given initial condition to find \(k\), and then find the time it takes for the cake to cool to the room temperature.

### Question 3
We'll model the change in the amount of salt in the tank over time using a first-order differential equation. The rate of change of the amount of salt in the tank is given by:

\[\frac{dS}{dt} = \text{rate of salt in} - \text{rate of salt out}\]

We'll solve this differential equation with the given conditions to find the amount of salt in the tank at any given time \(t\).

Let's solve each problem step by step. We'll start with Question 1.

### Question 1

We have the first-order differential equation:
\[\frac{dA}{dt} = -kA\]

Given that after 15 years, 0.043% of the initial amount \(A_0\) has disintegrated, we have:
\[\frac{A_0 - A}{A_0} = 0.043\]

Let's solve this system of equations:

1. \(\frac{dA}{dt} = -kA\)
2. \(\frac{A_0 - A}{A_0} = 0.043\)

We'll start by solving the second equation for \(A\):
\[A = A_0 - 0.043 \cdot A_0 = 0.957 \cdot A_0\]

Now, let's differentiate both sides of this equation with respect to \(t\):
\[\frac{dA}{dt} = 0.957 \frac{dA_0}{dt}\]

We can substitute this into the first differential equation:
\[0.957 \frac{dA_0}{dt} = -k(0.957A_0)\]

Now, we can cancel out \(0.957\) from both sides and solve for \(k\):
\[\frac{dA_0}{dt} = -kA_0\]
\[\frac{dA_0}{A_0} = -k \, dt\]
\[\int{\frac{1}{A_0} \, dA_0} = -\int{k \, dt}\]
\[\ln(A_0) = -kt + C_1\]
\[A_0 = C_2e^{-kt}\]

Now, let's use the initial condition \(A(15) = 0.957A_0\) to find \(k\):
\[0.957A_0 = C_2e^{-15k}\]

Given that \(A_0 = C_2\), we have:
\[0.957 = e^{-15k}\]
\[k = -\frac{\ln(0.957)}{15}\]

Now, let's find the half-life (\(T_{\frac{1}{2}}\)):
\[T_{\frac{1}{2}} = \frac{\ln(2)}{k}\]

Let's calculate \(k\) and \(T_{\frac{1}{2}}\).

First, let's calculate the value of \(k\):
\[k = -\frac{\ln(0.957)}{15} \approx 0.004705\]

Now, let's calculate the half-life (\(T_{\frac{1}{2}}\)):
\[T_{\frac{1}{2}} = \frac{\ln(2)}{k} \approx \frac{\ln(2)}{0.004705} \approx 147.39\]

So, the half-life of the isotope is approximately 147.39 years.

Now, let's move on to Question 2.

### Question 2

We have the first-order differential equation representing the cooling of the cake:
\[\frac{dT}{dt} = -k(T - T_a)\]

Given that the initial temperature of the cake (\(T_0\)) is 300°F and its temperature after 3 minutes (\(T(3)\)) is 200°F, we can use these initial conditions to solve for \(k\). Then, we'll find the time it takes for the cake to cool to 70°F.

Let's integrate the equation and solve for \(k\):
\[\int{\frac{1}{T - T_a} \, dT} = -k \int{dt}\]
\[\ln|T - T_a| = -kt + C_1\]
\[T - T_a = C_2e^{-kt}\]

Given the initial condition \(T(0) = 300\), we have:
\[300 - 70 = C_2e^0\]
\[230 = C_2\]

Now, let's find \(k\) using the condition \(T(3) = 200\):
\[200 - 70 = 230e^{-3k}\]

Let's solve this equation for \(k\).

We have the equation:
\[200 - 70 = 230e^{-3k}\]

Solving for \(k\), we get:
\[130 = 230e^{-3k}\]
\[e^{-3k} = \frac{130}{230}\]
\[e^{-3k} = \frac{13}{23}\]
\[{-3k} = \ln{\left(\frac{13}{23}\right)}\]
\[k = -\frac{\ln{\left(\frac{13}{23}\right)}}{3}\]

Now, let's calculate the value of \(k\).

\[k = -\frac{\ln{\left(\frac{13}{23}\right)}}{3} \approx 0.05354\]

Now that we have \(k\), let's find the time it takes for the cake to cool to 70°F. We'll use the equation we derived earlier:
\[T - T_a = 230e^{-0.05354t}\]

We want to find \(t\) when \(T = 70\):
\[70 - 70 = 230e^{-0.05354t}\]
\[0 = 230e^{-0.05354t}\]

To solve for \(t\), we'll take the natural logarithm of both sides and solve for \(t\). Let's do that.

Taking the natural logarithm of both sides, we get:
\[\ln{0} = \ln{230e^{-0.05354t}}\]

Since \(\ln{0}\) is undefined, this means that the cake will never cool down to exactly 70°F. However, if we want to find the time it takes for the cake to cool to a temperature very close to 70°F (say 69.9°F), we can solve for \(t\) using this value. Let's proceed with that.

Let's solve for \(t\) using the condition \(T = 69.9\):

\[69.9 - 70 = 230e^{-0.05354t}\]
\[-0.1 = 230e^{-0.05354t}\]

Now, we'll solve for \(t\):
\[e^{-0.05354t} = \frac{-0.1}{230}\]
\[{-0.05354t} = \ln{\left(\frac{-0.1}{230}\right)}\]

Let's calculate \(t\).

Calculating \(t\), we have:
\[t = -\frac{\ln{\left(\frac{-0.1}{230}\right)}}{0.05354} \approx 49.20\]

So, it will take approximately 49.20 minutes for the cake to cool to a temperature very close to 70°F (69.9°F).

Now, let's move on to Question 3.

### Question 3

We'll model the change in the amount of salt in the tank over time using a first-order differential equation. The rate of change of the amount of salt in the tank is given by:

\[\frac{dS}{dt} = \text{rate of salt in} - \text{rate of salt out}\]

Given:
- The tank is initially filled to capacity with 500 gallons of pure water.
- Brine containing 2 pounds of salt per gallon is pumped into the tank at a rate of 5 gal/min.
- The well-mixed solution is pumped out at the same rate.

Let \(S\) be the amount of salt in the tank at time \(t\).

The rate of salt in is \(5 \times 2 = 10\) pounds/min.

The rate of salt out is \(\frac{S}{500}\) pounds/min.

So, the first-order differential equation representing the change in the amount of salt in the tank over time is:
\[\frac{dS}{dt} = 10 - \frac{S}{500}\]

We'll solve this differential equation with the initial condition \(S(0) = 0\) (since initially, there is no salt in the tank) to find the amount of salt in the tank at any given time \(t\). Let's solve this equation.

We have the first-order differential equation representing the change in the amount of salt in the tank:
\[\frac{dS}{dt} = 10 - \frac{S}{500}\]

This is a separable differential equation. Let's solve it:

\[\frac{dS}{10 - \frac{S}{500}} = dt\]

Integrating both sides:

\[\int{\frac{dS}{10 - \frac{S}{500}}} = \int{dt}\]

This integral can be solved using partial fraction decomposition. After solving the integral, we get:

\[-500\ln{\left|10 - \frac{S}{500}\right|} = t + C\]

Now, let's apply the initial condition \(S(0) = 0\) to find the value of \(C\):

\[-500\ln{\left|10 - \frac{0}{500}\right|} = 0 + C\]
\[-500\ln{10} = C\]

So, our equation becomes:

\[-500\ln{\left|10 - \frac{S}{500}\right|} = t - 500\ln{10}\]

Now, let's solve this equation for \(S\) in terms of \(t\).

To solve for \(S\), we'll first rewrite the equation without the absolute value:

\[10 - \frac{S}{500} = e^{-\frac{t}{500} + \ln{10}}\]

Now, we'll solve for \(S\):

\[S = 500(10 - e^{-\frac{t}{500} + \ln{10}})\]

This gives us the amount of salt in the tank at any given time \(t\). We've successfully solved Question 3.

If you need any further assistance, feel free to ask!
