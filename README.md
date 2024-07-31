# BCD-Generator-Translator
Our website converts Decimal to packed, unpacked, and densely packed BCD and can convert back to decimal

decimalInput splits the decimal into individual single digits and is passed as an array

a binary map is used to convert decimal to packed, unpacked BCD, and Densely Packed BCD then is joined together with .join(). 

While the packed and unpacked BCD uses the binary map directly, the Densely Packed BCD gets the packed BCD and reorganizes depending on what 'a', 'e', and 'i' contain.

The next function converts it from BCD back to decimal. All these are done using arrays and the manipulation of maps, .split(), and .join().

The images below show the output upon testing.





![image-4](https://github.com/user-attachments/assets/5f230a83-1979-41d2-ba28-40a216ec00ea)
![Screenshot 2024-07-31 16 05 53](https://github.com/user-attachments/assets/723cf02c-e700-4022-8ac9-ad9fb91aae78)

