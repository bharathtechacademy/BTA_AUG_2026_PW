# Database concepts - step by step 

## What is Database?
A database is an organized collection of data that is going to help us to access, review, and update the information in a rapid and coherent manner. 

## What is RDBMS? 
RDBMS stands for relational database management system. Mainly, RDBMS is going to talk about maintaining the data in multiple tables and connecting each and every table by maintaining the common column. 

## What is SQL? 
SQL stands for Structured Query Language. SQL is a programming language that we are going to use to communicate with our database. By using SQL, we can perform CRUD operations inside the database. 

## What do CRUD operations mean in a database? 

- C Refer to create operations. => CREATE, INSERT
- R Refers to read operations  => SELECT
- U Refers to update operations => ALTER, UPDATE
- D Refers to delete operation => DROP, DELETE

## How exactly can we perform CRUD operations in SQL? 

- Syntax to create a column inside the table : coulmnName datatype constraint

## Data types in SQL ?

## Numerical data types  (Datatype used to store numbers with decimals and without decimals)

SMALLINT => Store numbers without decimals from -32,768 to +32,767. 
INTEGER => It can store numbers without decimals from -2147483648 to +2147483647
BIGINT => It can store numbers without decimals up to a 19-digit number. 

FLOAT => It can store numbers with decimals up to 6 decimal points. 
DOUBLE => It can store numbers with decimals up to 15 decimal points. 
DECIMAL => It can store numbers with decimals up to roughly 16k decimal points. 

SMALLSERIAL => It can store only positive numbers without decimals from 1 to 32,767. 
SERIAL => It can store only positive numbers without decimals, from 1 to 214,74,83,647. 
BIGSERIAL => It can store only positive numbers without decimals, from 1 up to a 19-digit number. 

## Character data types (The datatypes used to store text values )

CHAR(n) => Can store a fixed number of characters 
VARCHAR(n) => It can store a variable number of characters. 
TEXT => It can store an unlimited number of characters. 

## Boolean datatype
BOOLEAN => It can store boolean values, that is, true or false. 

## Date Datatype 
DATE => It can store only date. 
TIME => It can store only time. 
TIMESTAMP => It can store both date and time together. 
INTERVAL => It can store the period in the form of seconds, minutes, hours, days, months, years etc..

## Operators in SQL ?
In SQL, mainly we are going to have three different types of operators. 

1. Arithmetic operators => The operators used in mathematical operations 

+ Represents addition 
- Represents subtraction 
* Represents multiplication 
/ Represents division 
% Represents modulus or remainder 

2. Comparison operators => The operators that we are going to use to compare two different values 

= Refers to equal to
!= Refers to not equal to 
> greater than
< less than
>= greater than or equal to
<= less than or equal to

3. Logical operators => The operators that we are going to use to build logic by combining two or more conditions together 

AND => It will return true only if all conditions are true. 
OR => It will return true if at least one condition becomes true. 
NOT => Will return the opposite result 
BETWEEN => It will filter the rows within the specific range. (SELECT * FROM employee WHERE employeid BETWEEN 10 AND 25 )
IN => Will filter the rows based on the list of specific values (SELECT * FROM EMPLOYEE WHERE EMPLOYEEID IN (1, 10, 23, 97))
EXISTS => Filter the rows based on the result of the subquery. (EMPID EXISTS (SELECT EMPID FROM PROMOTIONLIST))
LIKE => Filter the rows based on the pattern. We are going to use some special characters like `percentile (%)` and `_` to refer to the position while filtering the record. 
IS NULL => Filter the records having a null value. 


## Constraints in SQL ?

Constraints are all about conditions that we are going to add on top of the database columns to avoid invalid data. 

NOT NULL => The column having a NOT NULL constraint won't allow any null values. 
UNIQUE => The column having a unique constraint won't allow duplicate values. 
PRIMARY KEY => The column having a primary key constraint won't allow duplicate values and also null values. The primary key that we are going to use as a unique reference to separate each and every row within the table 
FOREIGN KEY => A foreign key constraint is a key that is going to maintain the relation between two different tables, ensuring referential integrity. 
CHECK => The column having a check constraint is going to verify custom conditions. 
DEFAULT => The column having a default constraint is always going to insert the default value when the user is not going to update it. 

## Default functions in SQL ?

Default functions are a set of default methods provided by the SQL programming language to manipulate the data that we have stored previously within the database. 

### Aggregate functions 
Aggregate functions are all about a set of functions designed to perform calculations on a set of rows and return a single result. 

COUNT() => It will return the total number of rows available in the table. 
SUM() => It will return the sum of all the values available in the specific column. 
AVG() => It will return the average value available within the specific column. 
MIN() => It will return the minimum value available in the specific column. 
MAX() => It will return the maximum value available in the specific column. 

### Numerical function 
Numerical functions in SQL are all about the functions that we are going to use to perform mathematical operations and manipulations on top of the numeric data. 

ABS() => It will return the absolute value or positive value of the number. => SELECT ABS (-123.99) => 123.99
CEIL() => It will return the nearest next integer value. => SELECT CEIL(123.11) => 124
FLOOR() => Will return the nearest previous integer value => SELECT FLOOR (123.99) => 123
ROUND() => It will return the rounded value of a particular number based on the decimal point specified. => SELECT ROUND(125.995, 2) => 126.00
POWER() => It will return the power of a specific number. => POWER (2,-2) => 0.25
SQRT() => It will return the square root of a specific number. => SQRT (121) => 11

### String Functions 
String functions in SQL are all about a set of default methods that we are going to use to manipulate and transform the text or character data. 

LENGTH() => It will return the total number of characters stored inside the string. 
UPPER() => It will convert all the characters of the string into uppercase. 
LOWER() => It will convert all the characters of the string into lowercase. 
SUBSTRING(COL_NAME START_INDEX TO END_INDEX) => Extract part of the string based on the start and end index specified by the user. 
TRIM() => It will eliminate leading and trailing spaces from the string. 
CONCAT() => It will join two or more strings and return a single string. 