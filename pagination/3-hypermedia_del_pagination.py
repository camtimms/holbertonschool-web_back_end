#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict, Optional
index_range = __import__("0-simple_helper_function").index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """  """
        assert isinstance(index, int) and isinstance(page_size, int)
        assert index >= 0 and page_size > 0

        indexed_data = self.indexed_dataset()
        max_index = max(indexed_data.keys()) if indexed_data else 0
        assert index <= max_index, "Index out of range"

        data = []
        current_index = index

        while len(data) < page_size and current_index <= max_index:
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        next_index = None
        while current_index <= max_index:
            if current_index in indexed_data:
                next_index = current_index
                current_index = max_index + 1
            else:
                current_index += 1

        hyper_index = {
            "index": index,
            "next_index": next_index,
            "page_size": page_size,
            "data": data
        }
        return hyper_index
