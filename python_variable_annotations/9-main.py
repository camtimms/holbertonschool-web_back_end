#!/usr/bin/env python3

element_length =  __import__('9-element_length').element_length

lst = [[1, 3, 5, 7], ["abcdef"]]

print(element_length.__annotations__)
print(element_length(lst))