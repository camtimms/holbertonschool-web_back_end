#!/usr/bin/env python3
"""Complex types - mixed list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Takes a list of ints or floats and returns the sum as a float"""
    sum: float = 0.0
    for value in mxd_lst:
        sum += value
    return sum
