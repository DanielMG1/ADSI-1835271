#Acceso a Base de Datos

import pymysql
from prettytable import PrettyTable 

con = pymysql.connect(host='localhost', user='root', password='', db='universe')



def getplanets():
    with con.cursor() as cursor:
        sql = 'SELECT * FROM planets'
        try:
            cursor.execute(sql)
            result = cursor.fetchall()
            print('')
            t = PrettyTable(['ID', 'NAME', 'ORDER', 'MOONS'])
            for row in result:
                t.add_row([row[0],row[1],row[2],row[3]])
            print(t)
        except:
            print('Error')
    con.commit()

getplanets()

