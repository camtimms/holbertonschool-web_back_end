#!/usr/bin/python3
"""The basics of async"""
from random import random
import asyncio


async def wait_random(max_delay = 10):
    """Waits a random ammount of time up to max_delay"""
    delay = random() * max_delay
    await asyncio.sleep(delay)
    return delay
