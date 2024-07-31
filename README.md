# BCD-Generator-Translator
Our website converts Decimal to packed, unpacked, and densely packed BCD and can convert back to decimal

decimalInput splits the decimal into individual single digits and is passed as an array

a binary map is used to convert decimal to packed, unpacked BCD, and Densely Packed BCD then is joined together with .join(). 

While the packed and unpacked BCD uses the binary map directly, the Densely Packed BCD gets the packed BCD and reorganizes depending on what 'a', 'e', and 'i' contain.

