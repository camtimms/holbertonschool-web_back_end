#!/usr/bin/env python3
"""Log Stats"""
from pymongo import MongoClient


if __name__ == "__main__":
    """Displays the stats of the Nginx logs"""
    client = MongoClient('mongodb://localhost:27017/')
    db = client['logs']
    collection = db['nginx']

    num_logs = collection.count_documents({})
    print(f"{num_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    status_count = collection.count_documents({"method": "GET",
                                               "path": "/status"})
    print(f"{status_count} status check")