import os
import re

allowed_categories = [
    "আবাহন ও আরাধনা",
    "প্রশংসা ও ধন্যবাদ",
    "বড়দিন",
    "নববর্ষ",
    "দুঃখভোগ, ক্রুশীয় মৃত্যু",
    "পুনরুত্থান",
    "পুনঃ আগমন",
    "প্রার্থনা ও সমর্পণ",
    "খ্রীষ্টীয় জীবন ও সাক্ষ্য",
    "পরিত্রাণ ও সুসমাচার",
    "বিবাহ",
    "পরলোক",
    "সমাধি ও সান্ত্বনা",
    "প্রাতঃকালীন ও সায়ংকালীন",
    "কোরাস্",
    "হিন্দি",
    "ছোটদের"
]

data_dir = "src/data"
files = [f for f in os.listdir(data_dir) if f.endswith(".ts")]

categories_found = set()

for filename in files:
    filepath = os.path.join(data_dir, filename)
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        # Find single category
        matches = re.findall(r'category:\s*["\'](.*?)["\']', content)
        for m in matches:
            categories_found.add(m)
        # Find multiple categories (array)
        matches_arr = re.findall(r'categories:\s*\[(.*?)\]', content, re.DOTALL)
        for m in matches_arr:
            submatches = re.findall(r'["\'](.*?)["\']', m)
            for sm in submatches:
                categories_found.add(sm)

print("Unique categories found:")
for c in sorted(list(categories_found)):
    is_allowed = c in allowed_categories
    print(f"{'[ALLOWED]' if is_allowed else '[NOT MATCHED]'} {c}")
