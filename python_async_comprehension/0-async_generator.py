#!/usr/bin/env python3
"""Async Generator"""
import asyncio
from random import random


async def async_generator():
    """Generates 10 random numbers over 10 seconds"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random() * 10
