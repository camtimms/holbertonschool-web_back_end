#!/usr/bin/env python3

import asyncio
import typing
from time import time
async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    start_time = time()

    coroutines = []
    for i in range(4):
        coroutine = async_comprehension()
        coroutines.append(coroutine)

    await asyncio.gather(*coroutines)

    end_time = time()
    total_time = end_time - start_time
    return (total_time)