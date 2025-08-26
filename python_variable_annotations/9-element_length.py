#!/usr/bin/env python3
"""Let's duck type an iterable object"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Take a list of sequence items and returns a list of tuples of the value
    and it's length"""
    return [(i, len(i)) for i in lst]
