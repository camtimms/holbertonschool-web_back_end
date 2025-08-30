#!/usr/bin/env python3
"""Change school topics"""


def update_topics(mongo_collection, name, topics):
    """Updates topics of docs with a specific name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
