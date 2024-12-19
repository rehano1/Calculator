# Calculator
Calculator Application

Overview

This project is a simple calculator. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The application features an interactive user interface and handles user input dynamically to display real-time results.

Features

Basic Arithmetic Operations:

Addition (+)

Subtraction (-)

Multiplication (*)

Division (/)

Clear Button (C):

Resets the display and clears all stored variables.

Chaining Operations:

The result of one operation can be used as the input for subsequent operations.

Division by Zero:

Safeguards against invalid operations by displaying an error message when division by zero is attempted.

Project Structure

HTML

The structure includes an input field to display the current value or result.

Buttons for digits (0-9), operators (+, -, *, /), and special operations (C, =).

CSS

Styles the calculator layout, ensuring a clean and modern interface.

Aligns buttons and display elements for user-friendly interaction.

JavaScript

Implements the logic for handling button clicks and executing arithmetic operations.

Stores user input in variables (firstNum, secondNum, and operator).

Dynamically updates the display as users interact with the calculator.

How It Works

Input Handling:

Numbers are stored in firstNum until an operator is clicked.

After selecting an operator, subsequent numbers are stored in secondNum.

Operator Selection:

Clicking an operator stores it in the operator variable.

Evaluation:

Clicking = performs the operation by calling the operate function, which executes the appropriate arithmetic function (add, subtract, multiply, divide).

The result is displayed and stored in firstNum for potential subsequent operations.

Reset:

Clicking C clears all variables and resets the display.

Usage

Use the calculator by clicking the buttons for numbers and operators.

Click = to evaluate the expression.

Click C to reset the calculator.