#!/usr/bin/env python3
"""Measure the average runtime of the wait_n function"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time of wait_n and returns the average
    time"""
    start_time = time.time()

    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()
    total_time = end_time - start_time
    return total_time/n
