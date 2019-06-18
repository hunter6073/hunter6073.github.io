import pandas as pd

file_name = "test.xls"
sheet = "offers"

df = pd.read_excel(io=file_name, sheet_name=sheet)

ranking = []
src = []
school = []
description = []
major = []


for elem in df["ranking"]:
	ranking.append(elem)
for elem in df["src"]:
	res = str(elem)
	if len(str(elem)) == 1:
		res = "00" + str(elem)
	elif len(str(elem)) == 2:
		res = "0" + str(elem)
	src.append("/assets/offer_update/"+ res +".jpg")
	print(res)
for elem in df["description"]:
	description.append(elem)
for elem in df["school"]:
	school.append(elem)
for elem in df["major"]:
	major.append(elem)

def formatStr(str):
	res = []
	for i in str:
		if i == '-':
			res.append('_')
		else:
			res.append(i)
	return ''.join(res)

for i in range(len(src)):
	write_to_file = "offers_" + formatStr(ranking[i]) + "_" + str(i + 1) + ".md"
	file = open(write_to_file, 'w+')
	file.write("---\n")
	"""
	wechat url only valid for testing purpose.
	should change to an actual page inside the site for SEO.
	"""
	file.write("ranking: " + ranking[i] + '\n')
	file.write("school: " + school[i] + '\n')
	file.write("description: " + description[i] + '\n')
	file.write('src: ' + src[i] + '\n')
	file.write('major: ' + major[i] + '\n')
	file.write("sequence: " + str(i + 1) + '\n')
	file.write("---" + '\n')
	file.close()