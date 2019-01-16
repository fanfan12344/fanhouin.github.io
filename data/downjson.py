import time
from urllib.request import urlretrieve
url1 = "https://iot.martinintw.com/api/v1/data/12345612"
url2 = "https://iot.martinintw.com/api/v1/data/12345613"
url3 = "https://iot.martinintw.com/api/v1/data/12345614"
filename1 = "data1.json"
filename2 = "data2.json"
filename3 = "data3.json"

while(1):
    urlretrieve(url1, filename1)
    urlretrieve(url2, filename2)
    urlretrieve(url3, filename3)
    time.sleep(10)
    
