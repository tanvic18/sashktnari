import os
import pandas as pd

# Folder where your CSV files are stored
folder_path = 'C:\Users\riyas\sashaktnari\datasets\jobs'

# List all CSV files in the folder
csv_files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]

# Initialize an empty list to hold the dataframes
df_list = []

# Iterate over each CSV file, load it, and append it to the list
for file in csv_files:
    file_path = os.path.join(folder_path, file)  # Get the full path of the CSV file
    df = pd.read_csv(file_path)  # Read the CSV file into a DataFrame
    df_list.append(df)  # Append DataFrame to the list

# Combine all DataFrames into a single DataFrame
combined_data = pd.concat(df_list, ignore_index=True)

# Display the first few rows of the combined dataset
print(combined_data.head())
