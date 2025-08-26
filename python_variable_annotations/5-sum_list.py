#!/usr/bin/env python3
"""Complex types - list of floats"""


def sum_list(input_list: list) -> float:
    """Takes a list of floats and return their sum"""
    sum = 0.0
    for value in input_list:
        if type(value) is float:
            raise TypeError("Values aren't all floats")
        sum += value
    return (sum)
