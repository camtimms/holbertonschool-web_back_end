#!/usr/bin/env python3
"""Async Comprehensions"""
async_generator = __import__('0-async_generator').async_generator
import asyncio
from typing import List

async def async_comprehension() -> List:
    result = [num async for num in async_generator()]
    return result
