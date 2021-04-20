#Acceso a Base de Datos
from twilio.rest import Client
import pymysql
import os
from prettytable import PrettyTable 

con = pymysql.connect(host='localhost', user='root', password='', db='universe')

#Funciones CRUD y MENU
def imprimirMenu():
    os.system('clear')
    t = PrettyTable(['MENU - CRUD PYTHON & MYSQL'])
    t.add_row(['1) Agregar planeta'])
    t.add_row(['2) Consultar planetas'])
    t.add_row(['3) Consultar 1 planeta'])
    t.add_row(['4) Modificar planeta'])
    t.add_row(['5) Eliminar planeta'])
    t.add_row(['6) Salir'])
    print(t)

def getplanets():
    os.system('clear')
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

def getplanet(num):
    os.system('clear')
    with con.cursor() as cursor:
        sql = 'SELECT * FROM planets  WHERE id='+num
        #print(sql)
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

def insertplanet(name,ordern,moons):
    with con.cursor() as cursor:
        sql = "INSERT INTO `planets` VALUES (DEFAULT,'"+name+"',"+ordern+","+moons+")"
        print ('')
        try:
            cursor.execute(sql)
            print('>>> Planeta agregado <<<')
        except:
            print('Error')
    con.commit()
    sendmessage('Un nuevo planeta ha sido agregado a este universo!!!')

def updateplanet(num,name,ordern,moons):
    with con.cursor() as cursor:
        #UPDATE planets SET name='Mercurio',ordern=1,moons=1 WHERE id=1
        sql = "UPDATE planets SET name='"+name+"',ordern="+ordern+",moons="+moons+" WHERE id="+num
        print ('')
        try:
            cursor.execute(sql)
            print('>>> Planeta Actualizado <<<')
        except:
            print('Error')
    con.commit()
    sendmessage(name+' ha sido modificado')

def deleteplanet(num):
    with con.cursor() as cursor:
        #DELETE FROM `planets` WHERE 0
        sql = 'DELETE FROM planets WHERE id='+num
        print ('')
        try:
            cursor.execute(sql)
            print('>>> Planeta Eliminado <<<')
        except:
            print('Error')
    con.commit()

#   >>> TWILIO <<<
def sendmessage(msj):
    from_whatsapp_number    = 'whatsapp:+14155238886'
    to_whatsapp_number      = 'whatsapp:+573006954218'
    account_id              = 'AC940be3b558157eed36844f2093d67cc1'
    auth_tokem              = '849a18a9bc4819262ba11e83e57bff86'
    client = Client(account_id, auth_tokem)
    client.messages.create(body=msj,from_=from_whatsapp_number,to=to_whatsapp_number)

# CICLO PARA EL MENÚ PERMANENTE
while True:
    imprimirMenu()
    opt = int(input('Ingrese el número de la opción -> '))
    if opt == 1:
        print('>>> Agregar planeta <<<')
        input('Presione cualquier tecla para continuar ')
        os.system('clear')
        name = input('Nombre -> ')
        ordern = input('Nº planeta -> ')
        moons = input('Nº lunas -> ')
        insertplanet(name,ordern,moons)
        input('Presione cualquier tecla para continuar ')
    elif opt == 2:   
        print('>>> Consultar todos los planetas <<<')
        input('Presione cualquier tecla para continuar ')
        getplanets()
        input('Presione cualquier tecla para continuar ')
    elif opt == 3:
        print('>>> Consultar planeta <<<')
        num= input('Ingrese el id del planeta -> ')
        getplanet(num)
        input('Presione cualquier tecla para continuar ')
    elif opt == 4:
        print('>>> Modificar planeta <<<')
        input('Presione cualquier tecla para continuar ')
        getplanets()
        num = input('Ingrese el id del planeta a modificar -> ')
        getplanet(num)
        name = input('Nombre -> ')
        ordern = input('Nº planeta -> ')
        moons = input('Nº lunas -> ')
        updateplanet(num,name,ordern,moons)
        input('Presione cualquier tecla para continuar ')
    elif opt == 5:
        print('>>> Eliminar planeta <<<')
        input('Presione cualquier tecla para continuar ')
        getplanets()
        num = input('Ingrese el id del planeta a Eliminar -> ')
        deleteplanet(num)
        input('Presione cualquier tecla para continuar ')
    elif opt == 6:
        break
    else:
        print("¡El númmero no es una Opción!")
        input('Presione cualquier tecla para continuar ')


        
