#!/usr/bin/env python3
"""Simple helper function"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """Takes a page number and size and returns a set of indexs of that range"""
    start = (page * page_size) - page_size
    end = page * page_size

    return (start, end)