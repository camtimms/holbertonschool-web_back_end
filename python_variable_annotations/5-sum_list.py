#!/usr/bin/env python3
"""Complex types - list of floats"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Takes a list of floats and return their sum"""
    sum: float = 0.0
    for value in input_list:
        sum += value
    return sum
