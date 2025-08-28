#!/usr/bin/env python3
"""Async Comprehensions"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Uses async comprehension to wait for async generator and returns
    the result"""
    result = [num async for num in async_generator()]
    return result
