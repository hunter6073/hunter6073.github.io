import pandas as pd
import os
import subprocess
import time
import requests

def remove_space(s):
	res = ""
	for i in s:
		if i != " ":
			res += i
		else:
			res += "_"
	return res



file_name = "test.xls" # the name of the excel file
sheet = "articles" # the name of the sheet in the file for use
df = pd.read_excel(io=file_name, sheet_name=sheet)

url = []
news_type = []
success_type = []
photo_file_path = []
title = []
title_short = []
content = []
year = []
short = []
appear_page = []

# traverse each row for specific item values in a column

for index, row in df.iterrows():
	news_type.append(row["news_type"])
	success_type.append(row["success_type"])
	title.append(row["title"])
	title_short.append(row["title_short"])
	content.append(row["description"])
	photo_file_path.append("/assets/articles/" + str(row["photo_src"]) + ".jpg")
	url.append(row["url"])
	year.append(row["year"])
	short.append(row["use_short_title"])
	appear_page.append(row["appear_page"])


for i in range(len(url)):
	write_to_file = "cases_" +str(i+1) + ".md"
	file = open(write_to_file, 'w+')
	file.write("---\n")
	file.write("layout: post" + '\n') # order to show the articles
	file.write("sequence: "+ str(i+1) + '\n') # order to show the articles
	file.write("appear_page: "+ str(appear_page[i]) + '\n') # which page shows this article  
	file.write("type: "+ str(news_type[i]) + '\n') # the type of the article, for use in news.html  
	file.write("success_type: "+ str(success_type[i]) + '\n') # the type of the article, for use in success.html 
	file.write('src: ' + photo_file_path[i] + '\n') # src for the front picture of this article
	file.write("title: \"" + title[i] + '\"\n') # the title of the article
	file.write("title_short: " + str(title_short[i]) + '\n') # a shorter version of the article
	file.write("use_short_title: " + str(short[i]) + '\n') # boolean value to decide if we use the shorter title
	file.write("description: " + content[i] + '\n') # first paragraph of the article, acts as a brief description
	file.write("year: " + str(year[i]) + '\n') # publish year of this article
	file.write("---" + '\n\n')

	try:
		r = requests.get(url[i])
		htmltxt = r.text[len("<!DOCTYPE html>"):] # 掐头		
		htmltxt_ = htmltxt.split("item.src = \"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\";")
		htmltxt = htmltxt_[0]+"\n"+ "\t\t\t\tvar url = item.getAttribute(\'data-src\');"+"\n"+"\t\t\t\titem.src = url;\n"+htmltxt_[1]
		htmltxt_ = htmltxt.split('"qr_code_pc"')
		htmltxt = htmltxt_[0] + '"qr_code_pc" style="display:none;"' + htmltxt_[1];
		htmltxt_ = htmltxt.split('"weui-desktop-popover__content')
		htmltxt = htmltxt_[0] + '"weui-desktop-popover__content" style="display:none;' + htmltxt_[1];
		print("finished case: "+str(i)+" cases_" + title[i] + ".md")
	except:
		print("FAILED case: "+str(i)+" cases_" + title[i] + ".md")

	file.write(htmltxt+"\n")
	file.close()
	
print("conversion finished")