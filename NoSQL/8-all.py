#!/usr/bin/env python3
"""List all documents in Python"""

def list_all(mongo_collection):
    """Lists all docs in a collection"""
    return list(mongo_collection.find())