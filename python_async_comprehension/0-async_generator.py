#!/usr/bin/env python3
"""Async Generator"""
import asyncio
from random import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Generates 10 random numbers over 10 seconds"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random() * 10
