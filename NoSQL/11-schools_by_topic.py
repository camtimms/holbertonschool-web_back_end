#!/usr/bin/env python3
""" Where can I learn Python? """


def schools_by_topic(mongo_collection, topic):
    """Returns a list of schools with a given topic"""
    schools = list(mongo_collection.find({"topics": topic}))
    return schools