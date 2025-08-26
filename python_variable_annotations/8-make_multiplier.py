#!/usr/bin/env python3
"""Complex types - functions"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Takes a float and creates a function that multiplied a value by the
    multiplier"""
    def scaling_func(x: float):
        """Function that scales by the multiplier"""
        return x * multiplier
    return scaling_func
