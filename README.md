
# BCD-Generator-Translator
Our website converts Decimal to packed, unpacked, and densely packed BCD and can convert back to decimal

decimalInput splits the decimal into individual single digits and is passed as an array

a binary map is used to convert decimal to packed, unpacked BCD, and Densely Packed BCD then is joined together with .join(). 

While the packed and unpacked BCD uses the binary map directly, the Densely Packed BCD gets the packed BCD and reorganizes depending on what 'a', 'e', and 'i' contain.

The next function converts it from BCD back to decimal. All these are done using arrays and the manipulation of maps, .split(), and .join().

Instructions for use:

Generate BCD: 
  - input decimal value to be converted to its respective BCD, Packed BCD, and Densely Packed BCD equivalent
  - press enter upon entering input to display corresponding output


Translate BCD:
  - input Densely Packed BCD value in multiples of 10 bits.
  - pressing enter will display the translated decimal value of the input

General Instructions: 
  - all inputs should not contain radix points or any unary sign.
  - decimal input will accept digits 0-9 while densely packed BCD inputs will accept bit values 0 and 1 only

The images below show the output upon testing.


![image-4](https://github.com/user-attachments/assets/5f230a83-1979-41d2-ba28-40a216ec00ea)
![Screenshot 2024-07-31 16 05 53](https://github.com/user-attachments/assets/723cf02c-e700-4022-8ac9-ad9fb91aae78)
![Screenshot 2024-07-31 17 07 43](https://github.com/user-attachments/assets/b486731e-3f2d-4c2c-9cee-cefdadf04170)
![Screenshot 2024-07-31 17 08 06](https://github.com/user-attachments/assets/91dab75a-4db6-413d-9ee5-c48755eab44e)
![Screenshot 2024-07-31 17 09 35](https://github.com/user-attachments/assets/03b2e075-39d6-4b9b-bc4e-b6ff7ccdc7e1)
![Screenshot 2024-07-31 17 09 51](https://github.com/user-attachments/assets/d3d20415-f900-49d4-a3e6-56ecf0de577e)


