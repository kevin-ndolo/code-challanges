# CSV Data Analyzer
#   Given a CSV file with sales data (date, product, amount, region):
#     Calculate total sales by region
#     Find the best-selling product
#     Generate a summary report
#     Handle missing or invalid data gracefully


import csv
from collections import defaultdict

def analyze_sales_data(file_path):
    region_sales = defaultdict(float)
    product_sales = defaultdict(float)

    with open(file_path, newline='') as csvfile:
        reader = csv.reader(csvfile)

        for row in reader:
           
            if len(row) != 4:
                continue  

            date, product, amount, region = row

            
            if product.lower() == "product" or not product or not region or not amount:
                continue

            try:
                amount = float(amount)
            except ValueError:
                continue 

            region_sales[region] += amount
            product_sales[product] += amount

    print("Total Sales by Region:")
    for region, total in region_sales.items():
        print(f"- {region}: ${total:.2f}")

    if product_sales:
        best_product = max(product_sales, key=product_sales.get)
        print("\n Best-Selling Product:")
        print(f"- {best_product}: ${product_sales[best_product]:.2f}")
    else:
        print("\n No valid product sales found.")



analyze_sales_data("python/csv-sample-data.csv")




